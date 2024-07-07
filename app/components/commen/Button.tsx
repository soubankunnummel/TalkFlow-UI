// import React from 'react';

// interface ButtonProps {
//   onClick: () => void;
//   variant?: 'primary' | 'secondary' | 'outline';
//   children: React.ReactNode;
//   disabled?: boolean;
//   className?: string;
// }

// export const Button: React.FC<ButtonProps> = ({
//   onClick,
//   variant = 'primary',
//   children,
//   disabled = false,
//   className = '',
// }) => {
//   const baseStyles = 'px-4 py-2 rounded-md font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';
  
//   const variantStyles = {
//     primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
//     secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
//     outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
//   };

//   const disabledStyles = 'opacity-50 cursor-not-allowed';

//   const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${disabled ? disabledStyles : ''} ${className}`;

//   return (
//     <button
//       onClick={onClick}
//       disabled={disabled}
//       className={buttonStyles}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;