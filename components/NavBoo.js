import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const NavBoo = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">0xFenrir</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link href='/about'>About</Link>
          <Link href='/'>Index</Link>
          <ConnectButton/>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default NavBoo