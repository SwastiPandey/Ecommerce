import "../pages/ProductDetails.css"; 
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { GET_PRODUCT_DETAILS } from "../redux/Action";
export const ProductDetails = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { ProductDetails } = useSelector(({ product }) => product);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const payload = {
      itemId: state.itemId,
    };
    dispatch({ type: GET_PRODUCT_DETAILS, payload });
  }, [dispatch, state]);

  const handleDescriptionToggle = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="product-details-container">
      <div className="product-image">
        <Image src={ProductDetails?.image} alt={ProductDetails?.title} fluid />
      </div>
      <div className="product-info">
        <h1>{ProductDetails?.title}</h1>
        <p className="product-price">${ProductDetails?.price}</p>
        <Button variant="primary" className="buy-button">
          Add to Cart
        </Button>
        <p
          className={`product-description ${
            showFullDescription ? "expanded" : ""
          }`}
        >
          {ProductDetails?.description}
        </p>
        <button
          className="description-toggle"
          onClick={handleDescriptionToggle}
        >
          Show {showFullDescription ? "Less" : "More"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

