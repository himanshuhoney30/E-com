import React, { useState } from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import Img5 from "../../assets/women/women2.jpg";
import Img6 from "../../assets/women/Men1.jpg";
import Img7 from "../../assets/women/Men2.jpeg";
import Img8 from "../../assets/women/men-s.jpeg";
import Img9 from "../../assets/women/s-l400.jpg";
import Img10 from "../../assets/women/Cargo.jpg";
import { FaStar } from "react-icons/fa6";

// Initial ProductsData (for default display)
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
    price: "$100", 
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
    price: "$200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
    price: "$300",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
    price: "$400",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
    price: "$500",
  },
  {
    id: 6,
    img: Img6,
    title: "Mens Jacket",
    rating: 4.5,
    color: "Black",
    aosDelay: "800",
    price: "$600",
  },
  {
    id: 7,
    img: Img7,
    title: "Mens Hoddie",
    rating: 4.5,
    color: "Blue",
    aosDelay: "800",
    price: "$700",
  },
  {
    id: 8,
    img: Img8,
    title: "Mens T-Shirt",
    rating: 4.5,
    color: "White",
    aosDelay: "800",
    price: "$800",
  },
  {
    id: 9,
    img: Img9,
    title: "Mens Shirt",
    rating: 4.5,
    color: "Sky Blue",
    aosDelay: "800",
    price: "$900",
  },
  {
    id: 10,
    img: Img10,
    title: "Mens Cargo",
    rating: 4.5,
    color: "Black",
    aosDelay: "800",
    price: "$1000",
  }
];

const Products = () => {
  const [products, setProducts] = useState(ProductsData);

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
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
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card section */}
            {products.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay || "0"}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.image || data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color || "N/A"}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating || data.rating.rate || "N/A"}</span>
                  </div>
                </div>
                <span>Price:- {data.price || data.price}</span>
                <div>
                  <button className="font-semibold bg-blue-500 w-28 rounded-sm ">Add to Cart</button>
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
