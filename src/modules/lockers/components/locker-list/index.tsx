'use client';

import React, { useState, useMemo } from 'react';
import { FunnelSimple, SortAscending, MagnifyingGlass } from '@phosphor-icons/react';
import LockerCard from '../locker-card';
import type { LockerMock } from '@/lib/mock-data/lockers-mock';
import './locker-list.scss';

interface LockerListProps {
  lockers: LockerMock[];
  variant?: 'grid' | 'list';
  showFilters?: boolean;
  showSearch?: boolean;
  onLockerSelect?: (locker: LockerMock) => void;
  emptyMessage?: string;
}

type SortOption = 'distance' | 'availability' | 'name';
type FilterType = 'all' | 'shopping' | 'street' | 'store' | 'subway';

const LockerList: React.FC<LockerListProps> = ({
  lockers,
  variant = 'grid',
  showFilters = true,
  showSearch = true,
  onLockerSelect,
  emptyMessage = 'Nenhum locker encontrado',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('distance');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  const filterOptions: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'Todos' },
    { value: 'shopping', label: 'Shopping' },
    { value: 'subway', label: 'Metrô' },
    { value: 'store', label: 'Loja' },
    { value: 'street', label: 'Rua' },
  ];

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'distance', label: 'Mais próximos' },
    { value: 'availability', label: 'Mais disponíveis' },
    { value: 'name', label: 'Nome A-Z' },
  ];

  const filteredAndSortedLockers = useMemo(() => {
    let result = [...lockers];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (locker) =>
          locker.name.toLowerCase().includes(query) ||
          locker.address.toLowerCase().includes(query) ||
          locker.city.toLowerCase().includes(query)
      );
    }

    // Apply type filter
    if (filterType !== 'all') {
      result = result.filter((locker) => locker.type === filterType);
    }

    // Apply availability filter
    if (showOnlyAvailable) {
      result = result.filter(
        (locker) => locker.isActive && locker.availableCompartments > 0
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'distance':
          return (a.distance || Infinity) - (b.distance || Infinity);
        case 'availability':
          return b.availableCompartments - a.availableCompartments;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return result;
  }, [lockers, searchQuery, sortBy, filterType, showOnlyAvailable]);

  return (
    <div className="locker-list">
      {(showFilters || showSearch) && (
        <div className="locker-list__controls">
          {showSearch && (
            <div className="locker-list__search">
              <MagnifyingGlass size={20} weight="bold" />
              <input
                type="text"
                placeholder="Buscar por nome, endereço..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="locker-list__search-input"
              />
            </div>
          )}

          {showFilters && (
            <div className="locker-list__filters">
              <div className="locker-list__filter-group">
                <FunnelSimple size={18} weight="bold" />
                <div className="locker-list__filter-chips">
                  {filterOptions.map((option) => (
                    <button
                      key={option.value}
                      className={`locker-list__filter-chip ${
                        filterType === option.value ? 'locker-list__filter-chip--active' : ''
                      }`}
                      onClick={() => setFilterType(option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="locker-list__sort-group">
                <SortAscending size={18} weight="bold" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="locker-list__sort-select"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <label className="locker-list__checkbox">
                <input
                  type="checkbox"
                  checked={showOnlyAvailable}
                  onChange={(e) => setShowOnlyAvailable(e.target.checked)}
                />
                <span>Apenas disponíveis</span>
              </label>
            </div>
          )}
        </div>
      )}

      <div className="locker-list__count">
        {filteredAndSortedLockers.length} locker{filteredAndSortedLockers.length !== 1 ? 's' : ''} encontrado{filteredAndSortedLockers.length !== 1 ? 's' : ''}
      </div>

      {filteredAndSortedLockers.length > 0 ? (
        <div className={`locker-list__grid locker-list__grid--${variant}`}>
          {filteredAndSortedLockers.map((locker) => (
            <LockerCard
              key={locker.id}
              locker={locker}
              variant={variant === 'list' ? 'horizontal' : 'default'}
              showDistance={true}
              onSelect={onLockerSelect}
            />
          ))}
        </div>
      ) : (
        <div className="locker-list__empty">
          <MagnifyingGlass size={48} weight="thin" />
          <p>{emptyMessage}</p>
          {(searchQuery || filterType !== 'all') && (
            <button
              className="locker-list__clear-filters"
              onClick={() => {
                setSearchQuery('');
                setFilterType('all');
                setShowOnlyAvailable(false);
              }}
            >
              Limpar filtros
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default LockerList;
