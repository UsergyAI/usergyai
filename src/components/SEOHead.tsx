
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Usergy: AI Traction & Growth - Expert Guidance for AI Founders",
  description = "Transform your AI vision into reality with expert guidance. Get authentic feedback, vibrant community, and social momentum for your AI tool.",
  keywords = "AI growth, AI traction, AI founders, AI strategy, AI community, AI feedback, AI consultation",
  canonicalUrl = "https://usergy.ai",
  ogImage = "https://usergy.ai/lovable-uploads/c5c3b275-e91f-4380-a86a-a6b4489557a1.png"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;
