import React from 'react';
import { useParams } from 'react-router-dom';

const Blog1 = () => {
    const leftBigItems = [
      { id: 1, image: images.blog, text: "Black Friday Guide: Best Sales & Discount Codes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit..." },
      { id: 2, image: images.blog2, text: "Black Friday Guide: Best Sales & Discount Codes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit..." },
      { id: 3, image: images.blog3, text: "Black Friday Guide: Best Sales & Discount Codes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit..." },
    ];
    const {id}=useParams()
    const product = leftBigItems.find((e) => e.id === Number(id));
    return (
        <div>
            <p>{product.image}</p>
            <p>{product.text}</p>
        </div>
    );
};

export default Blog1;