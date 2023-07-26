import React from 'react'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const CategoryDetails = () => {
  const {item} = useParams();

  console.log(
    'item=======>>', item
  )
  
  return (
    <div> category  {decodeURIComponent(item)}</div>
  )
}

export default CategoryDetails