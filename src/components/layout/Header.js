import React from 'react';
// TODO: place your company logo
import Link from 'next/link';

import {
  Nav,
  NavDropdown,
  Navbar,
  Image,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

import { FaSearch } from 'react-icons/fa';

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
        <Nav className="mr-auto">
          {/* Agrega aquí tus elementos de categorías */}
        </Nav>
        <Nav>
          <NavDropdown title="Usuario" id="responsive-nav-dropdown">
            <NavDropdown.Item href="/profile">Mi perfil</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/logout">Cerrar sesión</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form>
          <div className="input-group">
            <FormControl type="text" placeholder="Buscar" className="ml-2" />
            <div className="input-group-append">
              <Button variant="light" className="mr-1">
                <FaSearch />
              </Button>
            </div>
          </div>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
