'use client';

import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { IoSearchSharp } from 'react-icons/io5';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import HeaderCart from '@modules/layout/templates/header-home-three/HeaderCart';
import HeaderFavoritesButton from '@modules/layout/components/header-favorites-button';
import HeaderNotificationsButton from '@modules/layout/components/header-notifications-button';
import Script from 'next/script';

const HeaderInicio = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/br/busca?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/br/busca');
    }
  };

  return (
    <>
      <Script src="/js/trk-menu.js" />
      <header className="header header-inicio">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__brand">
              <Link href="/">
                <img src="/brand/logo-keepit.png" alt="Keepit Brasil" style={{ height: '35px' }} />
              </Link>
            </div>

            {/* Search bar in the middle */}
            <div className="header__search">
              <form onSubmit={handleSearch} className="header__search-form">
                <div className="header__search-input-wrapper">
                  <IoSearchSharp className="header__search-icon" />
                  <input
                    type="text"
                    className="header__search-input"
                    placeholder="Buscar produtos, lojas e categorias..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Buscar produtos"
                  />
                </div>
              </form>
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

              {/* Mobile menu trigger - for search on mobile */}
              <button type="button" className="menu-mobile-trigger d-xl-none">
                <IoSearchSharp size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderInicio;