'use client';
import React from 'react';
import { VendorCategory } from './vendorCategoriesData';
import './vendor-categories.scss';

interface VendorCategoryCardProps {
  category: VendorCategory;
  onClick: () => void;
}

const VendorCategoryCard: React.FC<VendorCategoryCardProps> = ({ category, onClick }) => {
  const IconComponent = category.icon;

  return (
    <div
      className="vendor-category-card"
      onClick={onClick}
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div className="vendor-category-card__image-wrapper">
        <img
          src={category.image}
          alt={category.title}
          className="vendor-category-card__image"
          loading="lazy"
        />
        <div className="vendor-category-card__overlay"></div>

        <div
          className="vendor-category-card__icon"
          style={{ backgroundColor: category.color }}
        >
          <IconComponent />
        </div>
      </div>

      <div className="vendor-category-card__content">
        <h3 className="vendor-category-card__title">{category.title}</h3>
        <p
          className="vendor-category-card__subtitle"
          style={{ color: category.color }}
        >
          {category.subtitle}
        </p>
        <p className="vendor-category-card__description">{category.description}</p>
      </div>
    </div>
  );
};

export default VendorCategoryCard;
