export default function Home() {
  return (
    <main style={{
      padding: "40px",
      fontFamily: "Inter, sans-serif",
      background: "#F5F1E6",
      minHeight: "100vh",
      color: "#0F2E4E"
    }}>

      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        PaisaSoch
      </h1>

      <p style={{ marginBottom: "30px" }}>
        Live Gold Rates, Silver Prices & Financial Calculators
      </p>

      <h2>🔥 Quick Access</h2>

      <div style={{ marginBottom: "30px" }}>
        <a href="/gold-rate/hyderabad">Gold Hyderabad</a><br />
        <a href="/gold-rate/mumbai">Gold Mumbai</a><br />
        <a href="/silver-rate/hyderabad">Silver Hyderabad</a><br />
      </div>

      <h2>📊 Calculators</h2>

      <div style={{ marginBottom: "30px" }}>
        <a href="/calculators/sip-calculator">SIP Calculator</a><br />
        <a href="/calculators/emi-calculator">EMI Calculator</a><br />
        <a href="/calculators/fd-calculator">FD Calculator</a><br />
      </div>

      <h2>📈 About PaisaSoch</h2>

      <p>
        PaisaSoch helps you track gold and silver prices across major Indian cities
        and provides smart financial calculators to plan your investments better.
      </p>

    </main>
  );
}
