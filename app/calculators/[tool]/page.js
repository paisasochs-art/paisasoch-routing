export async function generateStaticParams() {
  return [
    { tool: "sip-calculator" },
    { tool: "emi-calculator" },
    { tool: "fd-calculator" },
  ];
}

export default function CalculatorPage({ params }) {
  const tool = params.tool;

  const titles = {
    "sip-calculator": "SIP Calculator",
    "emi-calculator": "EMI Calculator",
    "fd-calculator": "FD Calculator",
  };

  return (
    <main style={{ padding: "40px", fontFamily: "Inter, sans-serif" }}>
      
      <h1>{titles[tool]}</h1>

      <p>
        Use our {titles[tool]} to plan your investments and financial goals effectively.
        These tools help you estimate returns, EMIs, and maturity values.
      </p>

      <h2>How it Works</h2>
      <p>
        Enter your investment amount, duration, and expected returns to calculate results instantly.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Easy financial planning</li>
        <li>Quick calculations</li>
        <li>Better investment decisions</li>
      </ul>

      <h2>Related Tools</h2>
      <ul>
        <li><a href="/calculators/sip-calculator">SIP Calculator</a></li>
        <li><a href="/calculators/emi-calculator">EMI Calculator</a></li>
        <li><a href="/calculators/fd-calculator">FD Calculator</a></li>
      </ul>

      <h2>Explore More</h2>
      <ul>
        <li><a href="/gold-rate/hyderabad">Gold Rate Hyderabad</a></li>
        <li><a href="/silver-rate/hyderabad">Silver Rate Hyderabad</a></li>
      </ul>

    </main>
  );
}
