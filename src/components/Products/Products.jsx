import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../../Features/CartSlice';

const Products = () => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.allCart.items)

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {items.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay || "0"}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color || "N/A"}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating || "N/A"}</span>
                  </div>
                </div>
                <span>Price: {data.price}</span>
                <div>
                  <button className="font-semibold bg-blue-500 w-28 rounded-sm " onClick={()=>dispatch(addtocart(data))} >Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
