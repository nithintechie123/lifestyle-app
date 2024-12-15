import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./style.css";

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const { title, category, description, rating, price, image } = productDetails;

  useEffect(() => {
    const fetchProductDetails = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProductDetails(data);
    };
    fetchProductDetails();
  }, []);

  return (
    <div className="product-details-parent-container">
      <div className="product-details-container">
        <img
          src={productDetails.image}
          alt={productDetails.title}
          className="detailed-product-image"
        />
        <div className="text-details-section">
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{category}</p>
          <p>{price}/-</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
