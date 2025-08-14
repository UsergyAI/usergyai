
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  structuredData?: object;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  canonical,
  keywords,
  structuredData,
  breadcrumbs = []
}) => {
  const logoUrl = 'https://usergy.ai/favicon.svg';
  
  // Generate breadcrumb structured data
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  } : null;

  // Combine all structured data
  const allSchemas = [
    ...(structuredData ? [structuredData] : []),
    ...(breadcrumbSchema ? [breadcrumbSchema] : [])
  ];

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={logoUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Usergy" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logoUrl} />
      <meta name="twitter:site" content="@usergy" />
      
      {/* Additional SEO tags */}
      <meta name="author" content="Usergy" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#005BEA" />
      
      {/* Structured Data */}
      {allSchemas.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(allSchemas)}
        </script>
      )}
    </Helmet>
  );
};

export default EnhancedSEO;
