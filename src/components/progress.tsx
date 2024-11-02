import { cn } from "../lib/cn";

interface ProgressBarProps {
  value: number;
  isPercentageVisible?: boolean;
  color?: string;
  bg?: string;
  percentageColor?: string;
}

export const ProgressBar = ({
  value,
  isPercentageVisible = false,
  color = "#4392F1",
  bg = "#F6F6FC",
  percentageColor = "black",
}: ProgressBarProps) => {
  return (
    <div
      className={cn(`relative w-full h-4 rounded-full`)}
      style={{ backgroundColor: bg }}
    >
      <div
        className={cn(`h-4 transition-all rounded-full`)}
        style={{ width: `${value}%`, backgroundColor: color }}
      >
        {isPercentageVisible && (
          <span
            className="absolute inset-0 flex items-center justify-center text-xs font-semibold"
            style={{ color: percentageColor }}
          >
            {value}%
          </span>
        )}
      </div>
    </div>
  );
};
