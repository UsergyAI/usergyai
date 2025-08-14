
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
  // Enhanced Organization Schema with consistent SVG logo
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Usergy",
    "alternateName": ["Usergy AI", "Usergy.ai"],
    "url": "https://usergy.ai",
    "logo": {
      "@type": "ImageObject",
      "url": "https://usergy.ai/favicon.svg",
      "width": "64",
      "height": "64",
      "caption": "Usergy Logo - AI Traction & Growth Services"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://usergy.ai/favicon.svg",
      "width": "64",
      "height": "64"
    },
    "description": "Expert AI traction consulting services connecting visionary founders with engaged enthusiasts for authentic feedback, vibrant community, and social momentum. Accelerate your AI startup's growth with proven strategies.",
    "foundingDate": "2024-01-01",
    "industry": ["Artificial Intelligence Services", "Business Consulting", "Startup Services"],
    "keywords": ["AI startup growth", "AI traction", "startup consulting", "AI community", "business development", "AI feedback", "product market fit"],
    "slogan": "AI Traction & Growth Experts",
    "serviceArea": {
      "@type": "Place",
      "name": "Global"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "15",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Traction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Traction Consulting",
            "description": "Comprehensive traction consulting for AI startups including feedback collection, community activation, and social amplification",
            "provider": {
              "@type": "Organization",
              "name": "Usergy"
            },
            "areaServed": "Global",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://usergy.ai/contact"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Community Building",
            "description": "Expert community building services for AI startups to create engaged user bases of 500+ AI enthusiasts",
            "provider": {
              "@type": "Organization",
              "name": "Usergy"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Product Feedback Collection",
            "description": "Structured feedback collection from AI enthusiasts and early adopters with 97% quality score",
            "provider": {
              "@type": "Organization",
              "name": "Usergy"
            }
          }
        }
      ]
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "email": "hello@usergy.ai",
        "contactType": "customer service",
        "availableLanguage": ["English"],
        "url": "https://usergy.ai/contact",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00",
          "validFrom": "2024-01-01",
          "validThrough": "2025-12-31"
        }
      },
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "availableLanguage": ["English"],
        "url": "https://discord.com/invite/jkeSnkm5ww"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "Global"
    },
    "sameAs": [
      "https://www.linkedin.com/company/usergy-ai",
      "https://discord.com/invite/jkeSnkm5ww",
      "https://www.reddit.com/r/UsergyAI/"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "description": "AI traction and growth services for founders",
      "category": "Professional Services",
      "offeredBy": {
        "@type": "Organization",
        "name": "Usergy"
      },
      "priceRange": "$500-$5000"
    }
  };

  // Enhanced Website Schema with consistent SVG logo
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Usergy - AI Traction & Growth",
    "alternateName": "Usergy",
    "url": "https://usergy.ai",
    "description": "Expert AI traction services connecting visionary founders with engaged enthusiasts for authentic feedback, vibrant community, and social momentum.",
    "inLanguage": "en-US",
    "copyrightYear": "2024",
    "dateModified": "2025-01-14",
    "publisher": {
      "@type": "Organization",
      "name": "Usergy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://usergy.ai/favicon.svg",
        "width": "64",
        "height": "64"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://usergy.ai/?q={search_term_string}"
      },
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
    "dateModified": "2025-01-14",
    "datePublished": "2024-01-01",
    "lastReviewed": "2025-01-14",
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
        "url": "https://usergy.ai/favicon.svg",
        "width": "64",
        "height": "64"
      }
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Usergy"
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
