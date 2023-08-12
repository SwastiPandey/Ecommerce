import React from 'react'
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '../redux/Action'; 

const Cart = () => {
  const cart = useSelector(state => state.product.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProductDetails = (id) => {
    navigate("/productDetails", { state: { itemId: id } });
  }

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  }

  return (
    <Row>
      {cart &&
        cart.map((item, index) => (
          <Col key={index} sm={6} md={4} lg={3} style={{ marginBottom: '10px' }}>
            <Image
              src={item.image}
              rounded
              style={{ width: "171px", height: "180px" }}
            />
            <Card.Title>
              {item.id}-{item.title}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <strong>Category:</strong> {item.category}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              <strong>Price:</strong> {item.price}
            </Card.Subtitle>
            <Card.Text>
              <strong>Description:</strong> {item.description}
            </Card.Text>
            <Button variant="secondary" onClick={() => handleProductDetails(item.id)}>View Details</Button>
            <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
          </Col>
        ))}
    </Row>
  );
}

export default Cart;
