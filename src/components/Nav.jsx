import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);
  let distinct_category =
    products &&
    products.reduce((acc, product) => [...acc, product.category], []);
  distinct_category = [...new Set(distinct_category)];
  // console.log(distinct_category);

  const color = ()=>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.7)`;
  }
  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <a
        className="py-2 px-5 border rounded border-blue-200 text-blue-300"
        href="/create"
      >
        Add New Product
      </a>
      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl w-[80%] mb-3">Category Filter</h1>
      <div className="w-[80%]">
        {distinct_category.map((category, index) => {
          return (
            <Link
              key={index}
              to={`/?category=${category}`}
              className="flex items-center mb-5"
            >
              <span style={{backgroundColor: color()}} className={`w-[15px] h-[15px] mr-2 rounded-full`}></span>
              {category}
            </Link>
          );
        })}
      </div>
      <a
        className="py-2 px-5 border rounded border-red-600 text-red-600"
        href="/addToCart"
      >
        Cart
      </a>
    </nav>
  );
};

export default Nav;
