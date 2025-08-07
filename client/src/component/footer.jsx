import React, { useState } from 'react';
import { FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  return (
    <div>
      <footer className="bg-white p-8">
        <div className="text-center space-y-6">
          {/* Social Media Links */}
          <div className="flex justify-center gap-6">
            <FaFacebook size={30} className="text-blue-500 cursor-pointer hover:scale-110 transition-transform" />
            <FaTiktok size={30} className="text-black cursor-pointer hover:scale-110 transition-transform" />
            <FaInstagram size={30} className="text-pink-500 cursor-pointer hover:scale-110 transition-transform" />
          </div>

          {/* Email Subscription */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">{t('footer.mailbox')}</label>
            <div className="flex justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.placeholder')}
                className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button className="bg-orange-500 text-white px-4 rounded-r hover:bg-orange-600 transition">
                {t('footer.submit')}
              </button>
            </div>
          </div>

          {/* Footer Text */}
          <p className="text-gray-500 text-sm">{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;