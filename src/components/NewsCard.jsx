import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ClockIcon, 
  EyeIcon, 
  ShareIcon,
  BookmarkIcon 
} from '@heroicons/react/24/outline';
import { formatDistanceToNow } from 'date-fns';
import { faIR } from 'date-fns/locale';

const NewsCard = ({ article, index = 0 }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleShare = (e) => {
    e.preventDefault();
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: `/article/${article.slug}`
      });
    }
  };

  const handleBookmark = (e) => {
    e.preventDefault();
    // Add bookmark functionality
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="news-card-glass p-6 hover:shadow-liquid transition-all duration-300 group"
    >
      <Link href={`/article/${article.slug}`}>
        <div className="space-y-4">
          {/* Image */}
          {article.image && (
            <div className="relative overflow-hidden rounded-2xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="aspect-video relative"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="trust-badge text-xs">
                    {article.category}
                  </span>
                </div>
                
                {/* Reading Time */}
                <div className="absolute bottom-3 left-3">
                  <div className="flex items-center bg-black bg-opacity-50 text-white px-2 py-1 rounded-lg text-xs">
                    <ClockIcon className="w-3 h-3 ml-1" />
                    <span>{article.readTime} دقیقه مطالعه</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Content */}
          <div className="space-y-3">
            {/* Title */}
            <motion.h2 
              className="text-xl font-bold text-gray-900 persian-text leading-tight group-hover:text-liquid-primary transition-colors duration-200"
              whileHover={{ scale: 1.01 }}
            >
              {article.title}
            </motion.h2>

            {/* Summary */}
            <p className="text-gray-600 persian-text text-sm leading-relaxed line-clamp-3">
              {article.summary}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-between pt-2 border-t border-glass-100">
              <div className="flex items-center space-x-2 space-x-reverse text-xs text-gray-500">
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-liquid-gradient rounded-full flex items-center justify-center ml-2">
                    <span className="text-white text-xs font-bold">
                      {article.author.name.charAt(0)}
                    </span>
                  </div>
                  <span className="persian-text">{article.author.name}</span>
                </div>
                
                <span>•</span>
                
                {/* Date */}
                <div className="flex items-center">
                  <ClockIcon className="w-3 h-3 ml-1" />
                  <span className="persian-text">
                    {formatDistanceToNow(new Date(article.publishedAt), {
                      addSuffix: true,
                      locale: faIR
                    })}
                  </span>
                </div>
                
                <span>•</span>
                
                {/* Views */}
                <div className="flex items-center">
                  <EyeIcon className="w-3 h-3 ml-1" />
                  <span>{article.views?.toLocaleString('fa-IR')} بازدید</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2 space-x-reverse">
                <motion.button
                  onClick={handleShare}
                  className="p-1.5 rounded-lg bg-glass-100 hover:bg-glass-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ShareIcon className="w-4 h-4 text-gray-600" />
                </motion.button>
                
                <motion.button
                  onClick={handleBookmark}
                  className="p-1.5 rounded-lg bg-glass-100 hover:bg-glass-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <BookmarkIcon className="w-4 h-4 text-gray-600" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default NewsCard;