'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa6';

interface ProductData {
  id: number;
  title: string;
  imgSrc: string;
  rating: number;
  reviews: number;
  price: number;
  discount?: number;
  new?: string;
  categories: string;
  quantity: number;
}

interface ProductCardProps {
  data: ProductData;
  show?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ data, show }) => {
  const handleClick = () => {
    console.log('Add to cart:', data);
    // TODO: Integrate with Medusa cart
  };

  return (
    <div className="product__item product__item--style2">
      <div className="product__item-inner">
        {!show && data.discount && (
          <div className="product__item-badge">-{data.discount}%</div>
        )}
        {!show && data.new && (
          <div className="product__item-badge product__item-badge--new">
            New
          </div>
        )}
        <Link href={`/br/produto/${data.id}`} className="product__item-thumb">
          <Image
            width={237}
            height={175}
            src={data.imgSrc}
            alt={data.title}
          />
        </Link>
        <div className="product__item-content">
          <h5>
            <Link href={`/br/produto/${data.id}`}>{data.title}</Link>
          </h5>
          <div className="product__item-rating">
            <span>
              <FaStar className="mb-1" /> {data.rating}
            </span>{' '}
            <span>({data.reviews} Reviews)</span>
          </div>
          <div className="product__item-footer">
            <div className="product__item-price">
              <h4>
                ${Number(data.price).toFixed(2)} {data.discount && '/'}
              </h4>
              {data.discount && (
                <span>
                  <del>${Number(data.discount).toFixed(2)}</del>
                </span>
              )}
            </div>
            <div className="product__item-action">
              <span onClick={handleClick} className="trk-btn trk-btn--outline">
                Add ao Carrinho
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
