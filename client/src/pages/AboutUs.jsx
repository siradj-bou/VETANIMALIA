import React from "react";
import doc from "../photo/imgs/docts.png";
import velu from "../photo/imgs/velu.png";
// import dogy2 from "../photo/imgs/dogy2.png";
import Team from "../photo/imgs/team.jpg";
const AboutUs = () => {
  return (
    <main className="py-6 px-6 max-mx-25 sm:px-6 lg:px-8">
      <section className="flex flex-col sm:flex-row items-center gap-8 mb-12">
        <div className="sm:w-1/2">
          <img
            src={velu}
            alt="Notre Histoire"
            className="w-8/10 h-auto rounded-lg object-cover"
          />
        </div>
        <div className="w-full sm:w-1/2 text-left max-sm:text-center -translate-x-5">
          <h2 className="text-[80px] font-bold text-gray-800 mb-4">
            Notre Histoire
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Mauris commodo lacinia nisl, ut sodales ex vestibulum sed. Sed
            condimentum, nibh vitae dignissim laoreet, ex nisi imperdiet ex, at
            varius magna velit quis purus. Suspendisse at magna congue, rhoncus
            ligula tincidunt, efficitur purus.
          </p>
          <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-orange-900 transition duration-300">
            Lire la suite
          </button>
        </div>
      </section>

      <section className="bg-[#F19A56] pt-10 px-8 rounded-3xl mb-3 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="w-full sm:w-1/2">
            <img
              src={doc}
              alt="Rejoignez la famille SmartCare"
              className="w-full mb-0 h-auto rounded-lg object-cover"
            />
          </div>
          <div className="w-full sm:w-1/2 text-center pb-2">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              Rejoignez la famille SmartCare
            </h2>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              Nous connaissons une croissance rapide et avons de nombreuses opportunités
              d'emploi, dans des rôles cliniques et non cliniques, à travers la Géorgie.
              Si vous envisagez de vous éloigner de la propriété pratique, nous pouvons
              vous aider à protéger l'avenir de votre cabinet et des personnes qui y travaillent.
            </p>
            <div className="flex justify-center items-center space-x-15">
              <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-orange-900 transition duration-300">
                Votre Carrière
              </button>
              <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-orange-900 transition duration-300">
                Votre Cabinet
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 bg-white  rounded-3xl mx-4 sm:mx-16 mb-12">
        <div className="flex-1 mb-6 lg:mb-0 text-center lg:text-left relative">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
            Voir l'équipe SmartCare
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 mb-6">
            En collaboration avec des cabinets, nous prenons soin des personnes,
            de leurs animaux de compagnie et de notre profession, et avons créé
            une culture de chaleur et d'appartenance. Aucun cabinet n'est identique.
            Nous accueillons et encourageons cet esprit indépendant, tout en soutenant
            les cabinets pour offrir des soins exceptionnels aux patients et un service
            excellent aux clients.
          </p>
          <div className="flex justify-center lg:justify-start gap-6">
            <button className="bg-black text-white px-18 py-4 rounded-full shadow-md transform transition-all duration-300 hover:bg-gray-900 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Voir l'équipe
            </button>
          </div>
        </div>

        <div className="flex justify-center w-8/10 lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={Team}
            alt="Équipe SmartCare"
            className="w-8/10 h-auto object-cover rounded-xl  transform transition-all duration-300 hover:scale-105"
          />
        </div>
      </section>
    </main>
  );
};

export default AboutUs;