'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import VendorCategoryCard from './VendorCategoryCard';
import { vendorCategories } from './vendorCategoriesData';
import './vendor-categories.scss';

const VendorCategories = () => {
  const router = useRouter();

  const handleCategoryClick = (categoryKey: string) => {
    // Map category keys to search filter categories
    const categoryMap: Record<string, string> = {
      'restaurante': 'Fast Food',
      'farmacia': 'Farmácia',
      'mercado': 'Mercado',
      'bebidas': 'Bebidas',
      'petshop': 'Pet Shop',
      'cosmeticos': 'Cosméticos',
    };

    const searchCategory = categoryMap[categoryKey] || '';
    router.push(`/br/busca?categoria=${encodeURIComponent(searchCategory)}`);
  };

  return (
    <section className="vendor-categories" id="categories">
      <div className="container">
        <div className="vendor-categories__header" data-aos="fade-up">
          <h2 className="vendor-categories__title">Categorias de Estabelecimentos</h2>
          <p className="vendor-categories__subtitle">
            Escolha o tipo de estabelecimento e encontre os melhores próximos a você
          </p>
        </div>

        <div className="row g-3">
          {vendorCategories.map((category, index) => (
            <div
              key={category.id}
              className="col-6 col-md-4 col-lg-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <VendorCategoryCard
                category={category}
                onClick={() => handleCategoryClick(category.categoryKey)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorCategories;
