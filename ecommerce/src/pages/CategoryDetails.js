import React from "react";
import { useLocation, useParams } from "react-router-dom";

const CategoryDetails = ({ route, navigation }) => {
  const { state } = useLocation();
  // const { id, color } = state;
  console.log("item=======>>", state);

  return (
    <div>
      <p>hello 7</p>
    </div>
  );
};

export default CategoryDetails;
