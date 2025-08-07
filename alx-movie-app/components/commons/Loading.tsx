import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizes[size]} animate-spin rounded-full border-b-2 border-gray-900`}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;