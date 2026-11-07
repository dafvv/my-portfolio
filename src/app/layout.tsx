import type { Metadata, Viewport } from "next";
import { Host_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { AppPreloader } from "@/components/ui/AppPreloader";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const hostGroteskGoogle = Host_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-google-host-grotesk",
  fallback: ["Host Grotesk Local", "system-ui", "-apple-system", "sans-serif"],
});

const hostGroteskLocal = localFont({
  src: [
    {
      path: "../../public/fonts/host-grotesk-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/host-grotesk-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/host-grotesk-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/host-grotesk-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/host-grotesk-latin-800-normal.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-local-host-grotesk",
});

export const metadata: Metadata = {
  title: "Daffa Bisma Rudidharma — Full-stack Developer · Aspiring DevOps Engineer",
  description:
    "Personal portfolio showcase of Daffa Bisma Rudidharma. Full-stack Developer and Aspiring DevOps Engineer building web applications from interface to backend.",
  metadataBase: new URL("https://daffabisma.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/icons/favicon.svg",
  },
  openGraph: {
    title: "Daffa Bisma Rudidharma — Full-stack Developer · Aspiring DevOps Engineer",
    description:
      "Personal portfolio showcase of Daffa Bisma Rudidharma. Full-stack Developer and Aspiring DevOps Engineer.",
    url: "https://daffabisma.com",
    siteName: "Daffa Bisma Rudidharma Portfolio",
    images: [
      {
        url: "/media/portrait.webp",
        width: 520,
        height: 520,
        alt: "Portrait of Daffa Bisma Rudidharma",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daffa Bisma Rudidharma — Full-stack Developer · Aspiring DevOps Engineer",
    description:
      "Personal portfolio showcase of Daffa Bisma Rudidharma. Full-stack Developer and Aspiring DevOps Engineer.",
    images: ["/media/portrait.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#252525",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hostGroteskGoogle.variable} ${hostGroteskLocal.variable}`}
    >
      <body>
        <SmoothScrollProvider>
          <AppPreloader />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
