import React from 'react';

function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-[100]">
      <a href="https://wa.me/79091350119" className="bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center w-14 h-14" title="Chat on WhatsApp">
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>
      <a href="tel:+916206295017" className="bg-blue-700 text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center w-14 h-14 transform rotate-90" title="Call Us Now">
        <i className="fas fa-phone-alt text-2xl"></i>
      </a>
    </div>
  );
}

export default FloatingButtons;