import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, Check } from 'lucide-react';

interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

const COUNTRIES: Country[] = [
  { code: 'US', name: 'United States', flag: '🇺🇸', dialCode: '+1' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', dialCode: '+44' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', dialCode: '+1' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', dialCode: '+61' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', dialCode: '+49' },
  { code: 'FR', name: 'France', flag: '🇫🇷', dialCode: '+33' },
  { code: 'IN', name: 'India', flag: '🇮🇳', dialCode: '+91' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵', dialCode: '+81' },
  { code: 'CN', name: 'China', flag: '🇨🇳', dialCode: '+86' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', dialCode: '+55' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽', dialCode: '+52' },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷', dialCode: '+54' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹', dialCode: '+39' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸', dialCode: '+34' },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱', dialCode: '+31' },
  { code: 'RU', name: 'Russia', flag: '🇷🇺', dialCode: '+7' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷', dialCode: '+82' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬', dialCode: '+65' },
  { code: 'CH', name: 'Switzerland', flag: '🇨🇭', dialCode: '+41' },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪', dialCode: '+46' },
].sort((a, b) => a.name.localeCompare(b.name));

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  error?: boolean;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  placeholder = "Enter your phone number",
  className,
  error
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES.find(c => c.code === 'US') || COUNTRIES[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parse existing value to extract country code and phone number
    if (value && value.startsWith('+')) {
      const country = COUNTRIES.find(c => value.startsWith(c.dialCode));
      if (country) {
        setSelectedCountry(country);
        setPhoneNumber(value.substring(country.dialCode.length));
      }
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearch('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCountries = COUNTRIES.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase()) ||
    country.dialCode.includes(search) ||
    country.code.toLowerCase().includes(search.toLowerCase())
  );

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearch('');
    // Update the full value
    const fullNumber = phoneNumber ? `${country.dialCode}${phoneNumber}` : '';
    onChange(fullNumber);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = e.target.value.replace(/[^\d]/g, '');
    setPhoneNumber(newNumber);
    // Update the full value
    const fullNumber = newNumber ? `${selectedCountry.dialCode}${newNumber}` : '';
    onChange(fullNumber);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="flex">
        {/* Country Selector */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "flex items-center px-3 py-2 border border-r-0 rounded-l-md bg-white hover:bg-gray-50 transition-colors",
              error ? "border-red-500" : "border-gray-300",
              "focus:outline-none focus:ring-2 focus:ring-usergy-turquoise focus:border-transparent"
            )}
          >
            <span className="text-lg mr-1">{selectedCountry.flag}</span>
            <span className="text-sm font-medium text-gray-700 mr-1">{selectedCountry.dialCode}</span>
            <ChevronDown className={cn("h-4 w-4 text-gray-400 transition-transform", isOpen && "rotate-180")} />
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-hidden">
              {/* Search */}
              <div className="p-2 border-b">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search countries..."
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-usergy-turquoise"
                />
              </div>

              {/* Country List */}
              <div className="overflow-y-auto max-h-48">
                {filteredCountries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => handleCountrySelect(country)}
                    className="w-full flex items-center px-3 py-2 hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="text-lg mr-3">{country.flag}</span>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{country.name}</div>
                      <div className="text-xs text-gray-500">{country.dialCode}</div>
                    </div>
                    {selectedCountry.code === country.code && (
                      <Check className="h-4 w-4 text-usergy-turquoise" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Phone Number Input */}
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneChange}
          placeholder={placeholder}
          className={cn(
            "flex-1 px-3 py-2 border rounded-r-md bg-white transition-colors",
            error ? "border-red-500" : "border-gray-300",
            "focus:outline-none focus:ring-2 focus:ring-usergy-turquoise focus:border-transparent",
            "placeholder:opacity-55"
          )}
        />
      </div>
    </div>
  );
};