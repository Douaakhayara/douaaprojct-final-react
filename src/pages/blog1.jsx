import React from 'react';
import { useParams } from 'react-router-dom';
import { images } from '../constant/images';

const Blog1 = () => {
    const leftBigItems = [
      { id: 1, image: images.blog, text: "Black Friday Guide: Best Sales & Discount Codes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit..." },
      { id: 2, image: images.blog2, text: "Black Friday Guide: Best Sales & Discount Codes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit..." },
      { id: 3, image: images.blog3, text: "Black Friday Guide: Best Sales & Discount Codes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit..." },
    ];
    const {id}=useParams()
    const product = leftBigItems.filter((e) => e.id == Number(id));
    console.log(product);
    
    return (
        <>
        <div className='bg-gray-100 min-h-screen flex justify-center items-center px-4 pt-30 pb-50'>
            <div className='bg-gray-300 rounded-xl p-6 max-w-md shadow-lg'>
             <img
          src={product[0].image}
          alt="product"
          className="w-full h-[400px] object-cover rounded-lg"
        />
        <p className="mt-4 text-gray-700 text-lg">{product[0].text}</p>
        

            </div>
        </div>
            </>
    );
};

export default Blog1;