import React from 'react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface StructuredDataProps {
  breadcrumbs?: BreadcrumbItem[];
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage';
}

const StructuredData: React.FC<StructuredDataProps> = ({
  breadcrumbs = [],
  pageType = 'WebPage'
}) => {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Usergy",
    "url": "https://usergy.ai",
    "logo": "https://usergy.ai/lovable-uploads/45ae045c-4f58-42d9-933a-0e455a95d9a5.png",
    "description": "Expert AI traction services connecting visionary founders with engaged enthusiasts for authentic feedback, vibrant community, and social momentum.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-USERGY",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://linkedin.com/company/usergy",
      "https://twitter.com/usergy"
    ]
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Usergy",
    "url": "https://usergy.ai",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://usergy.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Breadcrumb Schema
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

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": pageType,
    "name": document.title,
    "url": typeof window !== 'undefined' ? window.location.href : 'https://usergy.ai',
    "isPartOf": {
      "@type": "WebSite",
      "name": "Usergy",
      "url": "https://usergy.ai"
    }
  };

  const schemas: any[] = [organizationSchema, websiteSchema, webPageSchema];
  if (breadcrumbSchema) schemas.push(breadcrumbSchema);

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemas)}
      </script>
    </Helmet>
  );
};

export default StructuredData;