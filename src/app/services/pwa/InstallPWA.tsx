"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/app/contexts/ThemeContext";

// Interface para o BeforeInstallPromptEvent
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
}

const InstallPWA: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handler as EventListener);

    const isInstalled = window.matchMedia('(display-mode: standalone)').matches;
    if (isInstalled) {
      setShowInstallButton(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler as EventListener);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        setShowInstallButton(false);
      }
    } catch (err) {
      console.error('Erro ao instalar:', err);
    }

    setDeferredPrompt(null);
  };

  if (!showInstallButton) return null;

  return (
    <div className={`fixed bottom-4 left-4 right-4 p-4 rounded-lg shadow-lg z-50 md:hidden ${
      theme === 'black' ? 'bg-neutral text-white' : 'bg-base-100 text-black'
    }`}>
      <div className="flex flex-col items-center gap-2">
        <p className="text-center">Instale o app do Rafael Riello BJJ para um acesso mais rápido!</p>
        <button
          onClick={handleInstallClick}
          className="btn btn-primary"
        >
          Instalar App
        </button>
      </div>
    </div>
  );
};

export default InstallPWA;
