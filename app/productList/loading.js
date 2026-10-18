
export default function Loading() {
  const skeletonStyle = {
    background: "#E5E7E3",
    borderRadius: "8px",
    animation: "pulse 1.2s ease-in-out infinite",
  };

  return (
    <div
      style={{
        background: "#FAFAFA",
        minHeight: "100vh",
        padding: "40px 5%",
        color: "#202820",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .skeleton-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        @media (max-width: 1000px) {
          .skeleton-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .skeleton-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }
        }
      `}</style>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <span
          style={{
            color: "#728275",
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "3px",
          }}
        >
          OUR COLLECTION
        </span>

        <h1 style={{ fontSize: "32px", fontWeight: 800 }}>
          Discover Our Products
        </h1>

        <p style={{ color: "#727970" }}>Loading products...</p>
      </div>

      {/* Skeleton Product Cards */}
      <div className="skeleton-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E8E8E2",
              borderRadius: "16px",
              overflow: "hidden",
              padding: "16px",
            }}
          >
            {/* Image Placeholder */}
            <div
              style={{
                ...skeletonStyle,
                height: "200px",
                marginBottom: "20px",
                background: "#F0F0EC",
              }}
            />

            {/* Title Placeholder */}
            <div
              style={{
                ...skeletonStyle,
                height: "16px",
                width: "90%",
                marginBottom: "18px",
              }}
            />

            {/* Rating Placeholder */}
            <div
              style={{
                ...skeletonStyle,
                height: "12px",
                width: "60%",
                marginBottom: "20px",
              }}
            />

            {/* Price Placeholder */}
            <div
              style={{
                ...skeletonStyle,
                height: "22px",
                width: "40%",
                marginBottom: "18px",
              }}
            />

            {/* Button Placeholder */}
            <div
              style={{
                ...skeletonStyle,
                height: "40px",
                width: "100%",
                borderRadius: "25px",
                background: "#E0E7E0",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
