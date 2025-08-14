
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
}

const SEOAudit: React.FC = () => {
  const [issues, setIssues] = useState<SEOIssue[]>([]);
  const location = useLocation();

  useEffect(() => {
    const auditSEO = () => {
      const foundIssues: SEOIssue[] = [];

      // Check title
      const title = document.title;
      if (!title) {
        foundIssues.push({ type: 'error', message: 'Missing page title', element: 'title' });
      } else if (title.length > 60) {
        foundIssues.push({ type: 'warning', message: `Title too long (${title.length} chars, max 60)`, element: 'title' });
      } else if (title.length < 30) {
        foundIssues.push({ type: 'warning', message: `Title too short (${title.length} chars, min 30)`, element: 'title' });
      } else {
        foundIssues.push({ type: 'info', message: `Title length optimal (${title.length} chars)`, element: 'title' });
      }

      // Check meta description
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
      if (!description) {
        foundIssues.push({ type: 'error', message: 'Missing meta description', element: 'meta[name="description"]' });
      } else if (description.length > 160) {
        foundIssues.push({ type: 'warning', message: `Description too long (${description.length} chars, max 160)`, element: 'meta[name="description"]' });
      } else if (description.length < 120) {
        foundIssues.push({ type: 'warning', message: `Description too short (${description.length} chars, min 120)`, element: 'meta[name="description"]' });
      } else {
        foundIssues.push({ type: 'info', message: `Description length good (${description.length} chars)`, element: 'meta[name="description"]' });
      }

      // Check canonical URL
      const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
      if (!canonical) {
        foundIssues.push({ type: 'error', message: 'Missing canonical URL', element: 'link[rel="canonical"]' });
      } else {
        foundIssues.push({ type: 'info', message: 'Canonical URL present', element: 'link[rel="canonical"]' });
      }

      // Check Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
      const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content');
      const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');

      if (!ogTitle) foundIssues.push({ type: 'warning', message: 'Missing Open Graph title', element: 'meta[property="og:title"]' });
      if (!ogDescription) foundIssues.push({ type: 'warning', message: 'Missing Open Graph description', element: 'meta[property="og:description"]' });
      if (!ogImage) foundIssues.push({ type: 'warning', message: 'Missing Open Graph image', element: 'meta[property="og:image"]' });

      // Check structured data
      const structuredData = document.querySelector('script[type="application/ld+json"]');
      if (!structuredData) {
        foundIssues.push({ type: 'warning', message: 'Missing structured data', element: 'script[type="application/ld+json"]' });
      } else {
        foundIssues.push({ type: 'info', message: 'Structured data present', element: 'script[type="application/ld+json"]' });
      }

      // Check for H1 tags
      const h1Tags = document.querySelectorAll('h1');
      if (h1Tags.length === 0) {
        foundIssues.push({ type: 'error', message: 'Missing H1 tag', element: 'h1' });
      } else if (h1Tags.length > 1) {
        foundIssues.push({ type: 'warning', message: `Multiple H1 tags found (${h1Tags.length})`, element: 'h1' });
      } else {
        foundIssues.push({ type: 'info', message: 'Single H1 tag found', element: 'h1' });
      }

      // Check images without alt text
      const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
      if (imagesWithoutAlt.length > 0) {
        foundIssues.push({ type: 'warning', message: `${imagesWithoutAlt.length} images missing alt text`, element: 'img' });
      } else {
        foundIssues.push({ type: 'info', message: 'All images have alt text', element: 'img' });
      }

      // Check favicon
      const favicon = document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');
      if (!favicon) {
        foundIssues.push({ type: 'warning', message: 'Missing favicon', element: 'link[rel="icon"]' });
      }

      // Check viewport meta tag
      const viewport = document.querySelector('meta[name="viewport"]');
      if (!viewport) {
        foundIssues.push({ type: 'error', message: 'Missing viewport meta tag', element: 'meta[name="viewport"]' });
      }

      setIssues(foundIssues);

      // Log SEO audit results in development
      if (process.env.NODE_ENV === 'development') {
        console.group('🔍 SEO Audit Results');
        console.log('📍 Page:', location.pathname);
        console.log('📝 Title:', title);
        console.log('📄 Description:', description);
        console.log('🔗 Canonical:', canonical);
        console.log('📊 Issues found:', foundIssues.length);
        foundIssues.forEach(issue => {
          const icon = issue.type === 'error' ? '❌' : issue.type === 'warning' ? '⚠️' : '✅';
          console[issue.type](`${icon} ${issue.type.toUpperCase()}: ${issue.message}`);
        });
        console.groupEnd();
      }
    };

    // Run audit after page loads
    const timer = setTimeout(auditSEO, 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const errorCount = issues.filter(i => i.type === 'error').length;
  const warningCount = issues.filter(i => i.type === 'warning').length;
  const infoCount = issues.filter(i => i.type === 'info').length;

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg max-w-sm z-50 shadow-xl">
      <h3 className="font-bold mb-2 text-sm">
        🔍 SEO Audit ({issues.length} items)
      </h3>
      <div className="text-xs mb-2 space-y-1">
        {errorCount > 0 && <div className="text-red-300">❌ {errorCount} errors</div>}
        {warningCount > 0 && <div className="text-yellow-300">⚠️ {warningCount} warnings</div>}
        {infoCount > 0 && <div className="text-green-300">✅ {infoCount} good</div>}
      </div>
      {issues.slice(0, 3).map((issue, index) => (
        <div key={index} className={`text-xs mb-1 ${
          issue.type === 'error' ? 'text-red-300' : 
          issue.type === 'warning' ? 'text-yellow-300' : 'text-green-300'
        }`}>
          {issue.type === 'error' ? '❌' : issue.type === 'warning' ? '⚠️' : '✅'} {issue.message}
        </div>
      ))}
      {issues.length > 3 && (
        <div className="text-xs text-gray-300">...and {issues.length - 3} more</div>
      )}
    </div>
  );
};

export default SEOAudit;
