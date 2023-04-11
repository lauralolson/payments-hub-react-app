import React, { useState } from 'react'
import CartModal from './CartModal'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className='fixed-top pt-4 pb-2 mx-auto bg-white d-flex justify-content-between'>
      <Link to='/'><h3>My Store</h3></Link>
      <CartModal show={show} handleClose={handleClose} handleShow={handleShow} />
    </Container>
  )
}

export default NavBar
