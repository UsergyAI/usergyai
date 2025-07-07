import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, Search } from 'lucide-react';

interface SearchableSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  error?: boolean;
  success?: boolean;
}

export const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className,
  error,
  success
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
    setSearchTerm('');
    setFocusedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex(prev =>
        prev < filteredOptions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex(prev =>
        prev > 0 ? prev - 1 : filteredOptions.length - 1
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (focusedIndex >= 0 && filteredOptions.length > 0) {
        handleSelect(filteredOptions[focusedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchTerm('');
      setFocusedIndex(-1);
    }
  };

  return (
    <div ref={dropdownRef} className={cn("relative", className)}>
      <div
        className={cn(
          "relative flex items-center w-full px-4 py-3 border-2 rounded-xl cursor-pointer transition-all duration-300",
          "hover:border-usergy-turquoise/50 focus-within:border-usergy-turquoise focus-within:ring-4 focus-within:ring-usergy-turquoise/10",
          error && "border-red-500 focus-within:border-red-500 focus-within:ring-red-500/10",
          success && "border-green-500 focus-within:border-green-500 focus-within:ring-green-500/10",
          !error && !success && "border-gray-200"
        )}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
          }
        }}
      >
        <div className="flex-1 min-w-0">
          {value ? (
            <span className="text-gray-900 font-medium">{value}</span>
          ) : (
            <span className="text-gray-500">{placeholder}</span>
          )}
        </div>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-gray-400 transition-transform duration-200 ml-2",
            isOpen && "transform rotate-180"
          )}
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl max-h-80 overflow-hidden">
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-usergy-turquoise"
              />
            </div>
          </div>
          
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div
                  key={option}
                  className={cn(
                    "px-4 py-3 cursor-pointer transition-colors duration-150",
                    index === focusedIndex ? "bg-usergy-turquoise/10" : "hover:bg-gray-50",
                    value === option && "bg-usergy-turquoise/5 text-usergy-turquoise font-medium"
                  )}
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => setFocusedIndex(index)}
                >
                  {option}
                </div>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-gray-500">
                No options found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};