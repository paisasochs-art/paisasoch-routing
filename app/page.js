export default function Home() {
  return (
    <main style={{
      padding: "40px",
      fontFamily: "Inter, sans-serif",
      background: "#F5F1E6",
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "#0F2E4E" }}>PaisaSoch</h1>

      <p>Welcome to your financial intelligence platform 🚀</p>

      <h2>Gold Rates</h2>
      <ul>
        <li><a href="/gold-rate/hyderabad">Hyderabad</a></li>
        <li><a href="/gold-rate/mumbai">Mumbai</a></li>
        <li><a href="/gold-rate/delhi">Delhi</a></li>
      </ul>

      <h2>Silver Rates</h2>
      <ul>
        <li><a href="/silver-rate/hyderabad">Hyderabad</a></li>
        <li><a href="/silver-rate/mumbai">Mumbai</a></li>
        <li><a href="/silver-rate/delhi">Delhi</a></li>
      </ul>

      <h2>Calculators</h2>
      <ul>
        <li><a href="/calculators/sip-calculator">SIP Calculator</a></li>
        <li><a href="/calculators/emi-calculator">EMI Calculator</a></li>
        <li><a href="/calculators/fd-calculator">FD Calculator</a></li>
      </ul>
    </main>
  );
}
