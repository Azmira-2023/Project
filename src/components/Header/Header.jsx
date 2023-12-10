import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryList from '../CategoryList/CategoryList';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <Navbar expand="lg" className="">
        <Container className=''>
          <Navbar.Brand href="">SAS Online Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">

              <Nav.Link as={Link} to={`/`}>Shop</Nav.Link>
              
              <CategoryList></CategoryList>
              <Nav.Link href="">Order</Nav.Link>
                <Nav.Link href="">Inventory</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
      <Nav.Link href="" className='login'>Login</Nav.Link>
        </div>
       
    );
  }
  

export default Header;