import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, Search, Phone } from 'lucide-react';

interface CountryCode {
  name: string;
  code: string;
  dialCode: string;
}

const COUNTRY_CODES: CountryCode[] = [
  { name: 'United States', code: 'US', dialCode: '+1' },
  { name: 'United Kingdom', code: 'GB', dialCode: '+44' },
  { name: 'Canada', code: 'CA', dialCode: '+1' },
  { name: 'Australia', code: 'AU', dialCode: '+61' },
  { name: 'Germany', code: 'DE', dialCode: '+49' },
  { name: 'France', code: 'FR', dialCode: '+33' },
  { name: 'Italy', code: 'IT', dialCode: '+39' },
  { name: 'Spain', code: 'ES', dialCode: '+34' },
  { name: 'Netherlands', code: 'NL', dialCode: '+31' },
  { name: 'Belgium', code: 'BE', dialCode: '+32' },
  { name: 'Switzerland', code: 'CH', dialCode: '+41' },
  { name: 'Austria', code: 'AT', dialCode: '+43' },
  { name: 'Sweden', code: 'SE', dialCode: '+46' },
  { name: 'Norway', code: 'NO', dialCode: '+47' },
  { name: 'Denmark', code: 'DK', dialCode: '+45' },
  { name: 'Finland', code: 'FI', dialCode: '+358' },
  { name: 'Ireland', code: 'IE', dialCode: '+353' },
  { name: 'Portugal', code: 'PT', dialCode: '+351' },
  { name: 'Poland', code: 'PL', dialCode: '+48' },
  { name: 'Czech Republic', code: 'CZ', dialCode: '+420' },
  { name: 'Hungary', code: 'HU', dialCode: '+36' },
  { name: 'Japan', code: 'JP', dialCode: '+81' },
  { name: 'South Korea', code: 'KR', dialCode: '+82' },
  { name: 'China', code: 'CN', dialCode: '+86' },
  { name: 'India', code: 'IN', dialCode: '+91' },
  { name: 'Singapore', code: 'SG', dialCode: '+65' },
  { name: 'Hong Kong', code: 'HK', dialCode: '+852' },
  { name: 'New Zealand', code: 'NZ', dialCode: '+64' },
  { name: 'Brazil', code: 'BR', dialCode: '+55' },
  { name: 'Mexico', code: 'MX', dialCode: '+52' },
  { name: 'Argentina', code: 'AR', dialCode: '+54' },
  { name: 'Chile', code: 'CL', dialCode: '+56' },
  { name: 'South Africa', code: 'ZA', dialCode: '+27' },
  { name: 'Israel', code: 'IL', dialCode: '+972' },
  { name: 'United Arab Emirates', code: 'AE', dialCode: '+971' },
  { name: 'Saudi Arabia', code: 'SA', dialCode: '+966' },
  { name: 'Turkey', code: 'TR', dialCode: '+90' },
  { name: 'Russia', code: 'RU', dialCode: '+7' },
  { name: 'Ukraine', code: 'UA', dialCode: '+380' },
  { name: 'Romania', code: 'RO', dialCode: '+40' },
  { name: 'Bulgaria', code: 'BG', dialCode: '+359' },
  { name: 'Croatia', code: 'HR', dialCode: '+385' },
  { name: 'Serbia', code: 'RS', dialCode: '+381' },
  { name: 'Slovenia', code: 'SI', dialCode: '+386' },
  { name: 'Slovakia', code: 'SK', dialCode: '+421' },
  { name: 'Lithuania', code: 'LT', dialCode: '+370' },
  { name: 'Latvia', code: 'LV', dialCode: '+371' },
  { name: 'Estonia', code: 'EE', dialCode: '+372' },
  { name: 'Greece', code: 'GR', dialCode: '+30' },
  { name: 'Cyprus', code: 'CY', dialCode: '+357' },
  { name: 'Malta', code: 'MT', dialCode: '+356' },
  { name: 'Luxembourg', code: 'LU', dialCode: '+352' },
  { name: 'Iceland', code: 'IS', dialCode: '+354' },
  { name: 'Thailand', code: 'TH', dialCode: '+66' },
  { name: 'Vietnam', code: 'VN', dialCode: '+84' },
  { name: 'Philippines', code: 'PH', dialCode: '+63' },
  { name: 'Malaysia', code: 'MY', dialCode: '+60' },
  { name: 'Indonesia', code: 'ID', dialCode: '+62' },
  { name: 'Taiwan', code: 'TW', dialCode: '+886' }
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  error?: boolean;
  success?: boolean;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  placeholder = "Enter your phone number",
  className,
  error,
  success
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(COUNTRY_CODES[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredCountries = COUNTRY_CODES.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.dialCode.includes(searchTerm) ||
    country.code.toLowerCase().includes(searchTerm.toLowerCase())
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

  useEffect(() => {
    // Parse existing value to separate country code and phone number
    if (value && value.startsWith('+')) {
      const country = COUNTRY_CODES.find(c => value.startsWith(c.dialCode));
      if (country) {
        setSelectedCountry(country);
        setPhoneNumber(value.substring(country.dialCode.length));
      }
    }
  }, [value]);

  const handleCountrySelect = (country: CountryCode) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchTerm('');
    setFocusedIndex(-1);
    
    // Update the full phone number
    const newValue = phoneNumber ? `${country.dialCode}${phoneNumber}` : country.dialCode;
    onChange(newValue);
  };

  const handlePhoneNumberChange = (newPhoneNumber: string) => {
    // Remove non-numeric characters except spaces and dashes
    const cleaned = newPhoneNumber.replace(/[^\d\s-]/g, '');
    setPhoneNumber(cleaned);
    
    // Update the full phone number
    const newValue = cleaned ? `${selectedCountry.dialCode}${cleaned}` : selectedCountry.dialCode;
    onChange(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex(prev =>
        prev < filteredCountries.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex(prev =>
        prev > 0 ? prev - 1 : filteredCountries.length - 1
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (focusedIndex >= 0 && filteredCountries.length > 0) {
        handleCountrySelect(filteredCountries[focusedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchTerm('');
      setFocusedIndex(-1);
    }
  };

  return (
    <div className={cn("relative", className)}>
      <div className="flex">
        {/* Country Code Dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            type="button"
            className={cn(
              "flex items-center px-3 py-3 border-2 border-r-0 rounded-l-xl cursor-pointer transition-all duration-300",
              "hover:border-usergy-turquoise/50 focus:border-usergy-turquoise focus:ring-4 focus:ring-usergy-turquoise/10",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500/10",
              success && "border-green-500 focus:border-green-500 focus:ring-green-500/10",
              !error && !success && "border-gray-200",
              "min-w-[120px]"
            )}
            onClick={() => {
              setIsOpen(!isOpen);
              if (!isOpen) {
                setTimeout(() => searchInputRef.current?.focus(), 100);
              }
            }}
          >
            <span className="text-sm font-medium text-gray-700 mr-2">
              {selectedCountry.dialCode}
            </span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-gray-400 transition-transform duration-200",
                isOpen && "transform rotate-180"
              )}
            />
          </button>

          {isOpen && (
            <div className="absolute z-[70] w-80 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl max-h-80 overflow-hidden">
              <div className="p-3 border-b border-gray-100">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search countries..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-usergy-turquoise"
                  />
                </div>
              </div>
              
              <div className="max-h-60 overflow-y-auto">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country, index) => (
                    <div
                      key={country.code}
                      className={cn(
                        "px-4 py-3 cursor-pointer transition-colors duration-150 flex items-center justify-between",
                        index === focusedIndex ? "bg-usergy-turquoise/10" : "hover:bg-gray-50",
                        selectedCountry.code === country.code && "bg-usergy-turquoise/5 text-usergy-turquoise font-medium"
                      )}
                      onClick={() => handleCountrySelect(country)}
                      onMouseEnter={() => setFocusedIndex(index)}
                    >
                      <span className="flex-1">{country.name}</span>
                      <span className="text-sm text-gray-500 ml-2">{country.dialCode}</span>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center text-gray-500">
                    No countries found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Phone Number Input */}
        <div className="flex-1 relative">
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e.target.value)}
            placeholder={placeholder}
            className={cn(
              "w-full px-4 py-3 border-2 border-l-0 rounded-r-xl transition-all duration-300",
              "hover:border-usergy-turquoise/50 focus:border-usergy-turquoise focus:ring-4 focus:ring-usergy-turquoise/10 focus:outline-none",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500/10",
              success && "border-green-500 focus:border-green-500 focus:ring-green-500/10",
              !error && !success && "border-gray-200"
            )}
          />
          <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
};