import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, getCartTotal, increment, remove } from '../../Features/CartSlice';
import { Link, useNavigate } from 'react-router-dom';

function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, totalPrice, totalQuantity } = useSelector((state) => state.allCart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cart]);

  const handleRemove = (item) => {
    dispatch(remove(item));
    if (cart.length === 1) {
      navigate('/');
    }
  };

  return (
    <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-8 mt-16">

        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="grid grid-cols-3 items-start gap-4">
              <div className="col-span-2 flex items-start gap-4">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                  <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-bold text-gray-800">{item.title}</h3>
                  <button
                    type="button"
                    className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                    onClick={() => handleRemove(item)}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
              <div className="ml-auto">
                <h4 className="text-lg max-sm:text-base font-bold text-gray-800">${item.price}</h4>
                <div className="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs bg-transparent rounded-md">
                  <button onClick={() => dispatch(decrement(item))} aria-label="Decrease quantity">
                    -
                  </button>
                  <span className="mx-3 font-bold">{item.quantity}</span>
                  <button onClick={() => dispatch(increment(item))} aria-label="Increase quantity">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="bg-gray-100 rounded-md p-4 h-max">
          <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
            Order Summary
          </h3>
          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <span>Total Items:</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Price:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <Link
            // to="/checkout"
            className="block w-full mt-6 text-center bg-blue-600 text-white py-2 rounded-md"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
