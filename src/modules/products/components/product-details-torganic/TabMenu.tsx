'use client'

import { useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import { ProductDetailsMock, reviewsMock } from '@/lib/mock-data/product-details-mock'
import Image from 'next/image'

interface TabMenuProps {
  product: ProductDetailsMock
}

const TabMenu: React.FC<TabMenuProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState('Descrição')

  const navItems = ['Descrição', 'Informações Adicionais', 'Avaliações']

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('📝 Avaliação enviada (mock)')
    // TODO: Integração futura com backend de reviews
  }

  return (
    <div className="row">
      <div className="col-12">
        <div className="product-details__pill">
          {/* Navigation Tabs */}
          <ul className="nav nav-pills mb-3">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <button
                  className={`nav-link ${activeTab === item ? 'active' : ''}`}
                  onClick={() => setActiveTab(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'Descrição' && (
              <div className="tab-pane fade show active">
                <div className="product-details__content">
                  <h3>{product.description.title}</h3>

                  {product.description.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}

                  <div className="row g-2 my-4">
                    {product.description.images.map((img, index) => (
                      <div className="col-lg-4" key={index}>
                        <Image
                          src={img}
                          alt={`Descrição ${index + 1}`}
                          width={400}
                          height={300}
                          className="w-100 rounded"
                        />
                      </div>
                    ))}
                  </div>

                  <h3>Versatilidade Culinária</h3>
                  <p>
                    Há muitas variações de frutas orgânicas disponíveis, mas a
                    maioria tem sofrido alterações de qualidade. Quando você vai
                    usar produtos Keepit, pode ter certeza de que não há nada
                    embaraçoso escondido no meio do processo - apenas qualidade e
                    frescor garantidos.
                  </p>

                  <h3>Frescor Garantido</h3>
                  <p>
                    Trabalhamos com produtores locais para garantir que cada fruta
                    chegue até você no pico de frescor. Nossa logística
                    especializada mantém a cadeia de frio do campo até sua mesa,
                    preservando todos os nutrientes e sabores naturais.
                  </p>

                  <h3>Escolhendo a Fruta Perfeita</h3>
                  <p>
                    Nossa equipe seleciona cuidadosamente cada fruta, garantindo
                    que apenas os melhores exemplares cheguem até você. Seguimos
                    rigorosos padrões de qualidade para assegurar sua
                    satisfação.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'Informações Adicionais' && (
              <div className="tab-pane fade show active">
                <div className="product-details__content">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product.additionalInfo.returnPolicy,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product.additionalInfo.shipping,
                    }}
                  />
                </div>
              </div>
            )}

            {activeTab === 'Avaliações' && (
              <div className="tab-pane fade show active">
                <div className="product-details__review section-bg">
                  <div className="product-details__review-title">
                    <h2>Avaliações</h2>
                  </div>

                  {reviewsMock.map((review) => (
                    <div
                      className="product-details__review-card"
                      key={review.id}
                    >
                      <div className="product-details__review-author">
                        <div className="product-details__review-thumb">
                          <Image
                            src={review.avatar}
                            alt={review.author}
                            width={60}
                            height={60}
                          />
                        </div>
                        <div className="product-details__review-name">
                          <h4>{review.author}</h4>
                          <p>{review.date}</p>
                        </div>
                      </div>
                      <div className="product-details__review-content">
                        <div className="rating">
                          {[...Array(5)].map((_, index) => (
                            <FaStar
                              key={index}
                              className={
                                index < review.rating
                                  ? 'text-yellow-500'
                                  : 'text-gray-300'
                              }
                            />
                          ))}
                        </div>
                        <p>{review.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="product-details__review product-details__review--add section-bg">
                  <div className="product-details__review-title">
                    <h2>Adicionar Avaliação</h2>
                  </div>
                  <div className="product-details__review-form">
                    <div className="rating">
                      <h4>Sua Avaliação</h4>
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                    <form onSubmit={handleSubmitReview}>
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div>
                            <label htmlFor="name" className="form-label">
                              Nome
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="name"
                              placeholder="Nome completo"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div>
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <input
                              className="form-control"
                              type="email"
                              id="email"
                              placeholder="seu@email.com"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div>
                            <label htmlFor="textarea" className="form-label">
                              Mensagem
                            </label>
                            <textarea
                              cols={30}
                              rows={5}
                              className="form-control"
                              id="textarea"
                              placeholder="Digite sua avaliação"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="trk-btn trk-btn--border trk-btn--primary mt-4"
                      >
                        Enviar Avaliação
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabMenu
