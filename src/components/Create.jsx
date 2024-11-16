import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      description.trim().length < 5 ||
      price.trim().length < 1
    ) {
      alert("No field must be empty! , please Enter atleast 4 characters...");
      return;
    }

    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setProducts([...products, product]);
    localStorage.setItem("products",JSON.stringify([...products, product]) );
    navigate("/")
    // toast.success("New Product Added!");
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="p-[5%] w-screen h-screen flex flex-col items-center"
    >
      <h1 className="w-1/2 text-3xl font-bold mb-4">Add New Products</h1>
      <input
        type="url"
        placeholder="Image Link"
        className="text-2xl mb-3 bg-zinc-100 rounded-md border w-1/2 p-3"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="Title"
        className="text-2xl mb-3 bg-zinc-100 rounded-md border w-1/2 p-3"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex gap-6">
        <input
          type="text"
          placeholder="Category"
          className="text-2xl mb-3 bg-zinc-100 rounded-md border w-1/2 p-3"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="Price"
          className="text-2xl mb-3 bg-zinc-100 rounded-md border w-1/2 p-3"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        className="text-2xl bg-zinc-100 rounded p-3 mb-3 w-1/2"
        name=""
        id=""
        rows="8"
        placeholder="Enter Product Description Here..."
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <div className="w-1/2">
        <button className="hover:scale-110 py-2 px-5 border rounded bg-blue-100 border-blue-600 text-blue-600">
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
