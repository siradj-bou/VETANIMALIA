import React from 'react'
import Dog from "../photo/imgs/Dog.png";
import diamon from "../photo/imgs/diamon.png";
import book from "../photo/imgs/book.png";
import grpscan from "../photo/imgs/grpscan.png";
import plus from "../photo/imgs/plus.png";
import vetrine from "../photo/imgs/vetrine.png";
import surger from "../photo/imgs/surger.png";
import therapy from "../photo/imgs/therapy.png";
import med from "../photo/imgs/med.png";
import bigdog from "../photo/imgs/bigdog.png";

const Home = () => {
  const blogCategories = [
    {
      id: 1,
      title: "Aboiements",
      image: "path-to-barking-image.png",
    },
    {
      id: 2,
      title: "Socialisation",
      image: "path-to-socialization-image.png",
    },
    {
      id: 3,
      title: "Nutrition",
      image: "path-to-nutritionology-image.png",
    },
  ];

  const services = [
    {
      id: 3,
      title: "Toilettage",
      description: "Notre service de toilettage professionnel offre des soins complets pour votre animal, incluant bain, coupe de poils, nettoyage des oreilles et soins des griffes. Nos toiletteurs expérimentés utilisent des produits doux et adaptés à chaque type de pelage.",
      buttonText: "En savoir plus",
      color: "bg-[#6A7AFF]",
      image: med,
      btn: "bg-white text-black",
    },
    {
      id: 4,
      title: "Garde diurne",
      description: "Notre service de garderie offre un environnement sécurisé et stimulant pour votre animal lorsque vous êtes absent. Avec des activités adaptées et une surveillance constante, votre compagnon sera entre de bonnes mains toute la journée.",
      buttonText: "En savoir plus",
      color: "bg-[#6A7AFF]",
      btn: "bg-white text-black",
    },
    {
      id: 5,
      title: "Prendre rendez-vous",
      description: "Planifiez une consultation avec nos vétérinaires experts pour un examen complet de votre animal. Nous offrons des soins préventifs, des diagnostics précis et des traitements personnalisés pour toutes les espèces animales.",
      buttonText: "Réserver",
      color: "bg-[#F19A56]",
      btn: "bg-black text-white",
    },
  ];
  
  const services2 = [
    {
      id: 1,
      title: "Chirurgie",
      description: "Notre clinique est équipée pour effectuer diverses interventions chirurgicales, des stérilisations aux opérations plus complexes. Notre équipe chirurgicale qualifiée utilise des techniques modernes et un équipement de pointe pour assurer la sécurité de votre animal.",
      buttonText: "En savoir plus",
      color: "bg-[#6A7AFF]",
      image: surger,
      btn: "bg-white text-black",
    },
    {
      id: 2,
      title: "Soins de santé",
      description: "Nous offrons une gamme complète de services de santé préventive et curative, incluant vaccinations, examens annuels, gestion des maladies chroniques et soins dentaires. Notre approche est holistique et adaptée aux besoins spécifiques de chaque animal.",
      buttonText: "En savoir plus",
      color: "bg-[#6A7AFF]",
      image: therapy,
      btn: "bg-white text-black",
    },
  ];

  const infos = [
    {
      id: 1,
      title: "Notre histoire",
      description: "Fondé en 2010, notre cabinet vétérinaire s'est engagé à fournir des soins exceptionnels aux animaux de compagnie. Notre équipe passionnée travaille chaque jour pour améliorer la santé et le bien-être de vos compagnons.",
      buttonText: "En savoir plus",
      color: "bg-indigo-400",
      img: diamon,
    },
    {
      id: 2,
      title: "Rejoignez-nous",
      description: "Nous sommes une équipe diversifiée de professionnels dévoués. Si vous partagez notre passion pour les soins animaliers, découvrez nos opportunités de carrière et stages disponibles.",
      buttonText: "En savoir plus",
      color: "bg-indigo-400",
      img: book,
    },
    {
      id: 3,
      title: "Notre équipe",
      description: "Rencontrez notre équipe de vétérinaires, techniciens et personnel de soutien. Chaque membre apporte son expertise unique pour offrir les meilleurs soins possibles à vos animaux.",
      buttonText: "En savoir plus",
      color: "bg-indigo-400",
      img: grpscan,
    },
    {
      id: 4,
      title: "Récompenses",
      description: "Notre engagement envers l'excellence a été reconnu par plusieurs distinctions dans le domaine vétérinaire, y compris le Prix d'Excellence en Médecine Animale décerné en 2022.",
      buttonText: "En savoir plus",
      color: "bg-indigo-400",
      img: plus,
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col py-8 sm:py-12 my-0 sm:my-0 sm:flex-row items-center justify-center px-4 sm:px-8 md:px-16 bg-white/95 rounded-3xl space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-16 transition-all duration-300">
        <img
          src={Dog}
          alt="Chien"
          className="w-full max-sm:w-1/2 sm:w-1/2 md:w-2/5 rounded-lg transition-all duration-300 transform hover:scale-105"
        />
    
        <div className="text-center sm:text-left w-full sm:w-1/2 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Cabinet vétérinaire <br /> 
            <span className='text-[#F19A56]'>VETANIMALIA</span>
          </h1>
          
          <div className="space-y-4 text-sm sm:text-base md:text-lg">
            <p className="text-gray-700 font-medium">Dr. Ilyes Kitouni</p>
            <p className="text-gray-600">
              Unité médicale 17 Ali Mendjeli, Constantine
            </p>
            <p className="text-gray-600">0770807185</p>
            <p className="text-gray-600 font-semibold">
              Ouvert 24 heures sur 24
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-8 sm:py-12 mb-4 bg-[#F19A56] text-center flex flex-col items-center rounded-3xl mx-2 sm:mx-8 md:mx-16 mt-6 transition-all duration-300">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-0">
            Bienvenue chez VETANIMALIA
          </h2>
          <img 
            src="avatarss.png" 
            alt="plus" 
            className="rounded-md w-32 sm:w-48 h-auto transition-transform duration-300 hover:scale-110" 
          />
        </div>
      
        <div className="flex flex-col lg:flex-row justify-center w-full gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
          <div className="flex flex-col bg-white p-4 sm:p-6 items-center rounded-3xl shadow-lg w-full lg:w-2/5 transition-all duration-300 hover:shadow-xl">
            <img
              src={vetrine}
              alt="À propos"
              className="w-full h-48 sm:h-56 rounded-md mb-4 object-cover transition-transform duration-500 hover:scale-105"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">À propos de nous</h3>
            <p className="text-gray-600 text-center sm:text-left">
              VetAnimalia est une plateforme dédiée aux amoureux des animaux qui simplifie les soins pour vos compagnons. Nous offrons tout ce dont votre animal a besoin pour une vie saine et heureuse.
            </p>
          </div>
      
          <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {infos.map((info) => (
                <div
                  key={info.id}
                  className={`bg-white p-4 sm:p-6 rounded-3xl shadow-lg w-full min-h-[200px] sm:min-h-[270px] flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mr-3">{info.title}</h2>
                    <img
                      src={info.img}
                      alt={info.title}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-md object-contain transition-transform duration-300 hover:rotate-12"
                    />
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="bg-gray-100 min-h-screen font-serif rounded-3xl px-4 sm:px-6 md:px-8 py-8 transition-all duration-300">
        <header className="flex justify-center text-black text-center py-4 sm:py-6">
          <h1 className="font-light text-3xl sm:text-4xl transition-all duration-300">Nos services</h1>
        </header>
  
        <main className="py-4 sm:py-6">
          {/* First Services Row */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 my-4 sm:my-6">
            {services2.map((service) => (
              <div
                key={service.id}
                className={`flex flex-col sm:flex-row ${service.color} p-4 sm:p-6 shadow-lg rounded-3xl transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="w-full sm:w-2/3 mb-4 sm:mb-0 sm:pr-4">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-white text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="w-full sm:w-1/3 flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-24 h-24 sm:w-32 sm:h-32 object-contain transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </section>
  
          {/* Second Services Row */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-4 sm:my-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`flex flex-col ${service.color} p-4 sm:p-6 shadow-lg rounded-3xl transition-all duration-300 hover:scale-[1.02]`}
              >
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-white text-sm sm:text-base leading-relaxed mb-4">
                  {service.description}
                </p>
                {service.image && (
                  <div className="flex justify-center mt-auto">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-24 h-24 sm:w-32 sm:h-32 object-contain transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                )}
              </div>
            ))}
          </section>
        </main>
  
        {/* Dog Tips Section */}
        <section className="bg-orange-300 flex flex-col sm:flex-row text-center sm:text-left py-6 sm:py-8 px-4 sm:px-6 rounded-3xl my-6 sm:my-8 transition-all duration-300">
          <div className="flex justify-center sm:justify-start mb-4 sm:mb-0 sm:mr-6">
            <img 
              src={bigdog} 
              alt="chien" 
              className="w-20 h-20 sm:w-24 sm:h-24 transition-transform duration-500 hover:scale-110" 
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-2 sm:mb-3">
              Conseils pour vos animaux
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
              Pourquoi les chiens aboient et comment gérer les aboiements excessifs
            </h3>
            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
              Il est normal qu'un chien aboie, tout comme il est normal qu'un enfant parle. Cependant, certains chiens aboient de manière excessive. Si c'est le cas chez vous, la première étape est de comprendre la cause de ces aboiements. Une fois la cause identifiée, vous pourrez commencer à travailler sur ce comportement.
            </p>
          </div>
        </section>
      </div>

      {/* Blog Section */}
      <section className="flex flex-wrap bg-gray-200 text-center py-8 sm:py-12 px-4 sm:px-6 rounded-3xl mx-2 sm:mx-8 md:mx-16 mb-8 sm:mb-12 transition-all duration-300">
        <div className="w-full mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">Blog</h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-700">
            N'oubliez pas de prendre soin de vos animaux !
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full mb-6 sm:mb-8">
          {blogCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-4 sm:p-6 rounded-3xl shadow-lg text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">
                {category.title}
              </h3>
              <div className="w-24 h-24 sm:w-32 sm:h-32 mb-3">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-contain rounded-md transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="w-full sm:w-1/3 mx-auto">
          <img
            src="path-to-cat-image.png"
            alt="chat"
            className="w-full max-w-xs mx-auto rounded-md transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>
    </div>
  )
}

export default Home;