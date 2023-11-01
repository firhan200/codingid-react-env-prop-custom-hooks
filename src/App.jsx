import { useIdle } from "@uidotdev/usehooks";
import Cart from "./components/Cart";
import LogoutButton from "./components/LogoutButton";

export default function App() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const idle = useIdle(3000);

  if (idle) {
    return <h1>You are idle</h1>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {apiUrl}
      <LogoutButton />
      <Cart />
    </div>
  );
}
