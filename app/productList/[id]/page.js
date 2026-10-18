
"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const router = useRouter();

  const handlenavigate = () => {
    router.back();
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);

  return (
    <div className="details-page">
      <button className="back-btn" onClick={handlenavigate}>
        ← Go Back
      </button>

      <div className="details-card">
        <div className="details-image-box">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="details-content">
          <span className="details-label">OUR COLLECTION</span>

          <h1>{product.title}</h1>

          <p className="details-rating">
            ⭐ {product.rating?.rate} / 5
            <span> ({product.rating?.count} reviews)</span>
          </p>

          <h2 className="details-price">
            ${product.price}
          </h2>

          <h3>Description</h3>

          <p className="details-description">
            {product.description}
          </p>

          <button className="details-action" onClick={handlenavigate}>
            Continue Shopping →
          </button>
        </div>
      </div>
    </div>
  );
}
