interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="flex justify-center mb-4">
      <div className="w-[300px] h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-main-color transition-all duration-300 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
