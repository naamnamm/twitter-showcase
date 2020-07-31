import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"


const NavigationBar = () => {


  return (
    <div>

      <Navbar bg="dark" variant="dark">

        <Navbar.Brand>
          <FontAwesomeIcon color="skyblue" size="lg" icon={faTwitter} />naamp
        </Navbar.Brand>

        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
          <Nav.Link href="/random">Random</Nav.Link>
        </Nav>

      </Navbar>

    </div>
  )
}

export default NavigationBar
