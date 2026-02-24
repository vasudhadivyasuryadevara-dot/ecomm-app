import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear login data (same keys used in Login page)
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <>
      <Header/>
      <div style={{ textAlign: "center", padding: "120px" }}>
        <h2>Logout</h2>
        <p>Are you sure you want to logout?</p>
        <br />
        <button onClick={handleLogout}>Logout</button>
      </div>
      <Footer/>
    </>
  );
}

export default Logout;