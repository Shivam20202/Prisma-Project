import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`w-full px-4 py-3 text-white bg-[#2B3674] rounded-lg hover:bg-[#1B254B] focus:outline-none focus:ring-2 focus:ring-[#2B3674] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        children
      )}
    </button>
  );
};