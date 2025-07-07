import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, Search } from 'lucide-react';

interface CountryCode {
  country: string;
  code: string;
  dialCode: string;
}

const COUNTRY_CODES: CountryCode[] = [
  { country: "United States", code: "US", dialCode: "+1" },
  { country: "United Kingdom", code: "GB", dialCode: "+44" },
  { country: "Canada", code: "CA", dialCode: "+1" },
  { country: "Australia", code: "AU", dialCode: "+61" },
  { country: "Germany", code: "DE", dialCode: "+49" },
  { country: "France", code: "FR", dialCode: "+33" },
  { country: "Italy", code: "IT", dialCode: "+39" },
  { country: "Spain", code: "ES", dialCode: "+34" },
  { country: "Netherlands", code: "NL", dialCode: "+31" },
  { country: "Switzerland", code: "CH", dialCode: "+41" },
  { country: "Sweden", code: "SE", dialCode: "+46" },
  { country: "Norway", code: "NO", dialCode: "+47" },
  { country: "Denmark", code: "DK", dialCode: "+45" },
  { country: "Finland", code: "FI", dialCode: "+358" },
  { country: "Belgium", code: "BE", dialCode: "+32" },
  { country: "Austria", code: "AT", dialCode: "+43" },
  { country: "Portugal", code: "PT", dialCode: "+351" },
  { country: "Greece", code: "GR", dialCode: "+30" },
  { country: "Poland", code: "PL", dialCode: "+48" },
  { country: "Czech Republic", code: "CZ", dialCode: "+420" },
  { country: "Hungary", code: "HU", dialCode: "+36" },
  { country: "Romania", code: "RO", dialCode: "+40" },
  { country: "Bulgaria", code: "BG", dialCode: "+359" },
  { country: "Croatia", code: "HR", dialCode: "+385" },
  { country: "Slovenia", code: "SI", dialCode: "+386" },
  { country: "Slovakia", code: "SK", dialCode: "+421" },
  { country: "Lithuania", code: "LT", dialCode: "+370" },
  { country: "Latvia", code: "LV", dialCode: "+371" },
  { country: "Estonia", code: "EE", dialCode: "+372" },
  { country: "Ireland", code: "IE", dialCode: "+353" },
  { country: "Luxembourg", code: "LU", dialCode: "+352" },
  { country: "Malta", code: "MT", dialCode: "+356" },
  { country: "Cyprus", code: "CY", dialCode: "+357" },
  { country: "Japan", code: "JP", dialCode: "+81" },
  { country: "South Korea", code: "KR", dialCode: "+82" },
  { country: "China", code: "CN", dialCode: "+86" },
  { country: "Hong Kong", code: "HK", dialCode: "+852" },
  { country: "Singapore", code: "SG", dialCode: "+65" },
  { country: "Taiwan", code: "TW", dialCode: "+886" },
  { country: "India", code: "IN", dialCode: "+91" },
  { country: "Pakistan", code: "PK", dialCode: "+92" },
  { country: "Bangladesh", code: "BD", dialCode: "+880" },
  { country: "Sri Lanka", code: "LK", dialCode: "+94" },
  { country: "Nepal", code: "NP", dialCode: "+977" },
  { country: "Maldives", code: "MV", dialCode: "+960" },
  { country: "Thailand", code: "TH", dialCode: "+66" },
  { country: "Vietnam", code: "VN", dialCode: "+84" },
  { country: "Malaysia", code: "MY", dialCode: "+60" },
  { country: "Indonesia", code: "ID", dialCode: "+62" },
  { country: "Philippines", code: "PH", dialCode: "+63" },
  { country: "Myanmar", code: "MM", dialCode: "+95" },
  { country: "Cambodia", code: "KH", dialCode: "+855" },
  { country: "Laos", code: "LA", dialCode: "+856" },
  { country: "Brunei", code: "BN", dialCode: "+673" },
  { country: "New Zealand", code: "NZ", dialCode: "+64" },
  { country: "Fiji", code: "FJ", dialCode: "+679" },
  { country: "Papua New Guinea", code: "PG", dialCode: "+675" },
  { country: "Russia", code: "RU", dialCode: "+7" },
  { country: "Ukraine", code: "UA", dialCode: "+380" },
  { country: "Belarus", code: "BY", dialCode: "+375" },
  { country: "Moldova", code: "MD", dialCode: "+373" },
  { country: "Kazakhstan", code: "KZ", dialCode: "+7" },
  { country: "Uzbekistan", code: "UZ", dialCode: "+998" },
  { country: "Kyrgyzstan", code: "KG", dialCode: "+996" },
  { country: "Tajikistan", code: "TJ", dialCode: "+992" },
  { country: "Turkmenistan", code: "TM", dialCode: "+993" },
  { country: "Georgia", code: "GE", dialCode: "+995" },
  { country: "Armenia", code: "AM", dialCode: "+374" },
  { country: "Azerbaijan", code: "AZ", dialCode: "+994" },
  { country: "Turkey", code: "TR", dialCode: "+90" },
  { country: "Israel", code: "IL", dialCode: "+972" },
  { country: "Palestine", code: "PS", dialCode: "+970" },
  { country: "Lebanon", code: "LB", dialCode: "+961" },
  { country: "Syria", code: "SY", dialCode: "+963" },
  { country: "Jordan", code: "JO", dialCode: "+962" },
  { country: "Iraq", code: "IQ", dialCode: "+964" },
  { country: "Iran", code: "IR", dialCode: "+98" },
  { country: "Afghanistan", code: "AF", dialCode: "+93" },
  { country: "Saudi Arabia", code: "SA", dialCode: "+966" },
  { country: "United Arab Emirates", code: "AE", dialCode: "+971" },
  { country: "Qatar", code: "QA", dialCode: "+974" },
  { country: "Kuwait", code: "KW", dialCode: "+965" },
  { country: "Bahrain", code: "BH", dialCode: "+973" },
  { country: "Oman", code: "OM", dialCode: "+968" },
  { country: "Yemen", code: "YE", dialCode: "+967" },
  { country: "Egypt", code: "EG", dialCode: "+20" },
  { country: "Libya", code: "LY", dialCode: "+218" },
  { country: "Tunisia", code: "TN", dialCode: "+216" },
  { country: "Algeria", code: "DZ", dialCode: "+213" },
  { country: "Morocco", code: "MA", dialCode: "+212" },
  { country: "Sudan", code: "SD", dialCode: "+249" },
  { country: "South Sudan", code: "SS", dialCode: "+211" },
  { country: "Ethiopia", code: "ET", dialCode: "+251" },
  { country: "Kenya", code: "KE", dialCode: "+254" },
  { country: "Uganda", code: "UG", dialCode: "+256" },
  { country: "Tanzania", code: "TZ", dialCode: "+255" },
  { country: "Rwanda", code: "RW", dialCode: "+250" },
  { country: "Burundi", code: "BI", dialCode: "+257" },
  { country: "Somalia", code: "SO", dialCode: "+252" },
  { country: "Djibouti", code: "DJ", dialCode: "+253" },
  { country: "Eritrea", code: "ER", dialCode: "+291" },
  { country: "Madagascar", code: "MG", dialCode: "+261" },
  { country: "Mauritius", code: "MU", dialCode: "+230" },
  { country: "Seychelles", code: "SC", dialCode: "+248" },
  { country: "Comoros", code: "KM", dialCode: "+269" },
  { country: "South Africa", code: "ZA", dialCode: "+27" },
  { country: "Namibia", code: "NA", dialCode: "+264" },
  { country: "Botswana", code: "BW", dialCode: "+267" },
  { country: "Zimbabwe", code: "ZW", dialCode: "+263" },
  { country: "Zambia", code: "ZM", dialCode: "+260" },
  { country: "Malawi", code: "MW", dialCode: "+265" },
  { country: "Mozambique", code: "MZ", dialCode: "+258" },
  { country: "Eswatini", code: "SZ", dialCode: "+268" },
  { country: "Lesotho", code: "LS", dialCode: "+266" },
  { country: "Angola", code: "AO", dialCode: "+244" },
  { country: "Democratic Republic of the Congo", code: "CD", dialCode: "+243" },
  { country: "Republic of the Congo", code: "CG", dialCode: "+242" },
  { country: "Central African Republic", code: "CF", dialCode: "+236" },
  { country: "Chad", code: "TD", dialCode: "+235" },
  { country: "Cameroon", code: "CM", dialCode: "+237" },
  { country: "Equatorial Guinea", code: "GQ", dialCode: "+240" },
  { country: "Gabon", code: "GA", dialCode: "+241" },
  { country: "São Tomé and Príncipe", code: "ST", dialCode: "+239" },
  { country: "Cape Verde", code: "CV", dialCode: "+238" },
  { country: "Guinea-Bissau", code: "GW", dialCode: "+245" },
  { country: "Guinea", code: "GN", dialCode: "+224" },
  { country: "Sierra Leone", code: "SL", dialCode: "+232" },
  { country: "Liberia", code: "LR", dialCode: "+231" },
  { country: "Côte d'Ivoire", code: "CI", dialCode: "+225" },
  { country: "Ghana", code: "GH", dialCode: "+233" },
  { country: "Togo", code: "TG", dialCode: "+228" },
  { country: "Benin", code: "BJ", dialCode: "+229" },
  { country: "Nigeria", code: "NG", dialCode: "+234" },
  { country: "Niger", code: "NE", dialCode: "+227" },
  { country: "Burkina Faso", code: "BF", dialCode: "+226" },
  { country: "Mali", code: "ML", dialCode: "+223" },
  { country: "Senegal", code: "SN", dialCode: "+221" },
  { country: "Gambia", code: "GM", dialCode: "+220" },
  { country: "Mauritania", code: "MR", dialCode: "+222" },
  { country: "Brazil", code: "BR", dialCode: "+55" },
  { country: "Argentina", code: "AR", dialCode: "+54" },
  { country: "Chile", code: "CL", dialCode: "+56" },
  { country: "Colombia", code: "CO", dialCode: "+57" },
  { country: "Peru", code: "PE", dialCode: "+51" },
  { country: "Venezuela", code: "VE", dialCode: "+58" },
  { country: "Ecuador", code: "EC", dialCode: "+593" },
  { country: "Bolivia", code: "BO", dialCode: "+591" },
  { country: "Paraguay", code: "PY", dialCode: "+595" },
  { country: "Uruguay", code: "UY", dialCode: "+598" },
  { country: "Guyana", code: "GY", dialCode: "+592" },
  { country: "Suriname", code: "SR", dialCode: "+597" },
  { country: "French Guiana", code: "GF", dialCode: "+594" },
  { country: "Mexico", code: "MX", dialCode: "+52" },
  { country: "Guatemala", code: "GT", dialCode: "+502" },
  { country: "Belize", code: "BZ", dialCode: "+501" },
  { country: "El Salvador", code: "SV", dialCode: "+503" },
  { country: "Honduras", code: "HN", dialCode: "+504" },
  { country: "Nicaragua", code: "NI", dialCode: "+505" },
  { country: "Costa Rica", code: "CR", dialCode: "+506" },
  { country: "Panama", code: "PA", dialCode: "+507" },
  { country: "Cuba", code: "CU", dialCode: "+53" },
  { country: "Jamaica", code: "JM", dialCode: "+1" },
  { country: "Haiti", code: "HT", dialCode: "+509" },
  { country: "Dominican Republic", code: "DO", dialCode: "+1" },
  { country: "Puerto Rico", code: "PR", dialCode: "+1" },
  { country: "Trinidad and Tobago", code: "TT", dialCode: "+1" },
  { country: "Barbados", code: "BB", dialCode: "+1" },
  { country: "Saint Lucia", code: "LC", dialCode: "+1" },
  { country: "Grenada", code: "GD", dialCode: "+1" },
  { country: "Saint Vincent and the Grenadines", code: "VC", dialCode: "+1" },
  { country: "Antigua and Barbuda", code: "AG", dialCode: "+1" },
  { country: "Dominica", code: "DM", dialCode: "+1" },
  { country: "Saint Kitts and Nevis", code: "KN", dialCode: "+1" },
  { country: "Bahamas", code: "BS", dialCode: "+1" }
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  countryCode: string;
  onCountryCodeChange: (code: string) => void;
  placeholder?: string;
  className?: string;
  error?: boolean;
  required?: boolean;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  countryCode,
  onCountryCodeChange,
  placeholder = "Phone number",
  className,
  error,
  required
}) => {
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedCountry = COUNTRY_CODES.find(c => c.dialCode === countryCode) || COUNTRY_CODES[0];

  const filteredCountries = COUNTRY_CODES.filter(country =>
    country.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.dialCode.includes(searchTerm) ||
    country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
        setSearchTerm('');
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCountrySelect = (country: CountryCode) => {
    onCountryCodeChange(country.dialCode);
    setIsCountryDropdownOpen(false);
    setSearchTerm('');
    setFocusedIndex(-1);
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
      setIsCountryDropdownOpen(false);
      setSearchTerm('');
      setFocusedIndex(-1);
    }
  };

  return (
    <div className={cn("relative", className)}>
      <div className="flex">
        {/* Country Code Dropdown */}
        <div ref={dropdownRef} className="relative">
          <div
            className={cn(
              "flex items-center px-3 py-3 border-2 border-r-0 rounded-l-xl cursor-pointer transition-all duration-300",
              "hover:border-usergy-turquoise/50 focus-within:border-usergy-turquoise focus-within:ring-4 focus-within:ring-usergy-turquoise/10",
              error && "border-red-500 focus-within:border-red-500 focus-within:ring-red-500/10",
              !error && "border-gray-200",
              "bg-gray-50"
            )}
            onClick={() => {
              setIsCountryDropdownOpen(!isCountryDropdownOpen);
              if (!isCountryDropdownOpen) {
                setTimeout(() => searchInputRef.current?.focus(), 100);
              }
            }}
          >
            <span className="text-sm font-medium text-gray-700 mr-1">
              {selectedCountry.dialCode}
            </span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-gray-400 transition-transform duration-200",
                isCountryDropdownOpen && "transform rotate-180"
              )}
            />
          </div>

          {isCountryDropdownOpen && (
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
                        countryCode === country.dialCode && "bg-usergy-turquoise/5 text-usergy-turquoise"
                      )}
                      onClick={() => handleCountrySelect(country)}
                      onMouseEnter={() => setFocusedIndex(index)}
                    >
                      <span className="text-sm">{country.country}</span>
                      <span className="text-sm font-medium text-gray-600">{country.dialCode}</span>
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
        <input
          type="tel"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "flex-1 px-4 py-3 border-2 border-l-0 rounded-r-xl transition-all duration-300",
            "hover:border-usergy-turquoise/50 focus:border-usergy-turquoise focus:ring-4 focus:ring-usergy-turquoise/10 focus:outline-none",
            "placeholder:text-gray-500 placeholder:opacity-60",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/10",
            !error && "border-gray-200"
          )}
          required={required}
        />
      </div>
    </div>
  );
};