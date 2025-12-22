import "./globals.css";
import Head from "next/head";


export const metadata = {
  title: "Park Bingo",
  description: "Hike, explore, collect, repeat.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        />
      </Head>

      <body className="min-h-screen flex flex-col bg-green-50 text-slate-900">
        <header className="p-4 bg-green-600 text-white text-xl font-bold">
          Park Bingo
        </header>

        <main className="flex-1 p-4">{children}</main>

        <footer className="p-4 bg-green-600 text-white text-center text-sm">
          Made for adventurers
        </footer>
      </body>
    </html>
  );
}


