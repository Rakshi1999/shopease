"use client";
import { useState } from "react";

export default function AddProductsPage() {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    rate: "",
    count: "",
  });
  const [images, setImages] = useState<File[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    // images.forEach((image) => formData.append("images", image));
    // Object.entries(product).forEach(([key, value]) => {
    //   formData.append(key, value);
    // });

    product["image"] = ["https://i.pravatar.cc/300"];

    console.log(product);

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      alert("Product added successfully!");
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <div className="text-black max-w-full mx-auto bg-white p-8">
      <h1 className="text-indigo-600 text-2xl font-bold mb-6">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter product title"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter product description"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter product price"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter product category"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Rating</label>
          <input
            type="number"
            step="0.1"
            name="rate"
            value={product.rate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter product rating"
          />
        </div>
        <div>
          <label className="block text-gray-700">Stock Count</label>
          <input
            type="number"
            name="count"
            value={product.count}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter stock count"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
