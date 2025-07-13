import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  keywords,
  image = 'https://usergy.ai/lovable-uploads/e5f86441-69d0-46b9-b865-d05a56c17b3e.png',
  type = 'website',
  noindex = false
}) => {
  // Ensure titles are under 60 characters for optimal SEO
  const fullTitle = title.includes('Usergy') ? title : `${title} | Usergy`;
  const optimizedTitle = fullTitle.length > 60 ? fullTitle.substring(0, 57) + '...' : fullTitle;
  
  // Ensure descriptions are 150-160 characters for optimal SEO
  const optimizedDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;
  
  // Always ensure clean canonical URLs without index.html
  const url = canonical || 'https://usergy.ai';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{optimizedTitle}</title>
      <meta name="description" content={optimizedDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      {noindex ? <meta name="robots" content="noindex,nofollow" /> : <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />}

      {/* Enhanced SEO Meta Tags */}
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="referrer" content="origin-when-cross-origin" />
      
      {/* Language and Locale */}
      <meta property="og:locale" content="en_US" />
      <meta name="language" content="en" />
      
      {/* Enhanced Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={optimizedTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Usergy - AI Traction & Growth Services" />
      <meta property="og:site_name" content="Usergy" />

      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={optimizedTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Usergy - AI Traction & Growth Services" />
      <meta name="twitter:creator" content="@usergy" />
      <meta name="twitter:site" content="@usergy" />

      {/* Additional SEO Meta */}
      <meta name="author" content="Usergy" />
      <meta name="publisher" content="Usergy" />
      <meta name="theme-color" content="#4ECDC4" />
      <meta name="color-scheme" content="light" />
      <meta name="application-name" content="Usergy" />
      
      {/* Enhanced resource hints for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//calendly.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Critical font loading with font-display: swap */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
        media="print"
        onLoad={() => {
          const link = document.querySelector('link[href*="fonts.googleapis.com"]') as HTMLLinkElement;
          if (link) link.media = 'all';
        }}
      />
      
      {/* Viewport meta tag for responsive design */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      
      {/* Performance optimization meta tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};

export default SEOHead;