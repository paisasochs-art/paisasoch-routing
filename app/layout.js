export const metadata = {
  title: "PaisaSoch",
  description: "Live Gold Rates, Silver Prices & Financial Calculators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        
        {/* HEADER */}
        <div style={{ background: "#0F2E4E", color: "white", padding: "15px" }}>
          <h2>PaisaSoch</h2>
        </div>

        {/* CONTENT */}
        <div style={{ padding: "20px", background: "#F5F1E6", minHeight: "80vh" }}>
          {children}
        </div>

        {/* FOOTER */}
        <div style={{ background: "#0F2E4E", color: "white", padding: "15px" }}>
          <p>© PaisaSoch</p>
        </div>

      </body>
    </html>
  );
}
