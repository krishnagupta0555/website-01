import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "../utils/Axios";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";

const Details = () => {
  const [products, setProducts] = useContext(ProductContext);

  const [product, setProduct] = useState(null);
  const { id } = useParams();

  // async function getSingleProduct() {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setProduct(data);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const navigate = useNavigate();

  useEffect(() => {
    if (!product) {
      setProduct(products.filter((p) => p.id == id)[0]);
    }
    // getSingleProduct();
  }, []);

  const AddToCartHandler = (Id) => {
    // Get the existing cart from localStorage (if any)
    const existingCart = JSON.parse(localStorage.getItem('CartProducts')) || [];
  
    // Find the product to add to the cart (assuming 'products' is an array of all products)
    const FilterSingleProduct = products.find((p) => p.id === Id);
    // FilterSingleProduct.quantity++;

    // Add the new product to the existing cart (without replacing previous items)
    const updatedCart = [...existingCart, FilterSingleProduct];
  
    // Store the updated cart back to localStorage
    localStorage.setItem('CartProducts', JSON.stringify(updatedCart));
  };
  

  const ProductDeleteHandler = (Id)=>{
    const FilterProducts = products.filter((p) => p.id != Id);

    setProducts(FilterProducts);
    localStorage.setItem('products',JSON.stringify(FilterProducts));
    navigate('/');


  }

  return product ? (
    <div className=" w-[75%] flex justify-between items-center p-[10%]  h-full m-auto">
      <img
        className="object-contain h-[80%] w-[40%]"
        src={`${product.image}`}
        alt=""
      />
      <div className="content w-[50%]">
        <h1 className="text-4xl">{product.title}</h1>
        <h3 className="text-zinc-400 my-4">{product.category}</h3>
        <h2 className="text-red-600 font-semibold">{`$ ${product.price}`}</h2>
        <p className="text-xs mb-5 mt-1">{product.description}</p>
        <Link onClick={()=> AddToCartHandler(product.id)}
        className="py-2 mr-4 px-5 border rounded border-blue-600 text-blue-300">
        
          Add To Cart
        </Link>
        <button onClick={() => ProductDeleteHandler(product.id)} className="py-2 px-5 border rounded border-red-600 text-red-300">
          Delete
        </button>
        <button
          onClick={() => navigate(-1)}
          className="hover:scale-110 hover:text-zinc-200 bg-blue-500 rounded-md text-white text-3xl px-10 py-2 block mt-8 hover:bg-red-500 "
        >
          Go Back
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
