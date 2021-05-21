import Link from 'next/link';
import { useRef, useEffect } from 'react';

import styled from 'styled-components';
// import Cart from './Cart';

const HeaderStyles = styled.header`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  border-bottom: 1px solid #e2e8f0;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }

  .hamburger {
    display: none;
  }

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
  }

  .nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-item {
    margin-left: 5rem;
  }

  .nav-link {
    font-size: 1.6rem;
    font-weight: 400;
    color: #475569;
  }

  .nav-link:hover {
    color: #482ff7;
  }

  .nav-logo {
    font-size: 2.1rem;
    font-weight: 500;
    color: #482ff7;
  }

  @media only screen and (max-width: 768px) {
    .nav-menu {
      position: fixed;
      left: -100%;
      top: 5rem;
      flex-direction: column;
      background-color: #fff;
      width: 100%;
      border-radius: 10px;
      text-align: center;
      transition: 0.3s;
      box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    }

    .nav-menu.active {
      left: 0;
    }

    .nav-item {
      margin: 2.5rem 0;
    }

    .hamburger {
      display: block;
      cursor: pointer;
    }

    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`;

export default function Header() {
  const navMenuRef = useRef([]);

  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    console.log(hamburger);

    function mobileMenu() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    }

    hamburger.addEventListener('click', mobileMenu);

    // hamburger close when we click a link
    const navLink = Array.from(navMenuRef.current.children);

    function closeMenu() {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }

    navLink.forEach((n) => n.addEventListener('click', closeMenu));

    return () => {
      hamburger.removeEventListener('click', mobileMenu);
      navLink.forEach((n) => n.removeEventListener('click', closeMenu));
    };
  }, []);

  return (
    <HeaderStyles>
      <nav className="navbar">
        <Link href="#" className="nav-logo">
          WebDev.
        </Link>
        <ul className="nav-menu" ref={navMenuRef}>
          <li className="nav-item">
            <Link href="#" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="hamburger">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </nav>
    </HeaderStyles>
  );
}
{
  /* <Cart /> */
}
