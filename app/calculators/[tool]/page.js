export async function generateStaticParams() {
  return [
    { tool: 'sip-calculator' },
    { tool: 'emi-calculator' },
    { tool: 'fd-calculator' }
  ];
}

export default function CalculatorPage({ params }) {
  const { tool } = params;

  return (
    <div>
      <h1>{tool.replace('-', ' ').toUpperCase()}</h1>
    </div>
  );
}
