import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CATEGORIES, GET_JEWELERY, GET_PRODUCTS } from '../redux/Action';
import { Link } from 'react-router-dom';
//import { useNavigation } from 'react-router-dom';

const Home = () => {
  // const [posts, setPost] = useState()
  const dispatch = useDispatch();
 // const navigate = useNavigation();
  const { productData, categoryData, jeweleryData } = useSelector(
    ({ product }) => product
  );
  useEffect(() => {




    dispatch({ type: GET_PRODUCTS })
    dispatch({ type: GET_CATEGORIES })
    dispatch({ type: GET_JEWELERY })
  }, []);

  

  return (

    <>
      {/* <Row>{jeweleryData && jeweleryData.map((item, index) => {
        return (
          <div>{item.title}</div>
        )
      })}</Row> */}
      <Row>{categoryData && categoryData.map((item, index) => {
        console.log('item', item)
        return (
          <Col key={index} xs={12} md={6} >
             <Link to={`/category/${encodeURIComponent(item)}`}>
            <div className='category-item' style={{ background: '#f2f2f2', padding: '10px', marginBottom: '10px' }}

            >
              <strong>{item}</strong>
            </div>
            </Link>
          </Col >
        )
      })}</Row >
      <Row>{productData && productData.map((item, index) => {
        return (

          <Col>
            {/* <Row> */}
            <Col sm={6} lg={4}>


              {/* <Card style={{ width: '18rem' }}>
      <Card.Body> */}
              <Image src={item.image} rounded style={{ width: "400px", height: "500px" }} />
              <Card.Title>{item.id}-{item.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"><strong>Category:</strong>{item.category}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted"> <strong>Price:</strong>{item.price}</Card.Subtitle>

              <Card.Text>
                <strong>Description:</strong> {item.description}
              </Card.Text>
              <Button variant="primary">Add to cart</Button>
              {/*         
      </Card.Body>
    </Card> */}
            </Col>

            {/* </Row> */}
          </Col>
        )
      })}</Row>

    </>
  )

}

export default Home