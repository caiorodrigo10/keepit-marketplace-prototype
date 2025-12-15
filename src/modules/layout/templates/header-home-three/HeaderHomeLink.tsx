'use client';
import React from 'react';

const HeaderHomeLink = () => {
  const handleClick = (url: string) => {
    window.location.href = url;
  };
  return (
    <>
      <ul>
        <li>
          <a style={{ cursor: 'pointer' }} onClick={() => handleClick('/')}>
            Home One
          </a>
        </li>
        <li>
          <a
            style={{ cursor: 'pointer' }}
            onClick={() => handleClick('/home-two')}
          >
            Home Two
          </a>
        </li>
        <li>
          <a
            style={{ cursor: 'pointer' }}
            onClick={() => handleClick('/home-three')}
          >
            Home Three
          </a>
        </li>
      </ul>
    </>
  );
};

export default HeaderHomeLink;
