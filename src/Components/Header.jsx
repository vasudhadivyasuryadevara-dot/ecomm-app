import { Link, useNavigate } from "react-router-dom"

function Header() {
    const name = localStorage.getItem("username");
    //const navigate = useNavigate();
    //const handleLogout = () => {
      //  localStorage.clear();
        //navigate("/");
    //};
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        localStorage.removeItem("cart");
        Navigate("/");
    };
    return(
        <>
        <header>
            <h1>🛍 KL University Shop</h1>
            <nav>
             <Link to="/">Home</Link>  
             <Link to="/products">Products</Link>
             <Link to="/cart">Cart</Link> 
            
            {name ? <button onClick={handleLogout}>Logout</button> :null}
            </nav>
            {/* <div id="user-display">Welcome, user</div> */}
           
            <div id="user-display">
        {name ?` Welcome, ${name} `: ""}
      </div>
            </header>
            </>
    )
}
export default Header