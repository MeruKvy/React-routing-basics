import { useNavigate, Outlet } from "react-router-dom";

export function PublicLayout() {
    const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
      <button onClick={() => navigate("/news")}>News</button>
      <Outlet/>
    </nav>
  );
}
