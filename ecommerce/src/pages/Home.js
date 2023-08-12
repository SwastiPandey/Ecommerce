import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { GET_CATEGORIES, GET_CATEGORY_DETAILS, GET_PRODUCTS } from "../redux/Action";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/Reducer";
import { removeFromCart } from '../redux/Action';
//import { useNavigation } from 'react-router-dom';

const Home = () => {
  // const [posts, setPost] = useState()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productData, categoryData, jeweleryData , cart} = useSelector(
    ({ product }) => product
  );
  console.log('cart', cart)
  useEffect(() => {
    dispatch({ type: GET_PRODUCTS });
    dispatch({ type: GET_CATEGORIES });
    dispatch({ type: GET_CATEGORY_DETAILS });
  }, []);

  const handleNavigation = (item) => {
    navigate("/category", { state: item });
  };

  const handleProductDetails = (id) => {
    console.log('id====>>', id)
    navigate("/productDetails", { state: { itemId: id } });
  }


  const _handleAddToCart = (item) => {
    console.log('item', item)
    dispatch(addToCart({cartItems: item}))
  }
   
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ itemId: id }));
    
  }

  return (
    <>

      <div>
        <test>Hello</test>
      </div>
      <Row>
        {categoryData &&
          categoryData.map((item, index) => {
            console.log("item", item);
            return (
              <Col key={index} xs={12} md={6}>
                <div
                  className="category-item"
                  style={{
                    background: "#f2f2f2",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                  onClick={() => handleNavigation(item)}

                >
                  <strong>{item}</strong>
                </div>
              </Col>
            );
          })}
      </Row>
      <Row>
        {productData &&
          productData.map((item, index) => {
            return (

              <Col>
                {/* <Row> */}
                <Col key={index} sm={6} md={4} lg={3} style={{ marginBottom: '10px' }}>
                  <div style={{ maxWidth: '180px', margin: '171px', display: 'flex', justifyContent: 'center' }}>
                  </div>
                  {/* <Card style={{ width: '18rem' }}>
      <Card.Body> */}
                  <Image
                    src={item.image}
                    rounded
                    style={{ width: "171px", height: "180px" }}
                  />
                  <Card.Title>
                    {item.id}-{item.title}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <strong>Category:</strong>
                    {item.category}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    {" "}
                    <strong>Price:</strong>
                    {item.price}
                  </Card.Subtitle>

                  <Card.Text>
                    <strong>Description:</strong> {item.description}
                  </Card.Text>
                  <Button variant="primary " onClick={() => _handleAddToCart(item)}>Add to cart</Button>
                  <Button variant="secondary" onClick={() => handleProductDetails(item.id)}>View Details</Button>
                  <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>Remove From Cart</Button>
                  {/*         
      </Card.Body>
    </Card> */}
                </Col>

                {/* </Row> */}
              </Col>

            );
          })}
      </Row>
    </>
  );
};

export default Home;
