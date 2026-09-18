import React, { useEffect, useState } from 'react';

interface IntroSplashProps {
  onFinish?: () => void;
}

export const IntroSplash: React.FC<IntroSplashProps> = ({ onFinish }) => {
  const [hide, setHide] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Automatically trigger hide after 2.2s
    const timer = setTimeout(() => {
      setHide(true);
    }, 2200);

    // Remove from DOM completely after transition (1s)
    const removeTimer = setTimeout(() => {
      setRemoved(true);
      if (onFinish) onFinish();
    }, 3200);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  if (removed) return null;

  return (
    <div
      id="ayn-intro-overlay"
      className={`intro ${hide ? 'hide' : ''}`}
      onClick={() => {
        setHide(true);
        setTimeout(() => {
          setRemoved(true);
          if (onFinish) onFinish();
        }, 800);
      }}
      title="اضغط للتخطي"
      role="banner"
    >
      <div className="intro-glow"></div>
      <div className="intro-brand">
        <span className="block text-3xl md:text-4xl tracking-widest font-serif text-[#c5a059] mb-1">
          عَـيـن هَـاب
        </span>
        <span className="block text-xs md:text-sm font-sans uppercase tracking-[0.45em] text-[#a8abad]">
          AYN HUB • LUXURY PERFUMERY
        </span>
      </div>
      <div className="intro-line"></div>
      <button 
        type="button" 
        className="mt-8 text-xs text-[#a8abad] hover:text-[#c5a059] transition-colors tracking-widest uppercase cursor-pointer"
        aria-label="تخطي المقدمة"
      >
        [ تخطي المقدمة ]
      </button>
    </div>
  );
};
