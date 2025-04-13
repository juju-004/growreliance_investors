import "./globals.css";

export const metadata = {
  title: "Grow reliance | Investors page",
  description: "Invest and grow with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
