'use client';

import React, { useState, useEffect } from 'react';
import {
  Funnel,
  X,
  Star,
  Lightning,
  Tag,
  Storefront,
  CaretDown,
  CaretUp
} from '@phosphor-icons/react';
import { SearchFilters as SearchFiltersType, SortOption } from '@/lib/search/types';
import './search-filters.scss';

interface SearchFiltersProps {
  filters: Partial<SearchFiltersType>;
  onFiltersChange: (filters: Partial<SearchFiltersType>) => void;
  categories: string[];
  selectedCategories: string[];
  onCategoriesChange: (categories: string[]) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  totalResults: number;
  onClearAll: () => void;
}

const SearchFiltersComponent: React.FC<SearchFiltersProps> = ({
  filters,
  onFiltersChange,
  categories,
  selectedCategories,
  onCategoriesChange,
  sortBy,
  onSortChange,
  totalResults,
  onClearAll,
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    categories: true,
    price: true,
    rating: false,
    availability: false,
  });

  // Close mobile filters when clicking outside
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handlePriceChange = (min: number, max: number) => {
    onFiltersChange({ ...filters, priceRange: [min, max] });
  };

  const handleRatingChange = (rating: number) => {
    onFiltersChange({ ...filters, minRating: rating });
  };

  const handleAvailabilityChange = (key: 'onlyOpen' | 'withDiscount' | 'immediatePickup', value: boolean) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const activeFiltersCount =
    (selectedCategories.length > 0 ? 1 : 0) +
    (filters.priceRange && (filters.priceRange[0] > 0 || filters.priceRange[1] < 500) ? 1 : 0) +
    (filters.minRating && filters.minRating > 0 ? 1 : 0) +
    (filters.onlyOpen ? 1 : 0) +
    (filters.withDiscount ? 1 : 0) +
    ((filters as any).immediatePickup ? 1 : 0);

  const FiltersContent = () => (
    <>
      {/* Categories Section */}
      <div className="search-filters__section">
        <button
          className="search-filters__section-header"
          onClick={() => toggleSection('categories')}
        >
          <div className="search-filters__section-title">
            <Storefront size={18} weight="fill" />
            <span>Categorias</span>
          </div>
          {expandedSections.categories ? <CaretUp size={16} /> : <CaretDown size={16} />}
        </button>

        {expandedSections.categories && (
          <div className="search-filters__section-content">
            <div className="search-filters__categories">
              {categories.map(category => (
                <label key={category} className="search-filters__checkbox">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        onCategoriesChange([...selectedCategories, category]);
                      } else {
                        onCategoriesChange(selectedCategories.filter(c => c !== category));
                      }
                    }}
                  />
                  <span className="search-filters__checkbox-custom" />
                  <span className="search-filters__checkbox-label">{category}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Price Range Section */}
      <div className="search-filters__section">
        <button
          className="search-filters__section-header"
          onClick={() => toggleSection('price')}
        >
          <div className="search-filters__section-title">
            <Tag size={18} weight="fill" />
            <span>Faixa de Preço</span>
          </div>
          {expandedSections.price ? <CaretUp size={16} /> : <CaretDown size={16} />}
        </button>

        {expandedSections.price && (
          <div className="search-filters__section-content">
            <div className="search-filters__price-range">
              <div className="search-filters__price-inputs">
                <div className="search-filters__price-input">
                  <span>R$</span>
                  <input
                    type="number"
                    min={0}
                    max={filters.priceRange?.[1] || 500}
                    value={filters.priceRange?.[0] || 0}
                    onChange={(e) => handlePriceChange(Number(e.target.value), filters.priceRange?.[1] || 500)}
                  />
                </div>
                <span className="search-filters__price-separator">até</span>
                <div className="search-filters__price-input">
                  <span>R$</span>
                  <input
                    type="number"
                    min={filters.priceRange?.[0] || 0}
                    max={1000}
                    value={filters.priceRange?.[1] || 500}
                    onChange={(e) => handlePriceChange(filters.priceRange?.[0] || 0, Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="search-filters__price-slider">
                <input
                  type="range"
                  min={0}
                  max={500}
                  value={filters.priceRange?.[1] || 500}
                  onChange={(e) => handlePriceChange(filters.priceRange?.[0] || 0, Number(e.target.value))}
                  className="search-filters__slider"
                />
              </div>

              <div className="search-filters__price-quick">
                <button
                  className={`search-filters__price-btn ${filters.priceRange?.[1] === 50 ? 'active' : ''}`}
                  onClick={() => handlePriceChange(0, 50)}
                >
                  Até R$50
                </button>
                <button
                  className={`search-filters__price-btn ${filters.priceRange?.[0] === 50 && filters.priceRange?.[1] === 100 ? 'active' : ''}`}
                  onClick={() => handlePriceChange(50, 100)}
                >
                  R$50-100
                </button>
                <button
                  className={`search-filters__price-btn ${filters.priceRange?.[0] === 100 ? 'active' : ''}`}
                  onClick={() => handlePriceChange(100, 500)}
                >
                  R$100+
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Rating Section */}
      <div className="search-filters__section">
        <button
          className="search-filters__section-header"
          onClick={() => toggleSection('rating')}
        >
          <div className="search-filters__section-title">
            <Star size={18} weight="fill" />
            <span>Avaliação</span>
          </div>
          {expandedSections.rating ? <CaretUp size={16} /> : <CaretDown size={16} />}
        </button>

        {expandedSections.rating && (
          <div className="search-filters__section-content">
            <div className="search-filters__rating">
              {[4, 3, 2, 1].map(rating => (
                <label key={rating} className="search-filters__rating-option">
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.minRating === rating}
                    onChange={() => handleRatingChange(rating)}
                  />
                  <span className="search-filters__rating-custom" />
                  <span className="search-filters__rating-stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        weight={i < rating ? 'fill' : 'regular'}
                        className={i < rating ? 'filled' : ''}
                      />
                    ))}
                  </span>
                  <span className="search-filters__rating-label">
                    {rating}+ estrelas
                  </span>
                </label>
              ))}
              {filters.minRating && (
                <button
                  className="search-filters__clear-rating"
                  onClick={() => handleRatingChange(0)}
                >
                  Limpar
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Availability Section */}
      <div className="search-filters__section">
        <button
          className="search-filters__section-header"
          onClick={() => toggleSection('availability')}
        >
          <div className="search-filters__section-title">
            <Lightning size={18} weight="fill" />
            <span>Disponibilidade</span>
          </div>
          {expandedSections.availability ? <CaretUp size={16} /> : <CaretDown size={16} />}
        </button>

        {expandedSections.availability && (
          <div className="search-filters__section-content">
            <div className="search-filters__toggles">
              <label className="search-filters__toggle">
                <input
                  type="checkbox"
                  checked={(filters as any).immediatePickup || false}
                  onChange={(e) => handleAvailabilityChange('immediatePickup' as any, e.target.checked)}
                />
                <span className="search-filters__toggle-switch" />
                <span className="search-filters__toggle-label">
                  <Lightning size={16} weight="fill" className="icon-green" />
                  Retirada Imediata
                </span>
              </label>

              <label className="search-filters__toggle">
                <input
                  type="checkbox"
                  checked={filters.onlyOpen || false}
                  onChange={(e) => handleAvailabilityChange('onlyOpen', e.target.checked)}
                />
                <span className="search-filters__toggle-switch" />
                <span className="search-filters__toggle-label">
                  Apenas lojas abertas
                </span>
              </label>

              <label className="search-filters__toggle">
                <input
                  type="checkbox"
                  checked={filters.withDiscount || false}
                  onChange={(e) => handleAvailabilityChange('withDiscount', e.target.checked)}
                />
                <span className="search-filters__toggle-switch" />
                <span className="search-filters__toggle-label">
                  <Tag size={16} weight="fill" className="icon-red" />
                  Com desconto
                </span>
              </label>
            </div>
          </div>
        )}
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="search-filters search-filters--desktop">
        <div className="search-filters__header">
          <h3 className="search-filters__title">
            <Funnel size={20} weight="fill" />
            Filtros
          </h3>
          {activeFiltersCount > 0 && (
            <button className="search-filters__clear" onClick={onClearAll}>
              Limpar ({activeFiltersCount})
            </button>
          )}
        </div>

        <div className="search-filters__content">
          <FiltersContent />
        </div>
      </aside>

      {/* Mobile Filter Button */}
      <button
        className="search-filters__mobile-trigger"
        onClick={() => setIsMobileOpen(true)}
      >
        <Funnel size={18} weight="fill" />
        Filtros
        {activeFiltersCount > 0 && (
          <span className="search-filters__mobile-badge">{activeFiltersCount}</span>
        )}
      </button>

      {/* Mobile Bottom Sheet */}
      {isMobileOpen && (
        <div className="search-filters__overlay" onClick={() => setIsMobileOpen(false)}>
          <div
            className="search-filters search-filters--mobile"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="search-filters__mobile-header">
              <h3 className="search-filters__title">
                <Funnel size={20} weight="fill" />
                Filtros
              </h3>
              <button
                className="search-filters__close"
                onClick={() => setIsMobileOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="search-filters__mobile-content">
              <FiltersContent />
            </div>

            <div className="search-filters__mobile-footer">
              <button
                className="search-filters__mobile-clear"
                onClick={onClearAll}
              >
                Limpar filtros
              </button>
              <button
                className="search-filters__mobile-apply"
                onClick={() => setIsMobileOpen(false)}
              >
                Ver {totalResults} resultados
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchFiltersComponent;
