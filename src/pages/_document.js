import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsMediaOrganization",
              "name": "خبرگذاری شیشه‌ای",
              "alternateName": "Glassnews.ir",
              "url": "https://glassnews.ir",
              "logo": {
                "@type": "ImageObject",
                "url": "https://glassnews.ir/logo.png"
              },
              "sameAs": [
                "https://twitter.com/glassnews_ir",
                "https://instagram.com/glassnews.ir"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Editorial",
                "email": "info@glassnews.ir"
              },
              "publishingPrinciples": "https://glassnews.ir/editorial-guidelines",
              "actionableFeedbackPolicy": "https://glassnews.ir/feedback-policy",
              "correctionsPolicy": "https://glassnews.ir/corrections-policy",
              "diversityPolicy": "https://glassnews.ir/diversity-policy",
              "ethicsPolicy": "https://glassnews.ir/ethics-policy"
            })
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}