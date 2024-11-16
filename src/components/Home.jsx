import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
// import axios from "../utils/Axios";
const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const categoryName = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setFilteredProducts] = useState( null
  );

  // const getProductsCategory = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/category/${categoryName}`);
  //     setFilteredProducts(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  useEffect(() => {
    if (!filteredProducts || categoryName == "undefined")
      setFilteredProducts(products);
    if (categoryName != "undefined") {
      // getProductsCategory();
      setFilteredProducts(products.filter(p=>p.category == categoryName));
    
    }
  }, [categoryName, products]);

  return products ? (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((p, i) => {
            return (
              <Link
                key={i}
                to={`/details/${p.id}`}
                className=" mr-2 mb-3 card p-5 border shadow rounded w-[21%] h-[35vh] flex flex-col justify-center items-center"
              >
                <div
                  className="hover:scale-110 mb-3 w-full h-full bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${p.image})`,
                  }}
                ></div>
                <h1 className="h-[50%] w-full">{p.title}</h1>
              </Link>
            );
          })}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
