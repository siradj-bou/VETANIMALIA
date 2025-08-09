import React, { useState } from "react";
import { FaSearch, FaSlidersH } from "react-icons/fa";
import searchImage from "../photo/products/searchImage.png";

const categories = [
  "All",
  "Doogs",
  "Cats",
  "Parrots",
  "Vitamins",
  "Hamesters",
  "Collars",
  "Bowls",
  "Beds",
  "Treats",
  "Shampoo",
];

const products = [
  {
    id: 1,
    name: "Select, Puppy Food With Chicken, Gluten-Free, 12 Kg",
    price: "135.00 GEL",
    category: "Doogs",
    image: "/dogfood1.png",
  },
  {
    id: 2,
    name: "Select, Dog Food With Lamb, Gluten-Free, 3 Kg",
    price: "48.00 GEL",
    category: "Doogs",
    image: "/dogfood2.png",
  },
  {
    id: 3,
    name: "Select, Puppy Food With Chicken, Gluten-Free, 12 Kg",
    price: "135.00 GEL",
    category: "Doogs",
    image: "/dogfood1.png",
  },
  {
    id: 4,
    name: "Select, Puppy Food With Chicken, Gluten-Free, 12 Kg",
    price: "135.00 GEL",
    category: "Doogs",
    image: "/dogfood3.png",
  },
    {
    id: 2,
    name: "Select, Dog Food With Lamb, Gluten-Free, 3 Kg",
    price: "48.00 GEL",
    category: "Doogs",
    image: "/dogfood2.png",
  },
  {
    id: 3,
    name: "Select, Puppy Food With Chicken, Gluten-Free, 12 Kg",
    price: "135.00 GEL",
    category: "Doogs",
    image: "/dogfood1.png",
  },
  {
    id: 4,
    name: "Select, Puppy Food With Chicken, Gluten-Free, 12 Kg",
    price: "135.00 GEL",
    category: "Doogs",
    image: "/dogfood3.png",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Doogs");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchCategory =
      activeCategory === "All" || product.category === activeCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="max-w-full mx-auto px-6 py-10 flex justify-center flex-col items-center mt-[-100px]" >
      {/* Title & Image */}
      <div className="text-center mb-[-15px]  flex flex-row items-center  justify-center  w-[60%] gap-40 ">
        <h2 className="text-5xl font- tracking-wide text-shadow-sm text-shadow-gray-500  font  font-bold  max-sm:hidden">Our Products</h2>
        <img
          src={searchImage}
          alt="Pets"
          className=" h-69  m-0 mb-[-30px] object-contain "
        />
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-center w-full mb-8">
        <div className="flex items-center bg-orange-400 rounded-full px-5 py-3 w-full max-w-2xl shadow-md">
          <FaSearch className="text-black text-lg mr-3" />
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent outline-none placeholder-white text-white text-sm"
          />
          <div className="border-l border-white pl-3">
            <FaSlidersH className="text-white text-lg cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap items-center justify-center gap-3 border-l-1 ">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1 p-2 rounded-full ml-3 text-sm transition-colors ${
              activeCategory === cat
                ? "bg-orange-400 text-white"
                : " text-black hover:bg-orange-100"
            }`}
          >
            {cat}
          </button>
        ))}
        {/* Arrow button */}
        <button className="bg-orange-400 text-black px-3 text-center text-3xl py-1 rounded-full">
          →
        </button>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-15">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl w-[90%] overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow"
            >
              {/* Product image section */}
              <div className="bg-white flex items-center justify-center p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 object-contain"
                />
              </div>
              {/* Price & Name section */}
              <div className="bg-orange-400 text-black p-4">
                <p className="font-bold text-lg">{product.price}</p>
                <p className="text-sm leading-snug">{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found</p>
      )}
    </div>
  );
}
