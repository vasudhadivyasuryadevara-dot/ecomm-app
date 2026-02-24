import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function Products1() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        const allProducts = res.data.products;

        // Get deleted IDs
        const deletedIds =
          JSON.parse(localStorage.getItem("deletedProducts")) || [];

        // Remove deleted products
        const filteredProducts = allProducts.filter(
          (p) => !deletedIds.includes(p.id)
        );

        setProducts(filteredProducts);
      });
  }, []);

  const handleAddToCart = (p) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      const cartData =
        JSON.parse(localStorage.getItem("cart")) || [];

      cartData.push(p);

      localStorage.setItem(
        "cart",
        JSON.stringify(cartData)
      );

      navigate("/cart");
    } else {
      alert("Please login first!");
      navigate("/login");
    }
  };

  return (
    <>
      <Header />

      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "40px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              width: "220px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <img src={p.thumbnail} alt={p.title} width="100" />
            <h3>{p.title}</h3>
            <p>Category: {p.category}</p>
            <p>Price: ${p.price}</p>

            <button
              onClick={() => handleAddToCart(p)}
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "5px 10px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}

export default Products1;
