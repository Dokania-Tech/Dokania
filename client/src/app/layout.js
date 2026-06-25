import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://www.dokaniatech.com";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dokania Tech Solution | DGTW Hydrox Brazing & EPS Machinery",
    template: "%s | Dokania Tech Solution",
  },
  description:
    "Dokania Tech Solution is a leading importer and distributor of DGTW Hydrox Brazing Solutions, EPS machinery spare parts, serving HVAC, EPS, and automobile sectors across India.",
  keywords: [
    "Dokania Tech",
    "DGTW Hydrox Brazing",
    "EPS machinery",
    "HVAC spare parts",
    "automobile sector India",
    "brazing solutions",
    "Dokania Tech Solution",
  ],
  authors: [{ name: "Dokania Tech Solution", url: BASE_URL }],
  creator: "Dokania Tech Solution",
  publisher: "Dokania Tech Solution",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Dokania Tech Solution",
    title: "Dokania Tech Solution | DGTW Hydrox Brazing & EPS Machinery",
    description:
      "Leading importer and distributor of DGTW Hydrox Brazing Solutions, EPS machinery spare parts, serving HVAC, EPS, and automobile sectors across India.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Dokania Tech Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dokania Tech Solution | DGTW Hydrox Brazing & EPS Machinery",
    description:
      "Leading importer and distributor of DGTW Hydrox Brazing Solutions, EPS machinery spare parts, serving HVAC, EPS, and automobile sectors.",
    images: [`${BASE_URL}/og-image.png`],
    creator: "@Dokaniatech",
    site: "@Dokaniatech",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ]
    // apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#1a1a2e",
    "theme-color": "#1a1a2e",
  },
};

// JSON-LD Structured Data for Organization (helps Yahoo/Bing identify site)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dokania Tech Solution",
  url: BASE_URL,
  logo: `${BASE_URL}/icon.png`,
  description:
    "Dokania Tech Solution is a leading importer and distributor of DGTW Hydrox Brazing Solutions, EPS machinery spare parts, serving HVAC, EPS, and automobile sectors across India.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dokania Tech Solution",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/products?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <div>
            <Navbar />
            <div className="pt-16 lg:pt-20">
              {children}
            </div>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
