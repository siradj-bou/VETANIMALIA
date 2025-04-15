import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import Dog from "../photo/imgs/Dog.png";

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Contactez-nous
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informations du cabinet</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaMapMarkerAlt className="h-6 w-6 text-orange-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Adresse</h4>
                    <p className="mt-1 text-gray-600">
                      Unité médicale 17 Ali Mendjeli<br />
                      Constantine, Algérie
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaPhone className="h-6 w-6 text-orange-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Téléphone</h4>
                    <p className="mt-1 text-gray-600">0770807185</p>
                    <p className="mt-1 text-gray-600">Urgences 24h/24</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaClock className="h-6 w-6 text-orange-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Horaires d'ouverture</h4>
                    <p className="mt-1 text-gray-600">
                      Lundi - Vendredi: 8h00 - 19h00<br />
                      Samedi: 9h00 - 17h00<br />
                      Dimanche: Urgences seulement
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaEnvelope className="h-6 w-6 text-orange-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <p className="mt-1 text-gray-600">contact@vetanimalia.dz</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-orange-400">
                    <FaFacebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-400">
                    <FaInstagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-400">
                    <FaTiktok className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Localisation</h3>
              <div className="relative pb-3/4 h-96 rounded-lg overflow-hidden">
                <iframe
                  title="Localisation du cabinet VETANIMALIA"
                  src="https://maps.google.com/maps?q=ali+mendjeli+UV17+vetanimalia&output=embed"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="mt-6 flex items-center">
                <img
                  src={Dog}
                  alt="Dr. Rabah Guitouni"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Dr. Ilyes Zitouni</h4>
                  <p className="text-gray-600">Vétérinaire principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="bg-orange-400 rounded-xl shadow-lg p-6 text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-2">Service d'urgence 24h/24</h3>
          <p className="text-white text-lg">
            En cas d'urgence, appelez-nous directement au <span className="font-bold">0770807185</span>
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-400 focus:border-orange-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-400 focus:border-orange-400"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Sujet</label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-400 focus:border-orange-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-400 focus:border-orange-400"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;