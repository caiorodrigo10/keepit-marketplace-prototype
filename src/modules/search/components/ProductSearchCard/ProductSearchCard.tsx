'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaClock } from 'react-icons/fa';
import { Lightning } from '@phosphor-icons/react';
import { SearchProduct } from '@/lib/search/types';
import './product-search-card.scss';

interface Props {
  product: SearchProduct;
  showImmediatePickup?: boolean;
}

const ProductSearchCard: React.FC<Props> = ({ product, showImmediatePickup = true }) => {
  const { vendor } = product;

  // Simulated: products with rating > 4 and vendor is open are available for immediate pickup
  const isImmediatePickup = showImmediatePickup && product.rating >= 4 && vendor.isOpen;
  const pickupTime = Math.floor(Math.random() * 15) + 5; // 5-20 minutes (mock)

  return (
    <Link href={`/br/produto/${product.id}`} className="product-search-card">
      {/* Product Image */}
      <div className="product-search-card__image-wrapper">
        {product.discount && (
          <div className="product-search-card__badge product-search-card__badge--discount">
            -{product.discount}%
          </div>
        )}
        {isImmediatePickup && (
          <div className="product-search-card__badge product-search-card__badge--pickup">
            <Lightning size={12} weight="fill" />
            Retire em {pickupTime}min
          </div>
        )}
        <Image
          src={product.imgSrc}
          alt={product.title}
          width={400}
          height={200}
          className="product-search-card__image"
        />
      </div>

      {/* Product Info */}
      <div className="product-search-card__content">
        <h3 className="product-search-card__title">{product.title}</h3>
        <p className="product-search-card__description">{product.description}</p>

        {/* Price */}
        <div className="product-search-card__price-row">
          <span className="product-search-card__price">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          {product.oldPrice && (
            <span className="product-search-card__old-price">
              R$ {product.oldPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>

        {/* Vendor Info */}
        <div className="product-search-card__vendor">
          <div className="product-search-card__vendor-logo">
            <Image
              src={vendor.logo}
              alt={vendor.name}
              width={40}
              height={40}
            />
          </div>
          <div className="product-search-card__vendor-info">
            <span className="product-search-card__vendor-name">{vendor.name}</span>
            <div className="product-search-card__vendor-meta">
              <span className="product-search-card__rating">
                <FaStar /> {vendor.rating}
              </span>
              <span className="product-search-card__reviews">({vendor.reviewCount})</span>
              <span className="product-search-card__separator">·</span>
              <span className="product-search-card__delivery">
                <FaClock /> {vendor.deliveryTime}
              </span>
              <span className="product-search-card__separator">·</span>
              <span className="product-search-card__distance">{vendor.distance}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductSearchCard;
