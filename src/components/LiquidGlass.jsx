import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

// Main Liquid Glass Container
const LiquidGlass = forwardRef(({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true,
  animate = true,
  blur = 20,
  ...props 
}, ref) => {
  const variants = {
    default: 'liquid-glass',
    card: 'news-card-glass',
    nav: 'nav-glass',
    light: 'liquid-glass bg-glass-100',
    dark: 'liquid-glass bg-glass-200'
  };

  const motionProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  } : {};

  const hoverProps = hover ? {
    whileHover: { 
      y: -2, 
      scale: 1.01,
      transition: { duration: 0.2 }
    }
  } : {};

  return (
    <motion.div
      ref={ref}
      className={`${variants[variant]} ${className}`}
      style={{
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`
      }}
      {...motionProps}
      {...hoverProps}
      {...props}
    >
      {children}
    </motion.div>
  );
});

LiquidGlass.displayName = 'LiquidGlass';

// Liquid Button Component
export const LiquidButton = ({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  ...props 
}) => {
  const variants = {
    primary: 'liquid-button',
    secondary: 'border-2 border-liquid-primary text-liquid-primary bg-transparent hover:bg-liquid-primary hover:text-white',
    ghost: 'text-liquid-primary hover:bg-liquid-light transition-colors'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg'
  };

  return (
    <motion.button
      className={`
        ${variants[variant]} ${sizes[size]} ${className}
        font-medium rounded-xl transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-liquid-primary focus:ring-offset-2
      `}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin ml-2" />
          <span className="persian-text">لطفا صبر کنید...</span>
        </div>
      ) : (
        children
      )}
    </motion.button>
  );
};

// Liquid Flow Animation Component
export const LiquidFlow = ({ 
  children, 
  className = '',
  color = 'rgba(0, 102, 204, 0.1)',
  speed = 6,
  ...props 
}) => {
  return (
    <div 
      className={`liquid-flow ${className}`}
      style={{
        '--liquid-color': color,
        '--liquid-speed': `${speed}s`
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// Glass Loading Skeleton
export const GlassLoading = ({ 
  className = '', 
  height = '20px',
  width = '100%',
  rounded = '8px'
}) => {
  return (
    <div 
      className={`glass-loading ${className}`}
      style={{ 
        height, 
        width, 
        borderRadius: rounded 
      }}
    />
  );
};

// Glass Card with automatic liquid effect
export const GlassCard = ({ 
  children, 
  className = '',
  title,
  footer,
  liquid = false,
  ...props 
}) => {
  const CardWrapper = liquid ? LiquidFlow : 'div';
  
  return (
    <LiquidGlass 
      variant="card" 
      className={`p-6 ${className}`}
      {...props}
    >
      <CardWrapper>
        {title && (
          <div className="mb-4 pb-4 border-b border-glass-100">
            <h3 className="text-lg font-semibold text-gray-900 persian-text">
              {title}
            </h3>
          </div>
        )}
        
        <div className="space-y-4">
          {children}
        </div>
        
        {footer && (
          <div className="mt-4 pt-4 border-t border-glass-100">
            {footer}
          </div>
        )}
      </CardWrapper>
    </LiquidGlass>
  );
};

export default LiquidGlass;