import React from 'react';
// TODO: place your company logo
import Link from 'next/link';
import Filter from '../shared/filter/filter';

import { Nav, NavDropdown, Navbar, Image } from 'react-bootstrap';

function Header() {
  return (
    <Navbar
      style={{ backgroundColor: '#00ADB5' }}
      expand="lg"
      collapseOnSelect
      className="w-100 p-3"
    >
      <Link href="/">
        <Image src="/next.svg" alt="Logo" width={30} height={30} />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Filter />
        <Nav className="mr-auto">
          {/* Agrega aquí tus elementos de categorías */}
        </Nav>
        <Nav>
          <NavDropdown title="Usuario" id="responsive-nav-dropdown">
            <NavDropdown.Item href="/profile">My profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/logout">Log out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
