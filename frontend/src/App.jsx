import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch("http://35.179.176.115:30050/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1>🛒 Zuri Market</h1>
      <p>Simple Online Store Demo</p>

      <h3>Cart Items: {cartCount}</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h4>${product.price}</h4>

            <button
              onClick={addToCart}
              style={{
                padding: "10px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;