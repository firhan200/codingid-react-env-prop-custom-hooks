import { useLocalStorage } from "@uidotdev/usehooks";

export default function Cart() {
  const [cart, setCart] = useLocalStorage("cart", []);

  const addToCart = () => {
    setCart([...cart, { id: 1, name: "Product 1" }]);
  };

  return (
    <div>
      <h1>Cart</h1>
      <button onClick={() => addToCart()}>add to cart</button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
