import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function Admin() {
  const [products, setProducts] = useState([]);

  const handleLoadProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        const allProducts = res.data.products;

        // remove already deleted products
        const deletedIds =
          JSON.parse(localStorage.getItem("deletedProducts")) || [];

        const filteredProducts = allProducts.filter(
          (p) => !deletedIds.includes(p.id)
        );

        setProducts(filteredProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    // Remove from state
    const updatedProducts = products.filter(
      (product) => product.id !== id
    );
    setProducts(updatedProducts);

    // Save deleted id in localStorage
    const deletedIds =
      JSON.parse(localStorage.getItem("deletedProducts")) || [];

    deletedIds.push(id);

    localStorage.setItem(
      "deletedProducts",
      JSON.stringify(deletedIds)
    );
  };

  return (
    <>
      <Header />

      <div style={{ padding: "40px" }}>
        <h1>Admin Dashboard</h1>

        <button
          onClick={handleLoadProducts}
          style={{
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          Load Products
        </button>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                width: "220px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                width="100"
              />
              <h3>{product.title}</h3>
              <p>₹ {product.price}</p>

              <button
                onClick={() => handleDelete(product.id)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Admin

