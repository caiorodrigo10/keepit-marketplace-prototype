'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import ProductCard from '../product-card/ProductCard';
import products from '../../../../../public/json/popular-product.json';

interface Tab {
  id: string;
  label: string;
}

const PopularProducts = () => {
  const [activeTab, setActiveTab] = useState('Todos');
  const tabs: Tab[] = [
    { id: 'pills-all-tab', label: 'Todos' },
    { id: 'pills-new-arrivals-tab', label: 'Novidades' },
    { id: 'pills-features-tab', label: 'Destaques' },
    { id: 'pills-best-sellers-tab', label: 'Mais Vendidos' },
  ];

  // ✅ FIX: Compute filtered products directly in the render to avoid useEffect-based updates
  const FilterProduct = products
    ? products.filter((p: any) =>
        activeTab === 'Todos' ? true : p.categories === activeTab
      )
    : [];

  return (
    <section className="popular-product">
      <div className="container">
        <div
          className="popular-product__wrapper"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="popular-product__header section-header">
            <h2 className="popular-product__title order-sm-1">
              Produtos Populares
            </h2>
            <div className="popular-product__filters order-sm-3 order-lg-2">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                {tabs.map((tab, i: number) => (
                  <li className="nav-item" role="presentation" key={i}>
                    <button
                      className={`nav-link ${activeTab === tab.label ? 'active' : ''}`}
                      id={tab.id}
                      type="button"
                      role="tab"
                      // ✅ FIX: Ensure aria-selected is explicitly a boolean
                      aria-selected={activeTab === tab.label ? true : false}
                      onClick={() => setActiveTab(tab.label)}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="product-btn order-sm-2 order-lg-3">
              <Link className="trk-btn trk-btn--sm" href="/flash-sale">
                Ver Todos
              </Link>
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center g-3">
              {FilterProduct.length > 0 ? (
                FilterProduct.map((data: any, i: number) => (
                  <div className="col" key={i}>
                    <ProductCard data={data} />
                  </div>
                ))
              ) : (
                <p className="text-center">No products available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
