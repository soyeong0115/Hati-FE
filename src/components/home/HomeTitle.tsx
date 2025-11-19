import { createTextShadow } from '@/utils/textShadow';

interface HomeTitleProps {
  text: string;
  lines?: string[][];
  highlightColor?: string;
  defaultColor?: string;
  strokeWidth?: number;
  strokeColor?: string;
  className?: string;
}

export default function HomeTitle({
  text,
  lines,
  highlightColor = 'text-main-color',
  defaultColor = 'text-text-brown',
  strokeWidth,
  strokeColor = 'white',
  className = '',
}: HomeTitleProps) {
  const getLines = (): string[][] => {
    if (lines) return lines;

    const words = text.split(' ');
    const midPoint = Math.ceil(words.length / 2);
    return [words.slice(0, midPoint), words.slice(midPoint)];
  };

  const titleLines = getLines();

  const renderWord = (word: string) => {
    const firstLetter = word[0];
    const restLetters = word.slice(1);

    const strokeStyle = strokeWidth
      ? {
          textShadow: createTextShadow(strokeWidth, strokeColor),
        }
      : {};

    return (
      <span key={word} className="inline-block relative">
        <span style={strokeStyle}>
          <span className={highlightColor}>{firstLetter}</span>
          <span className={defaultColor}>{restLetters}</span>
        </span>
      </span>
    );
  };

  return (
    <div
      className={`flex flex-col justify-center items-center font-cherry text-center ${className}`}
    >
      {titleLines.map((line, lineIndex) => (
        <div
          key={lineIndex}
          className={`text-[44px] font-bold flex flex-wrap justify-center gap-4 ${
            lineIndex < titleLines.length - 1 ? 'mb-0' : ''
          }`}
        >
          {line.map((word) => renderWord(word))}
        </div>
      ))}
    </div>
  );
}
