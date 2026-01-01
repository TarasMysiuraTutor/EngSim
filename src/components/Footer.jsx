import React from 'react';

const Footer = ({ t }) => {
  return (
    <footer className="py-8 text-center border-t border-blue-500/30 bg-[#0a0e27]/95">
      <p className="text-gray-400">© 2026 {t.footer}</p>
    </footer>
  );
};

export default Footer;