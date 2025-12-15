import React from 'react';
import ProductListingCard from './ProductListingCard';

const ProductListing = () => {
  const TopSellProducts = [
    {
      id: 1,
      name: 'Fresh Berries',
      image: '/images/product/listing/1.png',
      rating: 5.0,
      reviews: 14,
      price: '28.00',
      discountPrice: null,
      badge: null,
    },
    {
      id: 2,
      name: 'Grass-Feed Beef',
      image: '/images/product/listing/2.png',
      rating: 4.5,
      reviews: 123,
      price: '36.00',
      discountPrice: '48.00',
      discount: '-24%',
    },
    {
      id: 3,
      name: 'Whole Grain Bread',
      image: '/images/product/listing/3.png',
      rating: 4.5,
      reviews: 34,
      price: '22.00',
      discountPrice: null,
      badge: null,
    },
  ];

  const trendingProducts = [
    {
      name: 'Organic Avocado',
      image: '/images/product/listing/4.png',
      rating: 4.5,
      reviews: 34,
      price: 39.0,
      link: '/product-details',
    },
    {
      name: 'Fresh Strawberries',
      image: '/images/product/listing/5.png',
      rating: 4.5,
      reviews: 34,
      price: 30.0,
      link: '/product-details',
      badge: 'New',
    },
    {
      name: 'Free-Range Eggs',
      image: '/images/product/listing/6.png',
      rating: 5.0,
      reviews: 4,
      price: 26.0,
      link: '/product-details',
    },
  ];

  const newProducts = [
    {
      name: 'Greek Yogurt',
      image: '/images/product/listing/7.png',
      rating: 4.5,
      reviews: 143,
      price: 31.0,
      originalPrice: 50.0,
      link: '/product-details',
    },
    {
      name: 'Virgin Olive Oil',
      image: '/images/product/listing/8.png',
      rating: 5.0,
      reviews: 82,
      price: 23.0,
      link: '/product-details',
    },
    {
      name: 'Artisanal Cheese',
      image: '/images/product/listing/9.png',
      rating: 4.8,
      reviews: 12,
      price: 38.0,
      link: '/product-details',
    },
  ];

  return (
    <section className="product-listing padding-bottom padding-top section-bg">
      <div className="container">
        <div
          className="product-listing__wrapper"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="row align-items-center justify-content-center g-5 g-lg-4">
            <div className="col-lg-4 col-md-6">
              <ProductListingCard
                products={TopSellProducts}
                title="Top selling"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <ProductListingCard
                products={trendingProducts}
                title="Trending products"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <ProductListingCard products={newProducts} title="New products" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
