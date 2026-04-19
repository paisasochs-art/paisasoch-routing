export async function generateStaticParams() {
  return [
    { city: "hyderabad" },
    { city: "mumbai" },
    { city: "delhi" },
  ];
}

export default function SilverPage({ params }) {
  const city = params.city;

  return (
    <main style={{ padding: "40px", fontFamily: "Inter, sans-serif" }}>
      
      <h1>Today Silver Rate in {city}</h1>

      <p>
        Silver prices in {city} are influenced by global demand, industrial usage,
        and market conditions. Tracking daily silver rates helps investors and buyers
        make better financial decisions.
      </p>

      <h2>Silver Price Details</h2>
      <ul>
        <li>Silver price per gram in {city}</li>
        <li>Silver price per kg in {city}</li>
        <li>Daily price trends in {city}</li>
      </ul>

      <h2>Why Silver Prices Change?</h2>
      <p>
        Silver prices fluctuate based on industrial demand, inflation, currency value,
        and global economic trends.
      </p>

      <h2>Related Pages</h2>
      <ul>
        <li><a href={`/gold-rate/${city}`}>Gold Rate {city}</a></li>
        <li><a href="/calculators/sip-calculator">SIP Calculator</a></li>
      </ul>

    </main>
  );
}
