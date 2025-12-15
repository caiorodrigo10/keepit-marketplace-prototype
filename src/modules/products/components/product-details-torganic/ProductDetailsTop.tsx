'use client'

import { useState } from 'react'
import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaLinkedinIn,
  FaRegHeart,
  FaStar,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import ProductGallery from './ProductGallery'
import TabMenu from './TabMenu'
import { ProductDetailsMock } from '@/lib/mock-data/product-details-mock'
import { useCart } from '@/modules/cart/context/CartContext'

interface ProductDetailsTopProps {
  product: ProductDetailsMock
}

const ProductDetailsTop: React.FC<ProductDetailsTopProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const { addToCart, openCart } = useCart()

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    // Adicionar produto ao carrinho com quantidade
    for (let i = 0; i < quantity; i++) {
      addToCart({
        productId: product.id,
        productName: product.title,
        productImage: product.images[0], // Usar primeira imagem
        productDescription: product.benefits[0],
        vendorId: 'vendor-mcdonalds', // Mock vendor ID
        vendorName: product.brand,
        price: product.price,
        preparationTime: 10 // 10 minutos (mock)
      })
    }

    // Abrir mini cart após adicionar
    openCart()

    // Resetar quantidade
    setQuantity(1)
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    console.log('❤️ Favorito:', !isFavorite ? 'Adicionado' : 'Removido')
    // TODO: Integração futura com localStorage ou backend
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = `Confira este produto: ${product.title}`

    const shareUrls: { [key: string]: string } = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      instagram: '#', // Instagram não tem share direto via URL
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
    }

    if (shareUrls[platform] && shareUrls[platform] !== '#') {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400')
    }
  }

  // Renderizar estrelas de rating
  const renderRating = () => {
    const stars = []
    const fullStars = Math.floor(product.rating)

    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < fullStars ? 'text-yellow-500' : 'text-gray-300'}
        />
      )
    }
    return stars
  }

  return (
    <section className="product-details padding-top padding-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="product-details">
              <div className="row g-5">
                <ProductGallery images={product.images} />

                <div className="col-md-6 col-12">
                  <div className="post-content">
                    <h2>{product.title}</h2>

                    <p className="rating">
                      {renderRating()}
                      ({product.reviews} Avaliações)
                    </p>

                    <div className="post-content__price">
                      <h2>R$ {product.price.toFixed(2)}</h2>
                      {product.originalPrice && (
                        <>
                          <del>R$ {product.originalPrice.toFixed(2)}</del>
                          <span>({product.discount}% off)</span>
                        </>
                      )}
                    </div>

                    <div className="post-content__brand">
                      Marca: <span>{product.brand}</span>
                    </div>

                    <ul className="post-content__list">
                      {product.benefits.map((benefit, index) => (
                        <li key={index}>
                          <div>
                            <HiOutlineBadgeCheck />
                          </div>
                          <p>{benefit}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="post-content__btn btn-group">
                      <div className="quantity-button">
                        <button
                          onClick={decreaseQuantity}
                          className="quantity-button__control quantity-button__control--decrease"
                          aria-label="Diminuir quantidade"
                        >
                          -
                        </button>
                        <span className="quantity-button__display">
                          {quantity}
                        </span>
                        <button
                          onClick={increaseQuantity}
                          className="quantity-button__control quantity-button__control--increase"
                          aria-label="Aumentar quantidade"
                        >
                          +
                        </button>
                      </div>

                      <span
                        onClick={handleAddToCart}
                        className="trk-btn trk-btn--primary"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            handleAddToCart()
                          }
                        }}
                      >
                        Adicionar ao Carrinho
                      </span>

                      <a
                        onClick={toggleFavorite}
                        className="product-details__fav-btn"
                        role="button"
                        tabIndex={0}
                        aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            toggleFavorite()
                          }
                        }}
                      >
                        {isFavorite ? (
                          <FaHeart color="red" />
                        ) : (
                          <FaRegHeart />
                        )}
                      </a>
                    </div>

                    <div className="post-content__social">
                      <h4>Compartilhar:</h4>
                      <ul className="social">
                        <li className="social__item">
                          <a
                            onClick={() => handleShare('facebook')}
                            className="social__link"
                            aria-label="Compartilhar no Facebook"
                            role="button"
                          >
                            <FaFacebookF />
                          </a>
                        </li>
                        <li className="social__item">
                          <a
                            onClick={() => handleShare('instagram')}
                            className="social__link"
                            aria-label="Compartilhar no Instagram"
                            role="button"
                          >
                            <FaInstagram />
                          </a>
                        </li>
                        <li className="social__item">
                          <a
                            onClick={() => handleShare('linkedin')}
                            className="social__link"
                            aria-label="Compartilhar no LinkedIn"
                            role="button"
                          >
                            <FaLinkedinIn />
                          </a>
                        </li>
                        <li className="social__item">
                          <a
                            onClick={() => handleShare('whatsapp')}
                            className="social__link"
                            aria-label="Compartilhar no WhatsApp"
                            role="button"
                          >
                            <FaYoutube />
                          </a>
                        </li>
                        <li className="social__item">
                          <a
                            onClick={() => handleShare('twitter')}
                            className="social__link"
                            aria-label="Compartilhar no Twitter"
                            role="button"
                          >
                            <FaXTwitter />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TabMenu product={product} />
      </div>
    </section>
  )
}

export default ProductDetailsTop
