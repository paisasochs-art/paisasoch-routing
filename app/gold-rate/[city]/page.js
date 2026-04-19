export default function GoldRatePage({ params }) {
  const { city } = params;

  return (
    <div>
      <h1>Gold Rate in {city}</h1>
    </div>
  );
}
