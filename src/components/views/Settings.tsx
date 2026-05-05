import React from 'react';
import { useAppContext, Theme } from '../../context/AppContext';
import { Language } from '../../i18n';
import { ArrowLeft, Sun, Moon, Monitor, Shield, Info, Palette, Globe } from 'lucide-react';

interface SettingsProps {
  onBack: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onBack }) => {
  const { theme, setTheme, language, setLanguage, t } = useAppContext();

  const themeOptions = [
    { value: 'light' as Theme, label: t('theme-light'), icon: <Sun size={20} />, description: 'Clear and bright interface' },
    { value: 'dark' as Theme, label: t('theme-dark'), icon: <Moon size={20} />, description: 'Easier on the eyes in the dark' },
    { value: 'system' as Theme, label: t('theme-system'), icon: <Monitor size={20} />, description: 'Matches your device settings' },
  ];

  const langOptions = [
    { value: 'en', label: 'English', icon: <span className="text-xl">🇬🇧</span> },
    { value: 'fr', label: 'Français', icon: <span className="text-xl">🇫🇷</span> },
    { value: 'fr-ca', label: 'Français (Québec)', icon: <span className="text-xl">🇨🇦</span> },
    { value: 'es', label: 'Español', icon: <span className="text-xl">🇪🇸</span> },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-slate-900 transition-colors overflow-y-auto">
      <div className="px-6 py-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors text-slate-600 dark:text-slate-400"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
          {t('Settings') || 'Settings'}
        </h1>
      </div>

      <div className="p-6 space-y-8">
        <section>
          <div className="flex items-center gap-2 mb-4 text-slate-400">
            <Palette size={18} />
            <h2 className="text-xs font-bold uppercase tracking-widest">{t('Appearance') || 'Appearance'}</h2>
          </div>
          
          <div className="grid gap-3">
            {themeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setTheme(option.value)}
                className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left ${
                  theme === option.value
                    ? 'border-[#0a9396] bg-[#0a9396]/5 dark:bg-[#0a9396]/10'
                    : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  theme === option.value
                    ? 'bg-[#0a9396] text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}>
                  {option.icon}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-slate-900 dark:text-slate-100">{option.label}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{option.description}</div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4 text-slate-400">
            <Globe size={18} />
            <h2 className="text-xs font-bold uppercase tracking-widest">{t('language') || 'Language'}</h2>
          </div>
          
          <div className="grid gap-3">
            {langOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setLanguage(option.value as Language)}
                className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left ${
                  language === option.value
                    ? 'border-[#0a9396] bg-[#0a9396]/5 dark:bg-[#0a9396]/10'
                    : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  language === option.value
                    ? 'bg-[#0a9396] text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}>
                  {option.icon}
                </div>
                <div className="flex-1 font-bold text-slate-900 dark:text-slate-100">
                  {option.label}
                </div>
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4 text-slate-400">
            <Shield size={18} />
            <h2 className="text-xs font-bold uppercase tracking-widest">{t('Privacy & Data') || 'Privacy & Data'}</h2>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/50">
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
              All your player lists and game history are stored locally on your device. We do not sync or store your personal data on any server.
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4 text-slate-400">
            <Info size={18} />
            <h2 className="text-xs font-bold uppercase tracking-widest">{t('About') || 'About'}</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">{t('Version') || 'Version'}</span>
              <span className="font-mono text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">1.0.5</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">{t('Language Support') || 'Language Support'}</span>
              <span className="font-bold text-slate-900 dark:text-slate-100 uppercase">EN / FR / ES</span>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-auto p-8 text-center bg-slate-50 dark:bg-slate-800/20">
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-bold">Party App © 2024</p>
      </div>
    </div>
  );
};
