import { useNavigate, Outlet } from "react-router-dom";

export function PublicLayout() {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/products")}>Products</button>
      <Outlet />
    </nav>
  );
}
