import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Bars3Icon, 
  XMarkIcon, 
  MagnifyingGlassIcon,
  UserIcon 
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'صفحه اصلی', href: '/' },
    { title: 'سیاسی', href: '/category/politics' },
    { title: 'اقتصادی', href: '/category/economy' },
    { title: 'فناوری', href: '/category/technology' },
    { title: 'ورزشی', href: '/category/sports' },
    { title: 'درباره ما', href: '/about' },
  ];

  return (
    <motion.header
      className={`nav-glass ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <motion.div
              className="w-10 h-10 bg-liquid-gradient rounded-xl flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-liquid-primary font-bold text-xl">G</span>
            </motion.div>
            <div className="text-right persian-text">
              <h1 className="text-xl font-bold text-gray-900">خبرگذاری شیشه‌ای</h1>
              <p className="text-xs text-gray-500">Glassnews.ir</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="persian-text text-gray-700 hover:text-liquid-primary font-medium transition-colors duration-200 relative group"
                >
                  {item.title}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-liquid-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Search & User Actions */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <motion.button
              className="p-2 rounded-xl bg-glass-100 hover:bg-glass-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-700" />
            </motion.button>
            
            <motion.button
              className="p-2 rounded-xl bg-glass-100 hover:bg-glass-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <UserIcon className="w-5 h-5 text-gray-700" />
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl bg-glass-100 hover:bg-glass-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-5 h-5" />
              ) : (
                <Bars3Icon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 liquid-glass rounded-2xl p-4"
          >
            <nav className="space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block persian-text text-gray-700 hover:text-liquid-primary font-medium py-2 px-3 rounded-xl hover:bg-glass-100 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;