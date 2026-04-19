export async function generateStaticParams() {
  return [
    { city: 'hyderabad' },
    { city: 'mumbai' },
    { city: 'delhi' }
  ];
}

export default function SilverRatePage({ params }) {
  const { city } = params;

  return (
    <div>
      <h1>Silver Rate in {city}</h1>
    </div>
  );
}
