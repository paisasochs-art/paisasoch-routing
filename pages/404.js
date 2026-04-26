export default function Custom404() {
  return (
    <div style={{
      fontFamily: "Inter, sans-serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#0F2E4E",
      color: "#F5F1E6",
      flexDirection: "column",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        404
      </h1>
      <h2 style={{ marginBottom: "20px" }}>
        Page Not Found
      </h2>
      <p style={{ maxWidth: "400px", opacity: 0.8 }}>
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <a
        href="https://www.paisasoch.com"
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          background: "#D4A64A",
          color: "#0F2E4E",
          textDecoration: "none",
          borderRadius: "6px",
          fontWeight: "600"
        }}
      >
        Go to Homepage
      </a>
    </div>
  )
}
