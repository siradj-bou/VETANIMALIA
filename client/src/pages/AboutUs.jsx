import React from "react";
import doc from "../photo/imgs/docts.png";
import velu from "../photo/imgs/velu.png";
// import dogy2 from "../photo/imgs/dogy2.png";
import Team from "../photo/imgs/team.png";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <main className="py-6 px-6 max-mx-25 sm:px-6 lg:px-8">
      <section className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12 text-center">
        <div className="sm:w-1/2">
          <img
            src={velu}
            alt="Notre Histoire"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="w-full sm:w-1/2 text-left max-sm:text-center">
          <h2 className="text-[80px] max-lg:text-[60px] max-sm:text-[40px] font-bold text-gray-800 mb-4">
            Notre Histoire
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            VITANIMALIA est né d'une profonde appréciation du lien entre l'homme
            et l'animal et d'un désir de combler le fossé entre les
            connaissances vétérinaires expertes et les soins accessibles aux
            animaux de compagnie. Témoins de la joie qu'apportent les animaux et
            des préoccupations de leurs propriétaires, nous avons créé cette
            plateforme pour offrir une communauté de soutien et des ressources
            fiables pour chaque étape de la vie d'un animal.
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
              Rejoignez-Nous
            </h2>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              Faites partie de la famille VITANIMALIA ! Que vous recherchiez des
              conseils d'experts, que vous souhaitiez vous connecter avec
              d'autres amoureux des animaux ou rester informé des dernières
              nouveautés en matière de soins pour animaux de compagnie, notre
              communauté offre un espace accueillant. Explorez notre blog,
              abonnez-vous à notre newsletter et suivez-nous sur les réseaux
              sociaux pour participer à la conversation et accéder à du contenu
              exclusif.
            </p>
            <div className="flex justify-center items-center space-x-15">
              <Link to="/SignUp">
                <button className="px-12 py-4 bg-black text-white rounded-full hover:bg-orange-900 transition duration-300">
                  Rejoignez-Nous
                </button>
              </Link>  
            </div>
          </div>
        </div>
      </section>

     
    </main>
  );
};

export default AboutUs;
