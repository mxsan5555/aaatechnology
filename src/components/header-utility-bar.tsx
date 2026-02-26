import { Phone, Mail, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function HeaderUtilityBar() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "zh", name: "中文", flag: "🇨🇳" }
  ];

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  return (
    <div className="bg-black text-white py-2 px-4">
      <div className="container mx-auto flex justify-end items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <span>info@advanceiot.com</span>
        </div>
        <div 
          className="relative" 
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 hover:text-gray-300 transition-colors"
          >
            <span className="text-lg">{currentLanguage?.flag}</span>
            <span>{currentLanguage?.name}</span>
            <ChevronDown className="h-3 w-3" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-1 bg-background text-foreground border border-border rounded-md shadow-lg z-[9999] min-w-[140px]">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => {
                    setSelectedLanguage(language.code);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full px-3 py-2 text-left hover:bg-gray-100 flex items-center gap-2 first:rounded-t-md last:rounded-b-md"
                >
                  <span className="text-lg">{language.flag}</span>
                  <span>{language.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
