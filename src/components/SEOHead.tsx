import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  image?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  path,
  type = 'website',
  image = '/lovable-uploads/45ae045c-4f58-42d9-933a-0e455a95d9a5.png'
}) => {
  const canonicalUrl = `https://usergy.ai${path}`;
  const fullTitle = path === '/' ? title : `${title} | Usergy`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://usergy.ai/#organization",
        "name": "Usergy",
        "url": "https://usergy.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://usergy.ai/lovable-uploads/45ae045c-4f58-42d9-933a-0e455a95d9a5.png"
        },
        "description": "Expert AI traction services connecting visionary founders with engaged communities for authentic feedback and social momentum.",
        "foundingDate": "2024",
        "founder": {
          "@type": "Person",
          "name": "Swaroop"
        },
        "sameAs": [
          "https://www.linkedin.com/company/usergy-ai",
          "https://discord.com/invite/jkeSnkm5ww",
          "https://www.reddit.com/r/UsergyAI/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://usergy.ai/#website",
        "url": "https://usergy.ai",
        "name": "Usergy",
        "description": "AI Traction & Growth Services",
        "publisher": {
          "@id": "https://usergy.ai/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://usergy.ai/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://usergy.ai" + path + "#breadcrumb",
        "itemListElement": generateBreadcrumbs(path)
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`https://usergy.ai${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Usergy" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://usergy.ai${image}`} />
      
      {/* Additional SEO Tags */}
      <meta name="author" content="Usergy" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="theme-color" content="#4ECDC4" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

const generateBreadcrumbs = (path: string) => {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://usergy.ai"
    }
  ];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' ');
    breadcrumbs.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": name,
      "item": `https://usergy.ai${currentPath}`
    });
  });

  return breadcrumbs;
};

export default SEOHead;