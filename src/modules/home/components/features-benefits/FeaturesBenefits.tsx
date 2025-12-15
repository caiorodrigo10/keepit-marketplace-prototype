'use client';
import React, { useState, useRef } from 'react';
import { FaTruck, FaBoxOpen, FaShoppingBag, FaStore, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoStorefront } from 'react-icons/io5';
import dynamic from 'next/dynamic';

const RegionSelectionModal = dynamic(
  () => import('@/components/location/RegionSelectionModal'),
  { ssr: false }
);

const FeaturesBenefits = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      id: 1,
      icon: <FaTruck />,
      title: 'Frete grátis',
      subtitle: 'acima de R$ 50',
    },
    {
      id: 2,
      icon: <IoStorefront />,
      title: 'Retire no locker',
      subtitle: 'em 10 minutos',
    },
    {
      id: 3,
      icon: <FaShoppingBag />,
      title: '+300 mil produtos',
      subtitle: 'disponíveis',
    },
    {
      id: 4,
      icon: <FaStore />,
      title: '+200 vendedores',
      subtitle: 'parceiros',
    },
  ];

  const categories = [
    {
      id: 1,
      title: 'Produtos alimentícios',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=300&fit=crop',
      categoryKey: 'alimentos',
    },
    {
      id: 2,
      title: 'Limpeza',
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop',
      categoryKey: 'limpeza',
    },
    {
      id: 3,
      title: 'Para animais',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
      categoryKey: 'animais',
    },
    {
      id: 5,
      title: 'Cosméticos e higiene',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop',
      categoryKey: 'cosmeticos',
    },
    {
      id: 6,
      title: 'Para crianças',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=300&fit=crop',
      categoryKey: 'criancas',
    },
    {
      id: 7,
      title: 'Saúde',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      categoryKey: 'saude',
    },
  ];

  const handleCategoryClick = (categoryKey: string) => {
    setSelectedCategory(categoryKey);
    setIsModalOpen(true);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 220; // Width of card + gap
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section className="features-benefits">
        <div className="container">
          {/* Benefits Bar */}
          <div className="features-benefits__bar">
            <div className="row g-3">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="col-6 col-lg-3">
                  <div className="features-benefits__item">
                    <div className="features-benefits__icon">
                      {benefit.icon}
                    </div>
                    <div className="features-benefits__content">
                      <h6 className="features-benefits__title">{benefit.title}</h6>
                      <p className="features-benefits__subtitle">{benefit.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className="features-benefits__categories">
            <h2 className="features-benefits__categories-title">Categorias</h2>

            <div className="categories-carousel">
              <button
                className="categories-carousel__nav categories-carousel__nav--left"
                onClick={() => scroll('left')}
                aria-label="Anterior"
              >
                <FaChevronLeft />
              </button>

              <div className="categories-scroll-container" ref={scrollContainerRef}>
                {categories.map((category) => (
                  <div key={category.id} className="category-card-wrapper">
                    <div
                      className="category-card-v2"
                      onClick={() => handleCategoryClick(category.categoryKey)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="category-card-v2__image">
                        <img src={category.image} alt={category.title} loading="lazy" />
                      </div>
                      <div className="category-card-v2__content">
                        <h3 className="category-card-v2__title">{category.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="categories-carousel__nav categories-carousel__nav--right"
                onClick={() => scroll('right')}
                aria-label="Próximo"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Region Selection Modal */}
      <RegionSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCategory={selectedCategory}
      />
    </>
  );
};

export default FeaturesBenefits;
