import "./globals.css";

export const metadata = {
  title: "MetaboSync HealthTech | Flédéric Payet",
  description: "Reconditionnement métabolique et performance globale",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}