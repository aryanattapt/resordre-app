import { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  title: "Order page",
  description: "Order Page",
};

export default function OrderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
