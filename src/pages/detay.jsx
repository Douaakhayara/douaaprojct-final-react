import React from 'react';
import { useParams } from 'react-router-dom';
import { images } from '../constant/images';

const Detay = () => {
    const categoryInfo = [
  { name: "Best Seller", count: 8 },
  { name: "Featured", count: 8 },
  { name: "Men", count: 8 },
  { name: "Women", count: 8 },
];

const colors = ["black","-", "gray","-", "red"];
const prices = ["0-20","-", "20-40"];
const sizes = ["L","-", "M", "-", "S"];

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

  const { id } = useParams();
  const product = products.find((e) => e.id === Number(id));


  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center px-4 pt-30 pb-50">
      <div className="bg-gray-300 rounded-xl p-6 max-w-md shadow-lg ">
        <img
          src={product.image}
          alt="product"
          className="w-full h-[400px] object-cover rounded-lg"
        />
        <p className="mt-4 text-gray-700 text-lg">{product.description}</p>
      {categoryInfo && (
          <div className="mt-4">
            <p className="text-gray-800 font-semibold">
            <span className="text-red-500">{categoryInfo.name}</span>
            </p>
            <p className="text-gray-600">Items in this category: {categoryInfo.count}</p>
            <p> color : {colors}</p>
            <p> price : {prices}</p>
            <p> size : {sizes}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detay;
