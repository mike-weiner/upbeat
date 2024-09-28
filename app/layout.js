import "./globals.css";

export const metadata = {
  title: "Upbeat",
  description: "A barebones web application with nothing but an upbeat health check.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
