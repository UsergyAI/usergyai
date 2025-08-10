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

// Page-specific SEO data configuration
export const pageSEOData: Record<string, PageSEOData> = {
  '/': {
    title: 'Usergy: AI Traction & Growth',
    description: 'Usergy: AI Traction & Growth - Our expert team connects visionary AI founders with engaged enthusiasts to deliver authentic feedback, vibrant community, and social momentum.',
    canonical: 'https://usergy.ai/',
    keywords: 'AI startup growth, AI traction, AI community, startup marketing, AI product feedback',
    image: 'https://usergy.ai/favicon.svg'
  },
  '/pricing': {
    title: 'Usergy Pricing Plans | AI Traction & Growth Solutions',
    description: 'Transparent pricing for AI traction services. Choose from Starter, Growth, or Scale plans. Custom enterprise solutions available with dedicated success management.',
    canonical: 'https://usergy.ai/pricing',
    keywords: 'AI services pricing, AI traction cost, startup growth pricing, AI community pricing',
    image: 'https://usergy.ai/favicon.svg'
  },
  '/services': {
    title: 'Usergy Pricing Plans | AI Traction & Growth Solutions',
    description: 'Transparent pricing for AI traction services. Choose from Starter, Growth, or Scale plans. Custom enterprise solutions available with dedicated success management.',
    canonical: 'https://usergy.ai/pricing',
    keywords: 'AI services pricing, AI traction cost, startup growth pricing, AI community pricing',
    image: 'https://usergy.ai/favicon.svg'
  },
  '/community': {
    title: 'Usergy Community | AI Founders & Enthusiasts Network',
    description: 'Join the Usergy community of AI founders and enthusiasts. Connect, share insights, and accelerate your AI startup with like-minded innovators.',
    canonical: 'https://usergy.ai/community',
    keywords: 'AI community, AI founders network, startup community, AI enthusiasts, tech community',
    image: 'https://usergy.ai/favicon.svg'
  },
  '/contact': {
    title: 'Contact Usergy | Get in Touch with AI Growth Experts',
    description: 'Contact Usergy for AI traction and growth services. Schedule a consultation with our expert team to accelerate your AI startup success.',
    canonical: 'https://usergy.ai/contact',
    keywords: 'contact Usergy, AI startup consultation, AI growth services contact, get in touch',
    image: 'https://usergy.ai/favicon.svg'
  },
  '/user-signup': {
    title: 'Join Usergy | AI Founder & Enthusiast Signup',
    description: 'Sign up to join the Usergy community. Connect with AI founders and enthusiasts, access exclusive resources, and accelerate your AI journey.',
    canonical: 'https://usergy.ai/user-signup',
    keywords: 'join Usergy, AI founder signup, AI community signup, startup network',
    image: 'https://usergy.ai/favicon.svg'
  },
  '/terms': {
    title: 'Terms of Service | Usergy',
    description: 'Read Usergy\'s terms of service and user agreement. Learn about our policies for AI traction and growth services.',
    canonical: 'https://usergy.ai/terms',
    noindex: true,
    image: 'https://usergy.ai/favicon.svg'
  },
  '/privacy': {
    title: 'Privacy Policy | Usergy',
    description: 'Learn about Usergy\'s privacy policy and how we protect your data in our AI traction and growth services.',
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
