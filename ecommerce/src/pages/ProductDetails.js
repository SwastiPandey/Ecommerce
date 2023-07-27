import {GET_PRODUCT_DETAILS } from '../redux/Action';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'

export const ProductDetails = () => {
    const  {state}  = useLocation();
    const dispatch = useDispatch();
    console.log('productsss', state.itemId);
    useEffect (() => {
      const payload = {
        state: ProductDetails.title
      };
      dispatch({type: GET_PRODUCT_DETAILS, payload});
    }, [dispatch,state]);

  return (
    <div><strong> ProductDetails </strong></div>
  )
}
//https://fakestoreapi.com/products/1


// ProductDetails.title
