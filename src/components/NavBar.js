import React from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"


const NavBar = () => {
  // const navLogo = {
  //   height: '40px'
  // }
  // style={navLogo} 

  return (
    <div>

      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li" className="mx-3">
          <Nav.Link>
            <FontAwesomeIcon color="skyblue" size="lg" icon={faTwitter} />naamp
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li" className="float-right">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link><Link to='/search'>Search</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link><Link to='/random'>Random</Link></Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default NavBar
