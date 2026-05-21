import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

// Replace with your actual AdSense publisher ID and ad slot after approval
const AD_CLIENT = 'ca-pub-XXXXXXXXXXXXXXXX';
const AD_SLOT = '0000000000';

export function AdBanner() {
  const ref = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current || !ref.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded yet (dev environment)
    }
  }, []);

  return (
    <div className="w-full bg-white/80 dark:bg-slate-900/80 border-t border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm flex items-center justify-center" style={{ minHeight: '60px' }}>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
