import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps, router }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 5 * 60 * 1000, // 5 minutes
      },
    },
  }));

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0066CC" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Persian Fonts */}
        <link rel="preconnect" href="https://cdn.fontcdn.ir" />
        <link href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css" rel="stylesheet" />
        <link href="https://cdn.fontcdn.ir/Font/Persian/IRANSans/IRANSans.css" rel="stylesheet" />
        
        {/* SEO Meta Tags */}
        <meta name="description" content="خبرگذاری شیشه‌ای - اولین سایت خبری با طراحی Liquid Glass" />
        <meta name="keywords" content="اخبار, خبر, ایران, جهان, فناوری, اقتصاد, ورزش, سیاست" />
        <meta name="author" content="Glassnews.ir" />
        
        {/* Open Graph */}
        <meta property="og:title" content="خبرگذاری شیشه‌ای - Glassnews.ir" />
        <meta property="og:description" content="آخرین اخبار ایران و جهان با طراحی منحصر به فرد" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glassnews.ir" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="خبرگذاری شیشه‌ای" />
        <meta name="twitter:description" content="اولین سایت خبری با طراحی Liquid Glass" />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>
      
      <QueryClientProvider client={queryClient}>
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </QueryClientProvider>
    </>
  );
}