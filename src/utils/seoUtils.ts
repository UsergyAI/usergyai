
// SEO utilities for dynamic meta tag management
export interface PageSEOData {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

// Page-specific SEO data configuration with optimized titles and descriptions
export const pageSEOData: Record<string, PageSEOData> = {
  '/': {
    title: 'AI Traction Experts | Usergy - Growth & Community Services',
    description: 'Expert AI startup consulting connecting visionary founders with engaged enthusiasts. Get authentic feedback, build community, and accelerate growth with proven traction strategies.',
    canonical: 'https://usergy.ai/',
    keywords: 'AI startup growth, AI traction, AI community, startup marketing, AI product feedback, AI consulting, user engagement, product market fit',
    image: 'https://usergy.ai/favicon.svg'
  },
  '/pricing': {
    title: 'AI Traction Pricing | Usergy Services & Plans',
    description: 'Transparent AI traction pricing. Choose Starter, Growth, or Scale plans. Custom enterprise solutions with dedicated success management for your AI startup.',
    canonical: 'https://usergy.ai/pricing',
    keywords: 'AI services pricing, AI traction cost, startup growth pricing, AI community pricing, AI consulting rates',
    image: 'https://usergy.ai/favicon.svg'
  },
  '/community': {
    title: 'AI Explorer Community | Join 500+ AI Enthusiasts',
    description: 'Join our AI explorer community. Connect with founders, test new AI tools, provide feedback, earn rewards, and shape the future of AI innovation together.',
    canonical: 'https://usergy.ai/community',
    keywords: 'AI community, AI explorers, AI enthusiasts, AI feedback, AI early access, AI testing, AI founders network',
    image: 'https://usergy.ai/favicon.svg'
  },
  '/contact': {
    title: 'Contact Usergy | Book Your AI Growth Strategy Call',
    description: 'Contact Usergy for AI traction services. Schedule a free strategy call with our experts to accelerate your AI startup success and build engaged communities.',
    canonical: 'https://usergy.ai/contact',
    keywords: 'contact Usergy, AI startup consultation, AI growth services contact, strategy call, AI consulting',
    image: 'https://usergy.ai/favicon.svg'
  },
  '/user-signup': {
    title: 'Join AI Community | Usergy Founder & Enthusiast Signup',
    description: 'Sign up to join the Usergy AI community. Connect with founders, access exclusive resources, and accelerate your AI journey with expert guidance and support.',
    canonical: 'https://usergy.ai/user-signup',
    keywords: 'join Usergy, AI founder signup, AI community signup, startup network, AI enthusiast registration',
    image: 'https://usergy.ai/favicon.svg'
  },
  '/terms': {
    title: 'Terms of Service | Usergy AI Traction Services',
    description: 'Read Usergy\'s terms of service and user agreement for our AI traction and growth consulting services. Clear guidelines for our community platform.',
    canonical: 'https://usergy.ai/terms',
    noindex: true,
    image: 'https://usergy.ai/favicon.svg'
  },
  '/privacy': {
    title: 'Privacy Policy | Usergy Data Protection & Security',
    description: 'Learn about Usergy\'s privacy policy and how we protect your data in our AI traction and growth services. Your privacy and security are our priorities.',
    canonical: 'https://usergy.ai/privacy',
    noindex: true,
    image: 'https://usergy.ai/favicon.svg'
  }
};

// Get SEO data for current path
export const getSEODataForPath = (pathname: string): PageSEOData => {
  return pageSEOData[pathname] || pageSEOData['/'];
};

// Update document meta tags immediately (for search engines that don't wait for React)
export const updateDocumentMeta = (seoData: PageSEOData) => {
  // Update title
  if (document.title !== seoData.title) {
    document.title = seoData.title;
  }

  // Update meta description
  const descriptionMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement;
  if (descriptionMeta && descriptionMeta.content !== seoData.description) {
    descriptionMeta.content = seoData.description;
  }

  // Update canonical URL
  const canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (canonicalLink && canonicalLink.href !== seoData.canonical) {
    canonicalLink.href = seoData.canonical;
  }

  // Update robots meta if needed
  const robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
  if (robotsMeta) {
    const robotsContent = seoData.noindex ? 'noindex,nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1';
    if (robotsMeta.content !== robotsContent) {
      robotsMeta.content = robotsContent;
    }
  }
};
