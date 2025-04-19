import React from 'react';
import animal from '../photo/service/ced.avif';
import animal2 from '../photo/service/chur.jpg';
import radio from '../photo/imgs/radio.jpg';
import alimentation from '../photo/imgs/alimentation.jpg';
import vaccination from '../photo/imgs/vaccination.jpg';
import garde from '../photo/imgs/garde.jpg';
import deta from '../photo/imgs/detartrage.jpg';

const OurServices = () => {
  const services = [
    {
      category: 'Consultation et Diagnostic',
      items: [
        'Réalisation d\'examens physiques approfondis pour détecter les problèmes de santé des animaux.',
        'Analyse clinique et évaluation des symptômes pour un diagnostic précis.',
        'Conseils personnalisés pour les traitements et le suivi médical adaptés.',
      ],
      image: animal,
      hasButton: false
    },
    {
      category: 'Chirurgie et Soins',
      items: [
        'Interventions chirurgicales, allant des procédures mineures aux opérations complexes.',
        'Soins postopératoires pour une récupération rapide et efficace.',
        'Surveillance et gestion des douleurs pour garantir le bien-être des animaux.',
      ],
      image: animal2,
      hasButton: false
    },
    {
      category: 'Radiographie et Échographie',
      items: [
        ' Radiographies pour détecter les blessures internes ou les anomalies.',
        'Échographies utilisées pour examiner les organes et tissus internes.',
        'Méthodes non invasives offrant des résultats fiables.',
      ],
      image: radio,
      hasButton: false
    },
    {
      category: 'Alimentation et Accessoires',
      items: [
        ' Fourniture d\'aliments adaptés aux besoins nutritionnels spécifiques.',
        'Accessoires de qualité tels que jouets, colliers et laisses.',
        'Conseils personnalisés pour le bien-être quotidien des animaux.',
      ],
      image: alimentation,
      hasButton: false
    },
    {
      category: 'Vaccination et Puce Électronique',
      items: [
        'Vaccins pour prévenir les maladies infectieuses et évitables.',
        'Implantation de puces électroniques pour identifier les animaux en toute sécurité.',
        'Suivi et conseils pour maintenir la santé préventive.',
      ],
      image: vaccination,
      hasButton: false
    },
    {
      category: 'Hospitalisation et Gardiennage',
      items: [
        'Services d\'hospitalisation avec soins intensifs et surveillance vétérinaire.',
        'Hébergement confortable pour les animaux en convalescence.',
        'Gardiennage personnalisé en l\'absence des propriétaires.',
      ],
      image: garde,
      hasButton: false
    },
    {
      category: 'Toilettage et Détartrage',
      items: [
        ' Toilettage complet (bain, coupe de poils, nettoyage des oreilles).',
        'Nettoyage dentaire professionnel pour éliminer le tartre et prévenir les maladies buccales.',
        ' Services pour préserver la santé et l\'apparence des animaux.',
      ],
      image: deta,
      hasButton: false
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Nos Services
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Des soins complets et attentionnés pour vos compagnons à quatre pattes
          </p>
        </div>

        {/* Services Grid - 3 columns */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 
              hover:shadow-xl hover:-translate-y-1 flex flex-col h-full w-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.category} image`}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.category}
                </h3>
                <ul className="space-y-3 text-gray-600">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="bg-orange-400 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          {/* <button className="inline-flex items-center px-6 py-3 border border-transparent
           text-base font-medium rounded-md shadow-sm text-white bg-orange-400 hover:bg-orange-500
            transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
             focus:ring-orange-400">
            Découvrir tous nos services
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default OurServices;