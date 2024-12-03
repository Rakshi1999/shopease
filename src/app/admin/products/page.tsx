"use client";

import React, { useEffect } from "react";
import ProductView from "../../components/ProductView";

export default function ProductListPage() {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="bg-white w-full min-h-screen font-[sans-serif] p-8 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 className="text-2xl text-indigo-600 font-extrabold mb-12">
        All Listed Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <React.Fragment key={product.uuid}>
            <ProductView product={product} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
