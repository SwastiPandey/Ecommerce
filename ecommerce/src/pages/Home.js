import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Home = () => {
  const [posts,setPost]=useState()
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        // Check if the response is successful (status code 2xx)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the response body as JSON and return it
        return response.json();
      })
      .then(data => {
        // Handle the data here
        console.log(data);
        setPost(data)
      })
      .catch(error => {
        // Handle errors here
        console.error('Error fetching data:', error);
      });
  }, []);
  
  return (
    <Row>{posts&& posts.map((item,index)=>{
      return(
    
    <Container>
    {/* <Row> */}
      <Col xs={6} md={4}>
      
        
        {/* <Card style={{ width: '18rem' }}>
      <Card.Body> */}
      <Image src={item.image} rounded style={{width:"200px", height:"300px"}} />
        <Card.Title>{ item.id}-{item.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.category}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{item.price}</Card.Subtitle>

        <Card.Text>
        {item.description}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
{/*         
      </Card.Body>
    </Card> */}
      </Col>
     
    {/* </Row> */}
  </Container>
      )
    })}</Row>
  )
  
}

export default Home