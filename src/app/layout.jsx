import "./globals.css";

export const metadata = {
  title: "Pair Padel 3 - Live Leaderboard | Qlutch",
  description: "Pair Padel 3 leaderboard - Team Americano. Live standings and match results.",
};

const themeScript = `
  (function() {
    try {
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        document.documentElement.classList.toggle('dark', e.matches);
      });
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
