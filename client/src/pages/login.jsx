import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import RegisterImage from '../photo/imgs/register2.jpg';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {t('login.title')}
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            {t('login.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Login Form */}
            <div className="w-full lg:w-1/2 p-8 sm:p-12">
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {t('login.welcome')}
                </h3>
                
                <div className="flex items-center my-6">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-4 text-gray-500">ou</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('login.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="votre@email.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('login.password')}
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-orange-400 focus:ring-orange-400 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        {t('login.remember')}
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-orange-400 hover:bg-orange-500 text-white font-medium py-3 px-4 rounded-lg shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                  >
                    {t('login.login')}
                  </button>
                </form>
                
                <div className="mt-6 text-center text-sm text-gray-600">
                  {t('login.no_account')}{' '}
                  <Link to="/signup" className="font-medium text-orange-400 hover:text-orange-500">
                    {t('login.signup')}
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="hidden lg:block lg:w-1/2 bg-orange-50">
              <img
                src={RegisterImage}
                alt="Animal de compagnie"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;