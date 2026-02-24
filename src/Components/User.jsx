import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>User Dashboard</h1>
      <p>Normal User Page</p>

      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default User;
