export async function generateStaticParams() {
  return [
    { city: "hyderabad" },
    { city: "mumbai" },
    { city: "delhi" },
  ];
}

export default function GoldPage({ params }) {
  const city = params.city;

  return (
    <main style={{ padding: "40px", fontFamily: "Inter, sans-serif" }}>
      
      <h1>Today Gold Rate in {city}</h1>

      <p>
        The latest gold rate in {city} is updated daily based on market trends.
        Investors and buyers track gold prices to make informed decisions.
      </p>

      <h2>Gold Price Details</h2>
      <ul>
        <li>24K Gold Rate in {city}</li>
        <li>22K Gold Rate in {city}</li>
        <li>Price per gram in {city}</li>
      </ul>

      <h2>Why Gold Prices Change?</h2>
      <p>
        Gold prices fluctuate due to global demand, inflation, currency changes,
        and central bank policies.
      </p>

      <h2>Related Pages</h2>
      <ul>
        <li><a href="/silver-rate/hyderabad">Silver Rate Hyderabad</a></li>
        <li><a href="/calculators/sip-calculator">SIP Calculator</a></li>
      </ul>

    </main>
  );
}
