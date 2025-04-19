import React from "react";

const services = [
  {
    id: 1,
    title: "Surgery",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
    buttonText: "Read More",
    color: "bg-indigo-400", // Proper Tailwind class for background color
  },
  {
    id: 2,
    title: "Healthcare",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
    buttonText: "Read More",
    color: "bg-indigo-400",
  },
  {
    id: 3,
    title: "Grooming",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
    buttonText: "Read More",
    color: "bg-indigo-400",
  },
  {
    id: 4,
    title: "Daycare",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
    buttonText: "Read More",
    color: "bg-indigo-400",
  },
  {
    id: 5,
    title: "Make a Meet",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
    buttonText: "Book Now",
    color: "bg-orange-400", 
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-serif">
      {/* Header Section */}
      <header className="text-black text-center py-6">
        <h1 className="font-light text-4xl">Our Company Services</h1>
      </header>

      {/* Main Content */}
      <main className="py-12 px-6 flex justify-center items-center">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-screen-xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.color} p-6 shadow-lg rounded-lg text-center transform transition duration-300 hover:scale-105`}
            >
              <h2 className="text-xl font-bold text-gray-100 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-100 mb-4">{service.description}</p>
              <button className="bg-white border-none cursor-pointer text-black font-semibold py-2 px-4 rounded shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">
                {service.buttonText}
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
