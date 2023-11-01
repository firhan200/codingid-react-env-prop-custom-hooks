import { useLocalStorage } from "@uidotdev/usehooks";

export default function LogoutButton() {
  const [cart, setCart] = useLocalStorage("cart", []);

  const handleClick = () => {
    setCart([]);
  };

  return <button onClick={() => handleClick()}>Logout</button>;
}
