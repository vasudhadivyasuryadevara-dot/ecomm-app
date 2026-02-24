import { useNavigate } from "react-router-dom"
import img1 from "../Images/phone1.jpg"
import img2 from "../Images/phone2.jpg"
import img3 from "../Images/phone3.jpg"
import img4 from "../Images/phone4.jpg"
import img5 from "../Images/phone5.jpg"
import img6 from "../Images/phone6.jpg"
import img7 from "../Images/phone7.jpg"
import img8 from "../Images/phone8.jpg"
import img9 from "../Images/phone9.jpg"
import img10 from "../Images/camera.jpg"
import img11 from "../Images/headphone.jpg"
import img12 from "../Images/watch1.jpg"
import Footer from "./Footer"
import Header from "./Header"
function Product(){
    const navigate= useNavigate();
    
    const handleAddToCart = () => {
        const isLoggedIn= localStorage.getItem("isLoggedIn");
        if(isLoggedIn=="true"){
            navigate("/Cart");
        } else{
            alert("please login first");
            navigate("/login");
        }
    }
    return(
        <>
       <Header/>
       <Footer/>
        <div className="products">
            <div className="product">
            <img src={img1} alt="phone1"/>
            <h2>Product 1</h2>
            <p>Rs.60,000</p>
            <button onClick={handleAddToCart}>Add to cart</button>
            </div>
            <div className="product">
            <img src={img2} alt="phone2"/>
            <h2>Product 2</h2>
            <p>Rs.,1,00,000</p>
            <button onClick={handleAddToCart}>Add to cart</button>
            </div>
            <div className="product">
            <img src={img3} alt="phone3"/>
            <h2>Product 3</h2>
            <p>Rs.90,000</p>
            <button onClick={handleAddToCart}>Add to cart</button>
            </div>
            <div className="product">
            <img src={img4} alt="phone4"/>
            <h2>Product 4</h2>
            <p>Rs.30,000</p>
            <button onClick={handleAddToCart}>Add to cart</button>
            </div>
            <div className="product">
            <img src={img5} alt="phone5"/>
            <h2>Product 5</h2>
            <p>Rs.50,000</p>
            <button onClick={handleAddToCart}>Add to cart</button>
            </div>
            <div className="product">
            <img src={img6} alt="phone6"/>
            <h2>Product 6</h2>
            <p>Rs.20,000</p>
            <button onClick={handleAddToCart}>Add to cart</button>
            </div>
             <div className="product">
            <img src={img7} alt="phone7"/>
            <h2>Product 7</h2>
            <p>Rs.20,000</p>
            <button onClick={handleAddToCart}>Add to cart</button>
            </div>
             <div className="product">
            <img src={img8} alt="phone8"/>
            <h2>Product 8</h2>
            <p>Rs.20,000</p>
            <button onClick={handleAddToCart}>Add to cart</button>
            </div>
             <div className="product">
            <img src={img9} alt="phone9"/>
            <h2>Product 9</h2>
            <p>Rs.20,000</p>
            <button onClick={handleAddToCart}>Add to cart</button>
            </div>
            <div className="product">
            <img src={img10} alt="camera.jpg"/>
            <h2>Product 10</h2>
            <p>Rs.20,000</p>
            <button onClick={handleAddToCart}>Add to cart</button>
            </div>
            <div className="product">
            <img src={img11} alt="headphone.jpg"/>
            <h2>Product 11</h2>
            <p>Rs.20,000</p>
            <button onClick={handleAddToCart}>Add to cart</button>
            </div>
            <div className="product">
            <img src={img12} alt="watch1.jpg"/>
            <h2>Product 12</h2>
            <p>Rs.500</p>
            <button onClick={handleAddToCart}>Add to cart</button>
            </div>
        </div>
        <footer/>
        </>
    )
}
export default Product