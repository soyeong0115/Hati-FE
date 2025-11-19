import React from 'react';

interface BottomButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const BottomButton: React.FC<BottomButtonProps> = ({
  text,
  onClick,
  disabled = false,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-[300px] h-[60px] rounded-[28px] font-hakgyoansim font-bold py-4 text-title-sb-button transition ${
        disabled
          ? 'bg-disabled text-main-gray'
          : 'bg-main-color text-white hover:bg-hover'
      } ${className}`}
    >
      {text}
    </button>
  );
};

export default BottomButton;
