
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSEODataForPath, updateDocumentMeta } from '@/utils/seoUtils';

interface SEOHeadProps {
  title?: string;
  description?: string;
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
  image = 'https://usergy.ai/favicon.svg',
  type = 'website',
  noindex = false
}) => {
  const location = useLocation();
  
  // Get default SEO data for current path
  const defaultSEOData = getSEODataForPath(location.pathname);
  
  // Use props if provided, otherwise fall back to path-specific defaults
  const finalTitle = title || defaultSEOData.title;
  const finalDescription = description || defaultSEOData.description;
  const finalCanonical = canonical || defaultSEOData.canonical;
  const finalKeywords = keywords || defaultSEOData.keywords;
  const finalNoindex = noindex || defaultSEOData.noindex || false;
  const finalImage = image;
  
  // Immediately update document meta tags for search engines
  useEffect(() => {
    updateDocumentMeta({
      title: finalTitle,
      description: finalDescription,
      canonical: finalCanonical,
      noindex: finalNoindex
    });
  }, [finalTitle, finalDescription, finalCanonical, finalNoindex]);

  // Ensure titles are under 60 characters for optimal SEO
  const optimizedTitle = finalTitle.length > 60 ? finalTitle.substring(0, 57) + '...' : finalTitle;
  
  // Ensure descriptions are 150-160 characters for optimal SEO
  const optimizedDescription = finalDescription.length > 160 ? finalDescription.substring(0, 157) + '...' : finalDescription;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{optimizedTitle}</title>
      <meta name="description" content={optimizedDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}
      <link rel="canonical" href={finalCanonical} />
      {finalNoindex ? <meta name="robots" content="noindex,nofollow" /> : <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />}

      {/* Enhanced SEO Meta Tags */}
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="referrer" content="origin-when-cross-origin" />
      
      {/* Language and Locale */}
      <meta property="og:locale" content="en_US" />
      <meta name="language" content="en" />
      <meta httpEquiv="content-language" content="en-US" />
      
      {/* Enhanced Open Graph with consistent logo */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={optimizedTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content="64" />
      <meta property="og:image:height" content="64" />
      <meta property="og:image:alt" content="Usergy - AI Traction & Growth Services Logo" />
      <meta property="og:site_name" content="Usergy" />

      {/* Enhanced Twitter Card with consistent logo */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={optimizedTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:image:alt" content="Usergy - AI Traction & Growth Services Logo" />
      <meta name="twitter:creator" content="@usergy" />
      <meta name="twitter:site" content="@usergy" />

      {/* Additional SEO Meta */}
      <meta name="author" content="Usergy" />
      <meta name="publisher" content="Usergy" />
      <meta name="theme-color" content="#005BEA" />
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

      {/* Structured Data for better search results */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": optimizedTitle,
          "description": optimizedDescription,
          "url": finalCanonical,
          "inLanguage": "en-US",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Usergy",
            "url": "https://usergy.ai"
          },
          "author": {
            "@type": "Organization",
            "name": "Usergy"
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
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
