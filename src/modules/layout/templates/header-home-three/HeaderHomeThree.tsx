import React from 'react';
import { FaAngleDown, FaRegUser } from 'react-icons/fa';
import { IoClose, IoSearchSharp } from 'react-icons/io5';

import Link from 'next/link';
import { FaArrowLeft, FaCloudsmith } from 'react-icons/fa6';
import HeaderCart from '@modules/layout/templates/header-home-three/HeaderCart';
import Script from 'next/script';
import HeaderHomeLink from './HeaderHomeLink';
import HeaderFavoritesButton from '@modules/layout/components/header-favorites-button';
import HeaderNotificationsButton from '@modules/layout/components/header-notifications-button';

const HeaderHomeThree = () => {
  return (
    <>
      <Script src="/js/trk-menu.js" />
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__brand">
              <Link href="/">
                <img src="/brand/logo-keepit.png" alt="Keepit Brasil" style={{ height: '35px' }} />
              </Link>
            </div>
            {/* section navbar Menu */}
            <div className="header__navbar">
              <div className="header__overlay" />
              <nav className="menu">
                {/* menu-mobile-header removido - barra verde não necessária */}
                <ul className="menu-section">
                  <li>
                    <Link href="/">Início</Link>
                  </li>
                  <li>
                    <Link href="/blogs">Blog</Link>
                  </li>
                  <li>
                    <Link href="/seja-parceiro">Seja um Hoster</Link>
                  </li>
                  <li>
                    <Link href="/carreiras">Carreiras</Link>
                  </li>
                  <li>
                    <Link href="/seja-seller">Seja um Seller</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header__action">
              <HeaderFavoritesButton className="header__action-btn" />
              <HeaderNotificationsButton className="header__action-btn" />
              <Link
                className="header__action-btn"
                href="/login"
                aria-label="Login"
              >
                <FaRegUser />
              </Link>

              <HeaderCart />
              {/* Search removed - not needed for MVP */}
              {/* <button
                id="trk-search-icon"
                className="menu-icon search-icon header__action-btn"
                aria-label="Search"
              >
                <IoSearchSharp size={32} />
              </button> */}
              <button type="button" className="menu-mobile-trigger">
                <span />
                <span />
                <span />
                <span />
              </button>
              {/* <div className="trk-search">
                <div className="trk-search__inner">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Here"
                      aria-label="trk Search Bar"
                      aria-describedby="trk-search"
                    />
                    <button
                      type="submit"
                      className="trk-search__btn"
                      id="trk-search"
                    >
                      <i className="fa-solid fa-magnifying-glass" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="trk-search__overlay" /> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderHomeThree;
