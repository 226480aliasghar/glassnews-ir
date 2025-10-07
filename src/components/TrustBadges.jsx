import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  GlobeAltIcon
} from '@heroicons/react/24/solid';

const TrustBadges = ({ article, author, className = '' }) => {
  const badges = [];

  // Verified Author Badge
  if (author?.verified) {
    badges.push({
      id: 'verified-author',
      icon: CheckCircleIcon,
      text: 'نویسنده تأیید شده',
      color: 'text-trust-verified',
      bgColor: 'bg-trust-verified/10',
      borderColor: 'border-trust-verified/20'
    });
  }

  // Fact-Checked Badge
  if (article?.factChecked) {
    badges.push({
      id: 'fact-checked',
      icon: ShieldCheckIcon,
      text: 'بررسی واقعیت',
      color: 'text-trust-verified',
      bgColor: 'bg-trust-verified/10',
      borderColor: 'border-trust-verified/20'
    });
  }

  // Breaking News Badge
  if (article?.isBreaking) {
    badges.push({
      id: 'breaking',
      icon: ClockIcon,
      text: 'فوری',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      pulse: true
    });
  }

  // Popular Article Badge
  if (article?.views > 10000) {
    badges.push({
      id: 'popular',
      icon: UserGroupIcon,
      text: 'پربیننده',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    });
  }

  // International News Badge
  if (article?.category === 'international') {
    badges.push({
      id: 'international',
      icon: GlobeAltIcon,
      text: 'بین‌المللی',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    });
  }

  if (badges.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className={`
              inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium
              backdrop-blur-sm border transition-all duration-200 hover:scale-105
              ${badge.color} ${badge.bgColor} ${badge.borderColor}
              ${badge.pulse ? 'animate-trust-pulse' : ''}
            `}
          >
            <Icon className="w-3 h-3" />
            <span className="persian-text whitespace-nowrap">{badge.text}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

// Trust Score Component
export const TrustScore = ({ score, className = '' }) => {
  const getScoreColor = (score) => {
    if (score >= 90) return 'text-trust-verified';
    if (score >= 70) return 'text-trust-warning';
    return 'text-trust-danger';
  };

  const getScoreText = (score) => {
    if (score >= 90) return 'بالا';
    if (score >= 70) return 'متوسط';
    return 'پایین';
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <div className="text-xs persian-text text-gray-500">میزان اعتماد:</div>
      <div className={`text-sm font-bold ${getScoreColor(score)}`}>
        {score}% ({getScoreText(score)})
      </div>
      <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`h-full rounded-full ${
            score >= 90 ? 'bg-trust-verified' :
            score >= 70 ? 'bg-trust-warning' : 'bg-trust-danger'
          }`}
        />
      </div>
    </motion.div>
  );
};

// Source Credibility Component
export const SourceCredibility = ({ source, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`liquid-glass p-3 rounded-xl ${className}`}
    >
      <h4 className="text-sm font-semibold text-gray-900 persian-text mb-2">
        اعتبار منبع
      </h4>
      <div className="space-y-2 text-xs persian-text">
        <div className="flex justify-between">
          <span className="text-gray-600">نام منبع:</span>
          <span className="font-medium">{source.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">تأیید هویت:</span>
          <span className={source.verified ? 'text-trust-verified' : 'text-trust-danger'}>
            {source.verified ? 'تأیید شده' : 'تأیید نشده'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">رتبه اعتبار:</span>
          <TrustScore score={source.trustScore} />
        </div>
      </div>
    </motion.div>
  );
};

export default TrustBadges;