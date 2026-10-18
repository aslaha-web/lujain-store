
export default function Loading() {
  const skeleton = {
    background: "#E5E7E3",
    borderRadius: "8px",
    animation: "pulse 1.2s ease-in-out infinite",
  };

  return (
    <main
      style={{
        background: "#FAFAFA",
        minHeight: "100vh",
        padding: "32px 5%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .home-loading-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        @media (max-width: 700px) {
          .home-loading-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Hero Carousel Skeleton */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "350px",
          borderRadius: "24px",
          overflow: "hidden",
          border: "1px solid #E8E8E2",
          background: "#F6F3EE",
        }}
      >
        <div style={skeleton} />

        <div
          style={{
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div style={{ ...skeleton, height: "16px", width: "35%" }} />
          <div style={{ ...skeleton, height: "38px", width: "80%" }} />
          <div style={{ ...skeleton, height: "18px", width: "90%" }} />
          <div style={{ ...skeleton, height: "42px", width: "40%" }} />
          <div
            style={{
              ...skeleton,
              height: "44px",
              width: "130px",
              borderRadius: "30px",
            }}
          />
        </div>
      </div>

      {/* Latest Offers Heading */}
      <div style={{ margin: "42px 0 25px" }}>
        <div style={{ ...skeleton, height: "14px", width: "120px" }} />
        <div
          style={{
            ...skeleton,
            height: "30px",
            width: "230px",
            marginTop: "12px",
          }}
        />
      </div>

      {/* Offer Cards Skeleton */}
      <div className="home-loading-grid">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "14px",
              minHeight: "170px",
              border: "1px solid #E8E8E2",
              borderRadius: "14px",
              background: "#FFFFFF",
            }}
          >
            <div
              style={{
                ...skeleton,
                width: "34%",
                height: "135px",
                flexShrink: 0,
              }}
            />

            <div style={{ flex: 1 }}>
              <div style={{ ...skeleton, height: "16px", marginBottom: "16px" }} />
              <div style={{ ...skeleton, height: "12px", marginBottom: "12px" }} />
              <div style={{ ...skeleton, height: "24px", width: "55%" }} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
