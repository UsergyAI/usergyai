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
  // Enhanced Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Usergy",
    "alternateName": "Usergy AI",
    "url": "https://usergy.ai",
    "logo": {
      "@type": "ImageObject",
      "url": "https://usergy.ai/lovable-uploads/e5f86441-69d0-46b9-b865-d05a56c17b3e.png",
      "width": "180",
      "height": "180"
    },
    "description": "Expert AI traction services connecting visionary founders with engaged enthusiasts for authentic feedback, vibrant community, and social momentum.",
    "foundingDate": "2024",
    "industry": "Artificial Intelligence Services",
    "slogan": "AI Traction & Growth",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-800-USERGY",
        "contactType": "customer service",
        "availableLanguage": ["English"],
        "contactOption": "TollFree"
      },
      {
        "@type": "ContactPoint",
        "email": "hello@usergy.ai",
        "contactType": "customer service",
        "availableLanguage": ["English"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/usergy",
      "https://twitter.com/usergy"
    ],
    "offers": {
      "@type": "Offer",
      "description": "AI traction and growth services for founders",
      "category": "Service"
    }
  };

  // Enhanced Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Usergy - AI Traction & Growth",
    "alternateName": "Usergy",
    "url": "https://usergy.ai",
    "description": "Expert AI traction services connecting visionary founders with engaged enthusiasts for authentic feedback, vibrant community, and social momentum.",
    "inLanguage": "en-US",
    "copyrightYear": "2024",
    "publisher": {
      "@type": "Organization",
      "name": "Usergy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://usergy.ai/lovable-uploads/e5f86441-69d0-46b9-b865-d05a56c17b3e.png"
      }
    },
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

  // Enhanced WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": pageType,
    "name": typeof document !== 'undefined' ? document.title : "Usergy - AI Traction & Growth",
    "description": "Expert AI traction services for founders and entrepreneurs",
    "url": typeof window !== 'undefined' ? window.location.href : 'https://usergy.ai',
    "inLanguage": "en-US",
    "dateModified": "2024-01-07",
    "lastReviewed": "2024-01-07",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Usergy",
      "url": "https://usergy.ai"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Usergy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://usergy.ai/lovable-uploads/e5f86441-69d0-46b9-b865-d05a56c17b3e.png"
      }
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