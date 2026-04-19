export default function CalculatorPage({ params }) {
  const { tool } = params;

  return (
    <div>
      <h1>Calculator: {tool}</h1>
    </div>
  );
}
