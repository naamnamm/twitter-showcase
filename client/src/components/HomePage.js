import React from 'react';
import { Button, Card } from 'react-bootstrap';
import logo from '../images/explore.jpg';
import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';

const Homepage = () => {
  // const [customers, setCustomers] = useState([]);

  // const getCustomersData = async () => {
  //   try {
  //     const data = await fetch('/api/customers').then((res) => res.json());
  //     return data;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const customers = await getCustomersData();
  //       setCustomers(customers);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <Card className='bg-dark text-white'>
        <Card.Img src={logo} alt='logo image' />
        <Card.ImgOverlay>
          <Card.Text>Find your inspiration</Card.Text>
          <Button>
            <Link to='/search' className='text-light'>
              Search Tweets
            </Link>
          </Button>
          <Button>
            <Link to='/random' className='text-light'>
              Random Tweets
            </Link>
          </Button>
        </Card.ImgOverlay>
      </Card>

      {/* <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Homepage;
