interface QuestionCounterProps {
  current: number;
  total: number;
}

export default function QuestionCounter({
  current,
  total,
}: QuestionCounterProps) {
  return (
    <div className="text-center mb-6">
      <span className="text-title-sb-button font-hakgyoansim font-bold text-text-brown">
        {current}/{total}
      </span>
    </div>
  );
}
