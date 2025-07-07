import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface EnhancedCheckboxProps {
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label: string;
  className?: string;
}

export const EnhancedCheckbox: React.FC<EnhancedCheckboxProps> = ({
  id,
  checked,
  onCheckedChange,
  label,
  className
}) => {
  return (
    <div className={cn(
      "flex items-center space-x-3 p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md group",
      checked
        ? "border-usergy-turquoise bg-usergy-turquoise/5 shadow-sm"
        : "border-gray-200 hover:border-usergy-turquoise/50 hover:bg-gray-50",
      className
    )}
    onClick={() => onCheckedChange(!checked)}
    role="checkbox"
    aria-checked={checked}
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onCheckedChange(!checked);
      }
    }}
    >
      <div className={cn(
        "w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-300",
        checked
          ? "bg-usergy-turquoise border-usergy-turquoise"
          : "border-gray-300 group-hover:border-usergy-turquoise/50"
      )}>
        {checked && (
          <Check className="w-3 h-3 text-white animate-scale-in" strokeWidth={3} />
        )}
      </div>
      <label htmlFor={id} className="text-sm font-medium text-gray-700 cursor-pointer select-none">
        {label}
      </label>
    </div>
  );
};