import React from 'react';

import { FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="footer ">
      <div className="footer__top">
        <div className="container">
          <div className="footer__top-wrapper">
            <div className="row gy-5 gx-2">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="footer__about">
                  <Link href="/" className="footer__about-logo">
                    <img src="/brand/logo-keepit.png" alt="Keepit Brasil" style={{ height: '60px' }} />
                  </Link>
                  <p className="footer__about-moto ">
                    Compre online e retire em 10 minutos nos lockers mais próximos.
                    Fast food, farmácia, cosméticos e muito mais.
                  </p>
                  <div className="footer__social">
                    <ul className="social">
                      <li className="social__item">
                        <Link
                          href="#"
                          aria-label="Facebook"
                          className="social__link social__link--style2"
                        >
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li className="social__item">
                        <Link
                          href="#"
                          className="social__link social__link--style2"
                          aria-label="social link"
                        >
                          <FaLinkedinIn />
                        </Link>
                      </li>
                      <li className="social__item">
                        <Link
                          href="#"
                          className="social__link social__link--style2"
                          aria-label="social link"
                        >
                          <FaYoutube />
                        </Link>
                      </li>
                      <li className="social__item">
                        <Link
                          href="#"
                          className="social__link social__link--style2"
                          aria-label="social link"
                        >
                          <FaXTwitter />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-6 col-6">
                <div className="footer__links">
                  <div className="footer__links-tittle">
                    <h4>Suporte</h4>
                  </div>
                  <div className="footer__links-content">
                    <ul className="footer__linklist">
                      <li className="footer__linklist-item">
                        {' '}
                        <Link href="/contact">Ajuda</Link>
                      </li>
                      <li className="footer__linklist-item">
                        {' '}
                        <Link href="/contact">Central de Atendimento</Link>
                      </li>
                      <li className="footer__linklist-item">
                        {' '}
                        <Link href="/contact">Contato</Link>{' '}
                      </li>
                      <li className="footer__linklist-item">
                        {' '}
                        <Link href="#">Chat agora</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-6 col-6">
                <div className="footer__links">
                  <div className="footer__links-tittle">
                    <h4>Conta</h4>
                  </div>
                  <div className="footer__links-content">
                    <ul className="footer__linklist">
                      <li className="footer__linklist-item">
                        {' '}
                        <Link href="/login">Entrar</Link>
                      </li>
                      <li className="footer__linklist-item">
                        {' '}
                        <Link href="/cart">Ver Carrinho</Link>
                      </li>
                      <li className="footer__linklist-item">
                        {' '}
                        <Link href="/wishlist">Minha Lista</Link>
                      </li>
                      <li className="footer__linklist-item">
                        {' '}
                        <Link href="/invoice">Detalhes de Entrega</Link>{' '}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-wrapper">
            <div className="footer__bottom-payment">
              <ul className="payment">
                <li className="payment__item">
                  <img src="/images/payment/1.png" alt="payment method logo" />
                </li>
                <li className="payment__item">
                  <img src="/images/payment/2.png" alt="payment method logo" />
                </li>
                <li className="payment__item">
                  <img src="/images/payment/3.png" alt="payment method logo" />
                </li>
                <li className="payment__item">
                  <img src="/images/payment/4.png" alt="payment method logo" />
                </li>
                <li className="payment__item">
                  <img src="/images/payment/5.png" alt="payment method logo" />
                </li>
              </ul>
            </div>
            <div className="footer__bottom-copyright">
              <p className=" mb-0">
                Copyright© 2025 Keepit Brasil. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
