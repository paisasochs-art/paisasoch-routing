export const metadata = {
  title: "PaisaSoch",
  description: "Financial intelligence platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
