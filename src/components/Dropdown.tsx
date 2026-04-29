import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: any) => void;
  label?: React.ReactNode;
  align?: 'left' | 'right';
  id?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ 
  options, 
  value, 
  onChange, 
  label, 
  align = 'right',
  id
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef} id={id}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onMouseDown={(e) => e.stopPropagation()}
        className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl transition-all font-bold text-xs uppercase tracking-wider shadow-sm border border-slate-200 dark:border-slate-700"
      >
        {label || (
          <>
            {selectedOption?.icon}
            <span>{selectedOption?.label}</span>
          </>
        )}
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`absolute z-50 mt-2 min-w-[140px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl overflow-hidden ${align === 'right' ? 'right-0' : 'left-0'}`}
          >
            <div className="p-1.5 focus:outline-none">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onMouseDown={(e) => {
                    // Prevent focus loss before click to ensure it fires
                    e.preventDefault();
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-2 w-full px-3 py-2.5 text-left text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    value === option.value
                      ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  {option.icon}
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
