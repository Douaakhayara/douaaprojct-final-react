import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../constant/images";

const categories = [
  { name: "Best Seller", count: 8 },
  { name: "Featured", count: 8 },
  { name: "Men", count: 8 },
  { name: "Women", count: 8 },
];

const colors = ["black", "gray", "red"];
const prices = ["0-20", "20-40"];
const sizes = ["L", "M", "S"];

const products = [
  {
    id: 1,
    image: images.shop,
    description: "Elegant and durable, perfect for everyday use.",
  },
  {
    id: 2,
    image: images.shop1,
    description: "Stylish backpack with plenty of space.",
  },
  {
    id: 3,
    image: images.shop2,
    description: "Spacious and lightweight for travel lovers.",
  },
  {
    id: 4,
    image: images.shop3,
    description: "Perfect for evening events and parties.",
  },
  {
    id: 5,
    image: images.shop4,
    description: "Comfortable and trendy for daily errands.",
  },
  {
    id: 6,
    image: images.shop5,
    description: "Compact and convenient for sporty lifestyle.",
  },
];

const Shop = () => {
  
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleCategory = (name) => {
    if (selectedCategory === name) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(name);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex gap-8 pt-30">
      <aside>
        <div>
          <h3 className="font-bold text-lg mb-3">Categories</h3>
          <ul className="space-y-2">
            {categories.map(({ name, count }) => {
              const isSelected = selectedCategory === name;
              return (
                <li
                  key={name}
                  onClick={() => toggleCategory(name)}
                  className={`flex justify-between cursor-pointer ${
                    isSelected
                      ? "text-red-600 font-bold"
                      : "text-gray-500 hover:text-red-400"
                  }`}
                >
                  <span>{name} ({count} items)</span>
                  {isSelected && <span>✔</span>}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Color</h3>
          <ul className="space-y-2">
            {colors.map((color) => (
             <Link to ={"/shop1"}>
              <li
                key={color}
                className="cursor-pointer hover:text-red-600 capitalize"
              >
                <input type="checkbox" id={`color-${color}`} name="color" />
                <label htmlFor={`color-${color}`} className="ml-2">
                  {color}
                </label>
              </li>
             </Link>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Price</h3>
          <ul className="space-y-2">
            {prices.map((price) => (
              <li key={price} className="cursor-pointer hover:text-red-600">
                <input type="checkbox" id={`price-${price}`} name="price" />
                <label htmlFor={`price-${price}`} className="ml-2">
                  $ {price}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Size</h3>
          <ul className="space-y-2">
            {sizes.map((size) => (
             <Link to={"/shop2"}>
              <li key={size} className="cursor-pointer hover:text-red-600">
                <input type="checkbox" id={`size-${size}`} name="size" />
                <label htmlFor={`size-${size}`} className="ml-2">
                  {size}
                </label>
              </li>
             </Link>
            ))}
          </ul>
        </div>
      </aside>

      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(({ id, image, description }) => (
          <Link to={`/detay/${id}`} key={id} className="block">
            <div>
              <img
                src={image}
                alt={`Product ${id}`}
                className="w-[300px] h-[400px] object-cover"
              />
              <div className="flex justify-between bg-white p-2">
                <p className="text-gray-600 max-w-xs">{description}</p>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Shop;
