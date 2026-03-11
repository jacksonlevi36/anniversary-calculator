import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = 'https://anniversarycalculator.com/og-image.jpg',
  ogType = 'website',
  keywords,
  structuredData,
}: SEOProps) {
  const siteUrl = 'https://anniversarycalculator.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Anniversary Calculator" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

// Pre-defined structured data generators
export function generateWebApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Anniversary Calculator',
    description: 'Calculate your anniversary accurately and create beautiful anniversary cards. Find out how many years, months, and days you\'ve been together.',
    url: 'https://anniversarycalculator.com',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'Anniversary Calculator',
      url: 'https://anniversarycalculator.com',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
    featureList: [
      'Calculate anniversary years, months, and days',
      'Countdown to next anniversary',
      'Generate beautiful anniversary cards',
      'Download and share results',
      'Free to use',
    ],
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://anniversarycalculator.com${item.url}`,
    })),
  };
}

export function generateArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    url: `https://anniversarycalculator.com${url}`,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Anniversary Calculator',
      logo: {
        '@type': 'ImageObject',
        url: 'https://anniversarycalculator.com/logo.png',
      },
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Anniversary Calculator',
    url: 'https://anniversarycalculator.com',
    logo: 'https://anniversarycalculator.com/logo.png',
    description: 'Free online anniversary calculator to calculate your love story. Find out how many years, months, and days you\'ve been together.',
    sameAs: [
      'https://facebook.com/anniversarycalculator',
      'https://twitter.com/annicalculator',
      'https://instagram.com/anniversarycalculator',
    ],
  };
}
