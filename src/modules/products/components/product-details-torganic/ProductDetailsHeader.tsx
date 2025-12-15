'use client'

import Link from 'next/link'

interface ProductDetailsHeaderProps {
  productTitle: string
}

const ProductDetailsHeader: React.FC<ProductDetailsHeaderProps> = ({
  productTitle,
}) => {
  return (
    <section className="page-header">
      {/* Imagem de fundo removida - fundo cinza escuro */}
      <div className="container">
        <div
          className="page-header__content"
          data-aos="fade-right"
          data-aos-duration={1000}
        >
          {/* Título removido - apenas breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/produtos">Produtos</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {productTitle}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailsHeader
