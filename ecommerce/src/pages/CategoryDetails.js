import { GET_CATEGORY_DETAILS } from "../redux/Action";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const CategoryDetails = ({ route, navigation }) => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { categoryDetailsData } = useSelector(({ product }) => product);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const payload = {
      category: state,
    };
    dispatch({ type: GET_CATEGORY_DETAILS, payload });
  }, [dispatch, state]);

  const handleDescriptionToggle = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div>
      <strong>CATEGORIES</strong>
      <Row>
        {categoryDetailsData &&
          categoryDetailsData.map((item, index) => {
            return (
              <Col key={index} sm={6} md={4} lg={3} style={{ marginBottom: '10px' }}>
                <div style={{ maxWidth: '50px', margin: '60px', display: 'flex', justifyContent: 'center'  }}>
                </div>
                <Card style={{ border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                  <div>
                    <Image
                      src={item.image}
                      rounded
                      style={{ width: '171px', objectFit: '180px' }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>
                      {item.id} - {item.title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      <strong>Category:</strong> {item.category}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      <strong>Price:</strong> {item.price}
                    </Card.Subtitle>
                    <Card.Text>
                      <strong>Description:</strong>{" "}
                      {showFullDescription ? item.description : `${item.description.slice(0, 100)}...`}
                      <Button
                        variant="link"
                        size="sm"
                        onClick={handleDescriptionToggle}
                      >
                        {showFullDescription ? "Read Less" : "Read More"}
                      </Button>
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default CategoryDetails;
