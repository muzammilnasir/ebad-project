import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchApi } from "../redux/slice/cartSlice";
import { toast } from "react-toastify";
import axios from "axios";
import { nanoid } from "nanoid";

function AddProduct() {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Generate a unique ID for local storage
    const productWithId = { ...newProduct, id: nanoid() };

    // Add new product to localStorage first
    try {
      let products = JSON.parse(localStorage.getItem("products")) || [];
      products.push(productWithId);
      localStorage.setItem("products", JSON.stringify(products));
  
      // Refetch products to update the UI
      dispatch(fetchApi());
  
      toast.success("Product added successfully");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to add product");
    }
  
    // Clear form fields
    setNewProduct({ title: "", price: "", description: "", image: "", category: "" });
  };  
  
  return (
    <div className="bg-gray-200 h-[300px] pt-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={newProduct.title}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newProduct.category}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
