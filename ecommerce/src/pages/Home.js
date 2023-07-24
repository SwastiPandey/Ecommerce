import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CATEGORIES, GET_PRODUCTS } from '../redux/Action';

const Home = () => {
  // const [posts, setPost] = useState()
  const dispatch = useDispatch();


  const { productData, categoryData } = useSelector(
    ({ product }) => product
  );
  useEffect(() => {




    dispatch({ type: GET_PRODUCTS })
    dispatch({ type: GET_CATEGORIES })
  }, []);

  return (

    <>

    <Row>{categoryData && categoryData.map((item,index) => {
      return(
        <div>{item}</div>
      )
    })}</Row>
    <Row>{productData && productData.map((item, index) => {
      return (

        <Container>
          {/* <Row> */}
          <Col xs={6} md={4}>


            {/* <Card style={{ width: '18rem' }}>
      <Card.Body> */}
            <Image src={item.image} rounded style={{ width: "200px", height: "300px" }} />
            <Card.Title>{item.id}-{item.title}</Card.Title>
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
  
</>
  )

}

export default Home