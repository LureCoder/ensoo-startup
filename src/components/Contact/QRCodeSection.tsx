"use client";

import { useState } from "react";
import { t18n } from "@/i18n";
import { useLanguage } from "@/hooks/useLanguage";

const QRCodeSection = () => {
  const language = useLanguage();
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentQRCode, setCurrentQRCode] = useState<string | null>(null);

  const qrCodes = [
    {
      id: 'wechat',
      src: '/images/contact/wechat.JPG',
      title: t18n('contact.qrCode.wechatTitle', language),
      description: t18n('contact.qrCode.wechatDescription', language)
    },
    {
      id: 'whatsapp',
      src: '/images/contact/whatsapp.JPG',
      title: t18n('contact.qrCode.whatsappTitle', language),
      description: t18n('contact.qrCode.whatsappDescription', language)
    }
  ];

  const openLightbox = (src: string) => {
    setCurrentQRCode(src);
    setShowLightbox(true);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-dark/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
            {t18n('contact.qrCode.title', language)}
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark">
            {t18n('contact.qrCode.description', language)}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {qrCodes.map((qrCode) => (
            <div key={qrCode.id} className="text-center">
              <div className="relative cursor-pointer mb-4" onClick={() => openLightbox(qrCode.src)}>
                <img 
                  src={qrCode.src} 
                  alt={qrCode.title} 
                  className="w-48 h-48 object-contain border border-gray-200 rounded-lg shadow-md dark:border-gray-700 transition-transform duration-300 hover:scale-105 mx-auto"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">{t18n('contact.qrCode.clickToEnlarge', language)}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{qrCode.title}</h3>
              <p className="text-sm text-body-color dark:text-body-color-dark">{qrCode.description}</p>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {showLightbox && currentQRCode && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowLightbox(false)}
          >
            <div className="relative max-w-2xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <img 
                src={currentQRCode} 
                alt="QR Code" 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <button 
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors duration-300"
                onClick={() => setShowLightbox(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default QRCodeSection;