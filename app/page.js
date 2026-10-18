
"use client";

import React, { useEffect, useState } from "react";
import "./page.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchOffers() {
      try {
        const response = await fetch("/api/offers");
        const offers = await response.json();
        setData(offers);
      } catch (error) {
        console.error("Failed to fetch offers:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOffers();
  }, []);

  const handleNavigate = () => {
    router.push("/productList");
  };

  if (loading) {
    return <div className="home-page">Loading offers...</div>;
  }

  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <div
        id="offerCarousel"
        className="carousel slide offer-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {data.map((offer, index) => (
            <div
              className={`carousel-item ${
                index === 0 ? "active" : ""
              }`}
              key={offer.id}
            >
              <div className="row align-items-center g-0 offer-slide">
                <div className="col-md-6">
                  <img
                    src="/offers/carousel.png"
                    alt={offer.title}
                    className="offer-image"
                  />
                </div>

                <div className="col-md-6 offer-content">
                  <span className="offer-tag">SEASON SALE</span>

                  <h2>{offer.title}</h2>
                  <p>{offer.description}</p>
                  <h3>{offer.discount} OFF</h3>

                  <button
                    className="btn shop-btn"
                    onClick={handleNavigate}
                  >
                    Shop Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#offerCarousel"
          data-bs-slide="prev"
          aria-label="Previous offer"
        >
          <span className="carousel-control-prev-icon" />
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#offerCarousel"
          data-bs-slide="next"
          aria-label="Next offer"
        >
          <span className="carousel-control-next-icon" />
        </button>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {data.map((offer, index) => (
            <button
              key={offer.id}
              type="button"
              data-bs-target="#offerCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
              aria-current={index === 0 ? "true" : undefined}
            />
          ))}
        </div>
      </div>

      {/* Latest Offers */}
      <section className="latest-offers">
        <h2>Latest Offers</h2>

        <div className="row g-4">
          {data.map((offer, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={offer.id}
            >
              <div
                className={`offer-card ${
                  index === 0
                    ? "summer"
                    : index === 1
                    ? "special"
                    : "third"
                }`}
              >
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="offer-card-image"
                />

                <div className="offer-card-content">
                  <h4>{offer.title}</h4>
                  <p>{offer.description}</p>
                  <h5>{offer.discount} OFF</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
