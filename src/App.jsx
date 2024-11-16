import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Create from "./components/Create";
import AddToCart from "./components/AddToCart";
import ProceedToCheckOut from "./components/ProceedToCheckOut";

const App = () => {
  const { search , pathname} = useLocation();
  return (
    <div className="h-screen w-screen flex">
      {(search.length != 0 || (pathname !== "undefined" && pathname!= '/' && pathname!= '/proceedToCheckOut') )? <Link
        to="/"
        className="py-2 px-5 rounded border-red-600 text-red-300 absolute left-[17%] top-[3%] border  "
      >
        Home
      </Link> : ""}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />

        <Route path="/details/:id" element={<Details />} />
        <Route path="/addToCart" element={<AddToCart/>}/>
        <Route path="/proceedToCheckOut" element={<ProceedToCheckOut/>}/>
      </Routes>
    </div>
  );
};

export default App;
