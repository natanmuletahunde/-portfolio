import React, { useEffect, useState } from 'react';

const ApiGenerator = () => {
  const [products, setProducts] = useState([]); // State to hold the fetched products
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null);     // State to manage error status

  useEffect(() => {
    // Function to fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data); // Update state with fetched products
      } catch (err) {
        setError(err.message); // Update state with error message
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchProducts(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs once on mount

  // Render loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading products...</p>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-600">Error: {error}</p>
      </div>
    );
  }

  // Render the list of product cards
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={product.images && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/150'}
              alt={product.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-2">${product.price}</p>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiGenerator;
