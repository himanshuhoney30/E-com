import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../Features/CartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.allCart.items);

  const [showAllProducts, setShowAllProducts] = useState(false);

  const handleShowAllProducts = () => {
    setShowAllProducts(true);
  };

  const handleClosePopup = () => {
    setShowAllProducts(false);
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto px-4">
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
          {/* Displaying only the first product */}
          {items.length > 0 && (
            <div
              data-aos="fade-up"
              key={items[0].id}
              className="space-y-3 text-center"
            >
              <img
                src={items[0].img}
                alt={items[0].title}
                className="h-[220px] w-[150px] object-cover rounded-md mx-auto"
              />
              <div>
                <h3 className="font-semibold text-lg">{items[0].title}</h3>
                <p className="text-sm text-gray-600">
                  {items[0].color || "N/A"}
                </p>
                <div className="flex justify-center items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{items[0].rating || "N/A"}</span>
                </div>
              </div>
              <span className="block text-lg font-medium">
                Price: ${items[0].price}
              </span>
              <div>
                <button
                  className="font-semibold bg-blue-400 w-32 py-2 rounded hover:bg-blue-600 transition-all"
                  onClick={() => dispatch(addtocart(items[0]))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )}

          {/* Button to open popup */}
          <div className="text-center mt-8">
            <button
              className="font-semibold bg-green-500 px-6 py-2 rounded hover:bg-green-700 transition-all"
              onClick={handleShowAllProducts}
            >
              View All Products
            </button>
          </div>

          {/* Popup Modal */}
          {showAllProducts && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-5 rounded-lg max-w-[95%] md:max-w-[800px] w-full max-h-[90%] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">All Products</h2>
                  <button
                    className="text-red-500 font-bold text-xl"
                    onClick={handleClosePopup}
                  >
                    &times;
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {items.map((data) => (
                    <div
                      key={data.id}
                      className="space-y-3 border p-3 rounded-md"
                    >
                      <img
                        src={data.img}
                        alt={data.title}
                        className="h-[150px] w-full object-cover rounded-md"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{data.title}</h3>
                        <p className="text-sm text-gray-600">
                          {data.color || "N/A"}
                        </p>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-400" />
                          <span>{data.rating || "N/A"}</span>
                        </div>
                      </div>
                      <span className="block text-lg font-medium">
                        Price: ${data.price}
                      </span>
                      <div>
                        <button
                          className="font-semibold bg-blue-400 w-full py-2 rounded hover:bg-blue-600 transition-all"
                          onClick={() => dispatch(addtocart(data))}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
