import "./globals.css";
export const metadata = {
  title: "League of Legends Champions",
  description: "Visualize informações detalhadas sobre os campeões de LoL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-background text-text-primary">{children}</body>
    </html>
  );
}
