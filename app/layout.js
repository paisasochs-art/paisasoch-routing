export const metadata = {
  title: "PaisaSoch",
  description: "Live Gold Rates, Silver Prices & Financial Calculators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Inter, sans-serif" }}>
        
        {/* HEADER */}
        <header style={{
          background: "#0F2E4E",
          color: "#fff",
          padding: "16px 24px",
          fontSize: "20px",
          fontWeight: "600"
        }}>
          PaisaSoch
        </header>

        {/* MAIN CONTENT */}
        <main style={{
          background: "#F5F1E6",
          minHeight: "80vh",
          padding: "40px 20px",
          maxWidth: "900px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
          {children}
        </main>

        {/* FOOTER */}
        <footer style={{
          background: "#0F2E4E",
          color: "#fff",
          padding: "20px",
          textAlign: "center",
          fontSize: "14px"
        }}>
          © 2026 PaisaSoch — Financial Intelligence Platform
        </footer>

      </body>
    </html>
  );
}
