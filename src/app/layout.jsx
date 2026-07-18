import "./globals.css";

export const metadata = {
  title: "Pair Padel 3 - Live Leaderboard | Qlutch",
  description: "Pair Padel 3 leaderboard - Team Americano. Live standings and match results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
