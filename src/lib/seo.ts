import type { Metadata } from "next";
import { portfolioItems, products, services, siteConfig, type FAQItem } from "@/data/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteConfig.baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/images/og-lancar-clothing-sablon.webp",
  type = "website",
  publishedTime,
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "id_ID",
      type,
      publishedTime,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.baseUrl}/#localbusiness`,
    name: siteConfig.name,
    image: absoluteUrl("/images/og-lancar-clothing-sablon.webp"),
    url: siteConfig.baseUrl,
    telephone: siteConfig.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    sameAs: [siteConfig.instagramUrl],
    areaServed: [
      { "@type": "Country", name: "Indonesia" },
    ],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.baseUrl}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.baseUrl,
    logo: absoluteUrl("/images/logo-lancar-clothing-sablon.webp"),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["Indonesian"],
    },
    sameAs: [siteConfig.instagramUrl],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.baseUrl}/#website`,
    url: siteConfig.baseUrl,
    name: siteConfig.name,
    inLanguage: "id-ID",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.baseUrl}/produk?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function productSchema(slug: string) {
  const product = products.find((item) => item.slug === slug);
  if (!product) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: absoluteUrl(product.image),
    description: product.description,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: product.priceRange.includes("50.000") ? "50000" : "0",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/produk/${product.slug}`),
    },
  };
}

export function portfolioSchema(slug: string) {
  const item = portfolioItems.find((portfolio) => portfolio.slug === slug);
  if (!item) return null;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: item.title,
    description: item.excerpt,
    image: absoluteUrl(item.image),
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    about: item.printingMethod,
  };
}

export function allSitemapEntries() {
  return [
    { url: "/", priority: 1 },
    { url: "/tentang-kami", priority: 0.8 },
    { url: "/produk", priority: 0.9 },
    ...products.map((item) => ({ url: `/produk/${item.slug}`, priority: 0.82 })),
    { url: "/layanan", priority: 0.9 },
    ...services.map((item) => ({ url: `/layanan/${item.slug}`, priority: 0.88 })),
    { url: "/portfolio", priority: 0.75 },
    ...portfolioItems.map((item) => ({ url: `/portfolio/${item.slug}`, priority: 0.7 })),
    { url: "/kontak", priority: 0.82 },
  ];
}

