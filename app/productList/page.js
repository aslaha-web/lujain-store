
"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import "./productList.css";

export default function ProductList() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="product-page">
      <div className="product-heading">
        <span>OUR COLLECTION</span>
        <h1>Discover Our Products</h1>
        <p>Find something special for you.</p>
      </div>

      <div className="product-grid">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div className="product-card" key={index}>
                <div className="product-image-box">
                  <div className="skeleton skeleton-image"></div>
                </div>

                <div className="product-info">
                  <div className="skeleton skeleton-title"></div>
                  <div className="skeleton skeleton-rating"></div>
                  <div className="skeleton skeleton-price"></div>
                  <div className="skeleton skeleton-button"></div>
                </div>
              </div>
            ))
          : product.map((p) => (
              <div className="product-card" key={p.id}>
                <div className="product-image-box">
                  <img src={p.image} alt={p.title} />
                </div>

                <div className="product-info">
                  <h2>{p.title}</h2>

                  <div className="product-rating">
                    <span>★</span> {p.rating?.rate ?? "N/A"}
                    <span className="rating-count">
                      ({p.rating?.count ?? 0} reviews)
                    </span>
                  </div>

                  <div className="product-bottom">
                    <p className="product-price">
                      ${p.price.toFixed(2)}
                    </p>

                    <Link
                      href={`/productList/${p.id}`}
                      className="product-btn"
                    >
                      View Product →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
