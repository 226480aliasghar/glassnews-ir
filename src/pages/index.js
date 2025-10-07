import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import LiquidGlass, { LiquidButton, GlassCard } from '../components/LiquidGlass';
import TrustBadges, { TrustScore } from '../components/TrustBadges';
import { 
  FireIcon, 
  TrendingUpIcon, 
  ClockIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

// Sample news data
const sampleNews = [
  {
    id: 1,
    slug: 'breaking-tech-news-1',
    title: 'آپدیت جدید iOS 26 با طراحی Liquid Glass منتشر شد',
    summary: 'اپل امروز آپدیت جدید سیستم‌عامل iOS 26 را با طراحی انقلابی Liquid Glass معرفی کرد که تجربه کاربری جدیدی را ارائه می‌دهد.',
    content: 'محتوای کامل خبر...',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600',
    category: 'فناوری',
    author: {
      id: 1,
      name: 'علی احمدی',
      verified: true,
      avatar: '/avatars/ali.jpg'
    },
    publishedAt: '2025-10-07T18:00:00Z',
    views: 15420,
    readTime: 5,
    isBreaking: true,
    factChecked: true,
    trustScore: 95
  },
  {
    id: 2,
    slug: 'economy-news-1',
    title: 'بازارهای مالی امروز رشد مثبتی داشتند',
    summary: 'شاخص‌های اصلی بورس تهران امروز با رشد قابل توجهی همراه بودند و سرمایه‌گذاران واکنش مثبتی نشان دادند.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600',
    category: 'اقتصادی',
    author: {
      id: 2,
      name: 'مریم کریمی',
      verified: true
    },
    publishedAt: '2025-10-07T16:30:00Z',
    views: 8750,
    readTime: 3,
    factChecked: true,
    trustScore: 88
  },
  {
    id: 3,
    slug: 'sports-news-1',
    title: 'پیروزی تیم ملی فوتبال در دیدار دوستانه',
    summary: 'تیم ملی فوتبال ایران در دیداری دوستانه با نتیجه 2-1 پیروز شد و عملکرد قابل قبولی از خود نشان داد.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600',
    category: 'ورزشی',
    author: {
      id: 3,
      name: 'حسین رضایی',
      verified: false
    },
    publishedAt: '2025-10-07T15:00:00Z',
    views: 12300,
    readTime: 4,
    trustScore: 76
  }
];

const categories = [
  { name: 'همه اخبار', icon: GlobeAltIcon, count: 156, active: true },
  { name: 'فوری', icon: FireIcon, count: 12, color: 'text-red-500' },
  { name: 'پربازدید', icon: TrendingUpIcon, count: 24, color: 'text-orange-500' },
  { name: 'جدید', icon: ClockIcon, count: 8, color: 'text-blue-500' }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Head>
        <title>خبرگذاری شیشه‌ای - Glassnews.ir</title>
        <meta name="description" content="خبرگذاری شیشه‌ای با طراحی Liquid Glass - آخرین اخبار ایران و جهان" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <LiquidGlass className="p-8 mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 persian-text mb-4">
                خبرگذاری شیشه‌ای
              </h1>
              <p className="text-xl text-gray-600 persian-text mb-6 max-w-3xl mx-auto leading-relaxed">
                اولین سایت خبری با طراحی Liquid Glass - تجربه‌ای نو در دنیای اخبار
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <TrustScore score={94} className="text-lg" />
                <div className="w-1 h-6 bg-gray-300 rounded-full" />
                <div className="text-sm text-gray-500 persian-text">
                  بیش از 50,000 کاربر فعال روزانه
                </div>
              </div>
            </LiquidGlass>
          </motion.section>

          {/* Categories Filter */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <LiquidGlass className="p-4">
              <div className="flex items-center gap-4 overflow-x-auto">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <motion.button
                      key={category.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`
                        flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap
                        transition-all duration-200 hover:scale-105
                        ${
                          category.active
                            ? 'bg-liquid-primary text-white shadow-liquid'
                            : 'bg-glass-100 text-gray-700 hover:bg-glass-200'
                        }
                      `}
                    >
                      <Icon className={`w-4 h-4 ${category.color || ''}`} />
                      <span className="persian-text font-medium">{category.name}</span>
                      <span className="text-xs bg-white bg-opacity-20 px-2 py-0.5 rounded-full">
                        {category.count}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </LiquidGlass>
          </motion.section>

          {/* News Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sampleNews.map((article, index) => (
              <NewsCard 
                key={article.id} 
                article={article} 
                index={index}
              />
            ))}
          </section>

          {/* Trust & Transparency Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard 
                title="شفافیت اخبار"
                className="text-center"
              >
                <div className="text-3xl font-bold text-trust-verified mb-2">98%</div>
                <p className="text-sm text-gray-600 persian-text">
                  اخبار ما توسط کارشناسان بررسی و تأیید می‌شوند
                </p>
              </GlassCard>
              
              <GlassCard 
                title="سرعت انتشار"
                className="text-center"
              >
                <div className="text-3xl font-bold text-liquid-primary mb-2">2 دقیقه</div>
                <p className="text-sm text-gray-600 persian-text">
                  متوسط زمان انتشار اخبار فوری
                </p>
              </GlassCard>
              
              <GlassCard 
                title="اعتماد کاربران"
                className="text-center"
              >
                <div className="text-3xl font-bold text-trust-verified mb-2">4.8/5</div>
                <p className="text-sm text-gray-600 persian-text">
                  امتیاز رضایت‌مندی کاربران
                </p>
              </GlassCard>
            </div>
          </motion.section>

          {/* Newsletter Subscription */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <LiquidGlass className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 persian-text mb-4">
                عضویت در خبرنامه
              </h2>
              <p className="text-gray-600 persian-text mb-6">
                برای دریافت آخرین اخبار در ایمیل خود عضو شوید
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="آدرس ایمیل شما"
                  className="flex-1 px-4 py-3 rounded-xl border border-glass-200 bg-glass-50 focus:outline-none focus:ring-2 focus:ring-liquid-primary persian-text text-right"
                  dir="ltr"
                />
                <LiquidButton className="px-6 py-3">
                  عضویت
                </LiquidButton>
              </div>
            </LiquidGlass>
          </motion.section>
        </div>
      </main>
    </div>
  );
}