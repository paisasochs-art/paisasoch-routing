export default function Home() {
  return (
    <div>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        PaisaSoch
      </h1>

      <p style={{ marginBottom: "30px", color: "#555" }}>
        Live Gold Rates, Silver Prices & Financial Calculators
      </p>

      {/* QUICK ACCESS */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "15px" }}>🔥 Quick Access</h2>

        <div style={{
          display: "grid",
          gap: "10px"
        }}>
          <a href="/gold-rate/hyderabad">Gold Hyderabad</a>
          <a href="/gold-rate/mumbai">Gold Mumbai</a>
          <a href="/silver-rate/hyderabad">Silver Hyderabad</a>
        </div>
      </section>

      {/* CALCULATORS */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "15px" }}>📊 Calculators</h2>

        <div style={{
          display: "grid",
          gap: "10px"
        }}>
          <a href="/calculators/sip-calculator">SIP Calculator</a>
          <a href="/calculators/emi-calculator">EMI Calculator</a>
          <a href="/calculators/fd-calculator">FD Calculator</a>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "8px"
      }}>
        <h2>📈 About PaisaSoch</h2>
        <p style={{ color: "#555" }}>
          PaisaSoch helps you track gold and silver prices across major Indian cities and provides smart financial calculators.
        </p>
      </section>

    </div>
  );
}
