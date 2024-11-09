"use client";

import React, { useEffect } from "react";

const ServiceWorkerRegistration: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registrado com sucesso:', registration);
        })
        .catch((error) => {
          console.error('Erro ao registrar Service Worker:', error);
        });
    }
  }, []);

  return null;
};

export default ServiceWorkerRegistration; 