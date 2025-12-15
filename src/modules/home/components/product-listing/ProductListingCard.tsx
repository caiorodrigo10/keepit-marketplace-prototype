import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa6';

const ProductListingCard = ({
  title,
  products,
}: {
  title: string;
  products: any;
}) => {
  return (
    <div className="row g-3">
      <h2>{title}</h2>
      {products.map((product: any, i: number) => (
        <div className="col-12" key={i}>
          <div className="product__item product__item--style3">
            <div className="product__item-inner">
              {product.discount && (
                <div className="product__item-badge">{product.discount}</div>
              )}
              {product.badge && (
                <div className="product__item-badge product__item-badge--new">
                  {product.badge}
                </div>
              )}
              <div className="product__item-thumb product-listing-image">
                <Image
                  width={116}
                  height={118}
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="product__item-content">
                <h5>
                  <Link href="/product-details">{product.name}</Link>
                </h5>
                <div className="product__item-rating">
                  <FaStar /> {product.rating}{' '}
                  <span>({product.reviews} Reviews)</span>
                </div>
                <div className="product__item-footer">
                  <div className="product__item-price">
                    <h4>${Number(product.price).toFixed(2)}</h4>
                    {product.discountPrice && (
                      <span>
                        <del>${product.discountPrice}</del>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingCard;
