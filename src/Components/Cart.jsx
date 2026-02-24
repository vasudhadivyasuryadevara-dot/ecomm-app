import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartWithQty = cart.map(item => ({
      ...item,
      quantity: item.quantity || 1
    }));
    setCartItems(cartWithQty);
  }, []);

  // ➕ INCREASE QUANTITY
  const increaseQty = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ➖ DECREASE QUANTITY
  const decreaseQty = (index) => {
    const updatedCart = [...cartItems];

    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  // ❌ DELETE ITEM
  const handleDelete = (indexToDelete) => {
    const updatedCart = cartItems.filter(
      (_, index) => index !== indexToDelete
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // 💰 TOTAL PRICE (with quantity)
  let totalPrice = 0;
  cartItems.forEach(item => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <>
      <Header />

      <div
        style={{
          paddingTop: "120px",
          paddingBottom: "80px",
          textAlign: "center"
        }}
      >
        <h1>Your Cart</h1>

        {cartItems.length === 0 ? (
          <h3>No items in cart</h3>
        ) : (
          <div className="products">
            {cartItems.map((item, index) => (
              <div className="product" key={index}>
                <img src={item.thumbnail} alt={item.title} />
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>

                <div>
                  <button onClick={() => decreaseQty(index)}>-</button>
                  <span style={{ margin: "0 20px" }}>
                    Item count: {item.quantity}
                  </span>
                  <button onClick={() => increaseQty(index)}>+</button>
                </div>

                <button onClick={() => handleDelete(index)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <h1>Totalprice: ${totalPrice.toFixed(2)}</h1>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
