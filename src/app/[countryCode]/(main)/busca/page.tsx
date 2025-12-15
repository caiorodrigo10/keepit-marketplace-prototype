'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductSearchCard from '@/modules/search/components/ProductSearchCard';
import SearchFiltersComponent from '@/modules/search/components/search-filters';
import { searchProducts as searchData } from '@/lib/search/searchData';
import { applyFilters, sortResults } from '@/lib/search/searchHelpers';
import { SearchFilters, SortOption } from '@/lib/search/types';
import { MagnifyingGlass, Funnel, Lightning } from '@phosphor-icons/react';
import AOSInit from '@modules/home/components/aos-init';
import './busca.scss';

export default function BuscaPage() {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const categoriaParam = searchParams.get('categoria') || '';
  const ordenarParam = searchParams.get('ordenar') as SortOption || SortOption.RELEVANCE;

  const [query, setQuery] = useState(queryParam);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoriaParam ? [categoriaParam] : []
  );
  const [sortBy, setSortBy] = useState<SortOption>(ordenarParam);
  const [filters, setFilters] = useState<Partial<SearchFilters>>({
    priceRange: [0, 500],
    minRating: 0,
    onlyOpen: false,
    withDiscount: false,
  });

  // Update state when URL params change
  useEffect(() => {
    setQuery(queryParam);
    if (categoriaParam) {
      setSelectedCategories([categoriaParam]);
    }
  }, [queryParam, categoriaParam]);

  // Search and filter logic
  const results = useMemo(() => {
    let filtered = [...searchData];

    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(p => selectedCategories.includes(p.categories));
    }

    // Apply price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      if (min > 0 || max < 500) {
        filtered = filtered.filter(p => p.price >= min && p.price <= max);
      }
    }

    // Apply rating filter
    if (filters.minRating && filters.minRating > 0) {
      filtered = filtered.filter(p => p.rating >= filters.minRating!);
    }

    // Apply only open filter
    if (filters.onlyOpen) {
      filtered = filtered.filter(p => p.vendor.isOpen);
    }

    // Apply discount filter
    if (filters.withDiscount) {
      filtered = filtered.filter(p => p.discount && p.discount > 0);
    }

    // Apply immediate pickup filter (simulated: rating >= 4 and vendor is open)
    if ((filters as any).immediatePickup) {
      filtered = filtered.filter(p => p.rating >= 4 && p.vendor.isOpen);
    }

    // Sort results
    filtered = sortResults(filtered, sortBy);

    return filtered;
  }, [selectedCategories, sortBy, filters]);

  // Get unique categories
  const allCategories = Array.from(new Set(searchData.map(p => p.categories))).sort();

  // Clear all filters
  const handleClearAll = () => {
    setSelectedCategories([]);
    setFilters({
      priceRange: [0, 500],
      minRating: 0,
      onlyOpen: false,
      withDiscount: false,
    });
  };

  // Count active filters
  const activeFiltersCount =
    (selectedCategories.length > 0 ? selectedCategories.length : 0) +
    (filters.priceRange && (filters.priceRange[0] > 0 || filters.priceRange[1] < 500) ? 1 : 0) +
    (filters.minRating && filters.minRating > 0 ? 1 : 0) +
    (filters.onlyOpen ? 1 : 0) +
    (filters.withDiscount ? 1 : 0) +
    ((filters as any).immediatePickup ? 1 : 0);

  return (
    <AOSInit>
      <div className="busca-page">
        <div className="container">
          {/* Results Header */}
          <div className="busca-page__header" data-aos="fade-up">
            <div className="busca-page__title-row">
              <h1 className="busca-page__results-title">
                {query ? (
                  <>
                    Resultados para <span>"{query}"</span>
                  </>
                ) : (
                  'Todos os Produtos'
                )}
              </h1>
              <p className="busca-page__results-count">
                {results.length} {results.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
              </p>
            </div>

            {/* Active filters tags */}
            {activeFiltersCount > 0 && (
              <div className="busca-page__active-filters">
                {selectedCategories.map(cat => (
                  <span key={cat} className="busca-page__filter-tag">
                    {cat}
                    <button onClick={() => setSelectedCategories(prev => prev.filter(c => c !== cat))}>×</button>
                  </span>
                ))}
                {filters.priceRange && (filters.priceRange[0] > 0 || filters.priceRange[1] < 500) && (
                  <span className="busca-page__filter-tag">
                    R${filters.priceRange[0]} - R${filters.priceRange[1]}
                    <button onClick={() => setFilters(prev => ({ ...prev, priceRange: [0, 500] }))}>×</button>
                  </span>
                )}
                {filters.minRating && filters.minRating > 0 && (
                  <span className="busca-page__filter-tag">
                    {filters.minRating}+ estrelas
                    <button onClick={() => setFilters(prev => ({ ...prev, minRating: 0 }))}>×</button>
                  </span>
                )}
                {filters.onlyOpen && (
                  <span className="busca-page__filter-tag">
                    Lojas abertas
                    <button onClick={() => setFilters(prev => ({ ...prev, onlyOpen: false }))}>×</button>
                  </span>
                )}
                {filters.withDiscount && (
                  <span className="busca-page__filter-tag">
                    Com desconto
                    <button onClick={() => setFilters(prev => ({ ...prev, withDiscount: false }))}>×</button>
                  </span>
                )}
                {(filters as any).immediatePickup && (
                  <span className="busca-page__filter-tag busca-page__filter-tag--pickup">
                    <Lightning size={12} weight="fill" />
                    Retirada Imediata
                    <button onClick={() => setFilters(prev => ({ ...prev, immediatePickup: false } as any))}>×</button>
                  </span>
                )}
                <button className="busca-page__clear-all" onClick={handleClearAll}>
                  Limpar todos
                </button>
              </div>
            )}
          </div>

          {/* Main Content with Sidebar */}
          <div className="busca-page__layout">
            {/* Filters Sidebar / Mobile Button */}
            <SearchFiltersComponent
              filters={filters}
              onFiltersChange={setFilters}
              categories={allCategories}
              selectedCategories={selectedCategories}
              onCategoriesChange={setSelectedCategories}
              sortBy={sortBy}
              onSortChange={setSortBy}
              totalResults={results.length}
              onClearAll={handleClearAll}
            />

            {/* Results Area */}
            <div className="busca-page__main">
              {/* Controls Bar */}
              <div className="busca-page__controls" data-aos="fade-up" data-aos-delay={100}>
                {/* Category Pills (mobile horizontal scroll) */}
                <div className="busca-page__category-filters">
                  <button
                    className={`busca-page__category-pill ${selectedCategories.length === 0 ? 'active' : ''}`}
                    onClick={() => setSelectedCategories([])}
                  >
                    Todos
                  </button>
                  {allCategories.map(category => (
                    <button
                      key={category}
                      className={`busca-page__category-pill ${
                        selectedCategories.includes(category) ? 'active' : ''
                      }`}
                      onClick={() => {
                        setSelectedCategories(prev =>
                          prev.includes(category)
                            ? prev.filter(c => c !== category)
                            : [category]
                        );
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Sort Dropdown */}
                <div className="busca-page__sort">
                  <label htmlFor="sort-select">Ordenar:</label>
                  <select
                    id="sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="busca-page__sort-select"
                  >
                    <option value={SortOption.RELEVANCE}>Relevância</option>
                    <option value={SortOption.PRICE_LOW}>Menor Preço</option>
                    <option value={SortOption.PRICE_HIGH}>Maior Preço</option>
                    <option value={SortOption.RATING}>Melhor Avaliado</option>
                    <option value={SortOption.DISTANCE}>Mais Próximo</option>
                    <option value={SortOption.DELIVERY_TIME}>Entrega Rápida</option>
                  </select>
                </div>
              </div>

              {/* Results Grid */}
              {results.length > 0 ? (
                <div className="busca-page__results" data-aos="fade-up" data-aos-delay={200}>
                  {results.map((product, index) => (
                    <div
                      key={product.id}
                      data-aos="fade-up"
                      data-aos-delay={Math.min(index * 50, 400)}
                    >
                      <ProductSearchCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="busca-page__empty" data-aos="fade-up">
                  <div className="busca-page__empty-icon">
                    <MagnifyingGlass size={64} weight="thin" />
                  </div>
                  <h2 className="busca-page__empty-title">
                    Nenhum resultado encontrado
                  </h2>
                  <p className="busca-page__empty-description">
                    {query ? (
                      <>Não encontramos produtos para <strong>"{query}"</strong></>
                    ) : (
                      'Não há produtos com os filtros selecionados'
                    )}
                  </p>
                  <div className="busca-page__empty-suggestions">
                    <p>Sugestões:</p>
                    <ul>
                      <li>Verifique a ortografia das palavras</li>
                      <li>Use termos mais gerais</li>
                      <li>Remova alguns filtros</li>
                      <li>Tente outra categoria</li>
                    </ul>
                  </div>
                  {activeFiltersCount > 0 && (
                    <button className="busca-page__empty-clear" onClick={handleClearAll}>
                      Limpar todos os filtros
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AOSInit>
  );
}
