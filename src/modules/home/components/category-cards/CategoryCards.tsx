'use client';
import React, { useState } from 'react';
import { IoFastFood, IoCart, IoBeer, IoMedkit } from 'react-icons/io5';
import { MdPets } from 'react-icons/md';
import { FaBowlFood } from 'react-icons/fa6';
import dynamic from 'next/dynamic';
import { GoogleMapsProvider } from '@/components/location/GoogleMapsProvider';

const RegionSelectionModal = dynamic(
  () => import('@/components/location/RegionSelectionModal'),
  { ssr: false }
);

const CategoryCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = [
    {
      id: 1,
      title: 'Restaurante',
      icon: IoFastFood,
      categoryKey: 'restaurante',
      color: '#FF6B35', // Laranja
    },
    {
      id: 2,
      title: 'Mercado',
      icon: IoCart,
      categoryKey: 'mercado',
      color: '#67FB94', // Verde Keepit
    },
    {
      id: 3,
      title: 'Bebidas',
      icon: IoBeer,
      categoryKey: 'bebidas',
      color: '#FFD93D', // Amarelo
    },
    {
      id: 4,
      title: 'Farmácia',
      icon: IoMedkit,
      categoryKey: 'farmacia',
      color: '#4A90E2', // Azul
    },
    {
      id: 5,
      title: 'Pet shop',
      icon: MdPets,
      categoryKey: 'petshop',
      color: '#9B59B6', // Roxo
    },
    {
      id: 6,
      title: 'Alimentação',
      icon: FaBowlFood,
      categoryKey: 'alimentacao',
      color: '#E74C3C', // Vermelho
    }
  ];

  const handleCategoryClick = (categoryKey: string) => {
    setSelectedCategory(categoryKey);
    setIsModalOpen(true);
  };

  return (
    <GoogleMapsProvider>
      <section className="featured-categories padding-bottom">
        <div className="container">
          <div className="row g-3 g-md-4">
            {categories.map((category) => (
              <div key={category.id} className="col-6 col-md-4">
                <div
                  className="featured-categories__item"
                  onClick={() => handleCategoryClick(category.categoryKey)}
                  style={{ cursor: 'pointer' }}
                >
                  <div
                    className="featured-categories__item-inner"
                    style={{ '--category-color': category.color } as React.CSSProperties}
                  >
                    <div className="featured-categories__thumb">
                      <category.icon />
                    </div>
                    <div className="featured-categories__content">
                      <h4>{category.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Region Selection Modal */}
      <RegionSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCategory={selectedCategory}
      />
    </GoogleMapsProvider>
  );
};

export default CategoryCards;
