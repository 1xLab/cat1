import type { Metadata } from "next";
import { siteConfig } from "./site";

type SEOParams = {
  title?: string;
  description?: string;
  path?: string;
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Laboratório de Toxicologia`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const generatePageMetadata = ({
  title,
  description,
  path = "",
}: SEOParams): Metadata => ({
  ...baseMetadata,
  title,
  description,
  alternates: {
    canonical: path ? `${siteConfig.url}${path}` : siteConfig.url,
  },
});
