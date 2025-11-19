interface QuestionButtonProps {
  text: string;
  onClick: () => void;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function QuestionButton({
  text,
  onClick,
  selected = false,
  disabled = false,
  className = '',
}: QuestionButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-4 px-6 rounded-[28px] text-center font-hakgyoansim font-medium text-title-sb-button transition border-2 whitespace-pre-line break-words ${
        selected
          ? 'bg-main-color text-white border-main-color'
          : 'bg-white text-text-brown border-gray-200 hover:border-main-color'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
    >
      {text}
    </button>
  );
}
