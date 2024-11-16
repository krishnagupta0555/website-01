import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddToCart = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    // const [totalPrice , setTotalPrice] = useState(0);
    let productPrice=0;
    {products.map((product,index)=>{
      productPrice += parseFloat(product.price);
    })}


    useEffect(() => {
      // Retrieve CartProducts from localStorage
      const CartProducts = localStorage.getItem("CartProducts");
  
      // If CartProducts exists in localStorage, parse it and update state
      if (CartProducts) {
        const parsedCartProducts = JSON.parse(CartProducts);
        setProducts(parsedCartProducts);
      }
    }, []);

  const CartProductRemoveHandler = (Id) => {
    const FilterProducts = products.filter((p) => p.id != Id);
    setProducts(FilterProducts);
    localStorage.setItem("CartProducts", JSON.stringify(FilterProducts));
    navigate("/addToCart");
  };

  const FinalPageHandle = ()=>{
    return <a href="/proceedToCheckOut"></a>

  }

  return (
    <div className="container mx-auto p-8">
      {/* Cart Heading */}
      <h2 className="text-3xl font-semibold text-center mb-6">Your Cart</h2>

      {/* Cart Items List */}
      <div className="cart-items space-y-6">
        {/* Cart Item 1 */}
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="cart-item flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt="Product 1"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h4 className="text-lg font-medium">{product.title}</h4>
                  <p className="text-sm text-gray-500">${product.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-500">Qty: 1</span>
                <button
                  onClick={() => CartProductRemoveHandler(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Summary */}
      <div className="cart-summary mt-8 bg-white shadow-lg p-6 rounded-md">
        <div className="flex justify-between text-lg font-semibold">
          <span>Subtotal:</span>
          <span>${productPrice}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold mt-4">
          <span>Shipping:</span>
          <span className="text-green-500 font-semibold">Free</span>
        </div>
        <div className="flex justify-between text-xl font-bold mt-4">
          <span>Total:</span>
          <span>${productPrice}</span>
        </div>
        <button onClick={()=>navigate("/proceedToCheckOut")} className="w-full mt-6 bg-blue-500 text-white py-3 rounded-md">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
export default AddToCart;