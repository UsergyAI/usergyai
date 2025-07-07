import React from 'react';
import { cn } from '@/lib/utils';

interface EnhancedRadioOption {
  value: string;
  label: string;
  description?: string;
}

interface EnhancedRadioGroupProps {
  options: EnhancedRadioOption[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  className?: string;
}

export const EnhancedRadioGroup: React.FC<EnhancedRadioGroupProps> = ({
  options,
  value,
  onChange,
  name,
  className
}) => {
  return (
    <div className={cn("space-y-3", className)}>
      {options.map((option) => (
        <div
          key={option.value}
          className={cn(
            "flex items-start space-x-3 p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md group",
            value === option.value
              ? "border-usergy-turquoise bg-usergy-turquoise/5 shadow-sm"
              : "border-gray-200 hover:border-usergy-turquoise/50 hover:bg-gray-50"
          )}
          onClick={() => onChange(option.value)}
          role="radio"
          aria-checked={value === option.value}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onChange(option.value);
            }
          }}
        >
          <div className={cn(
            "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 mt-0.5",
            value === option.value
              ? "border-usergy-turquoise"
              : "border-gray-300 group-hover:border-usergy-turquoise/50"
          )}>
            {value === option.value && (
              <div className="w-2.5 h-2.5 bg-usergy-turquoise rounded-full animate-scale-in" />
            )}
          </div>
          <div className="flex-1">
            <label className="text-sm font-medium text-gray-700 cursor-pointer select-none block">
              {option.label}
            </label>
            {option.description && (
              <p className="text-xs text-gray-500 mt-1">{option.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};