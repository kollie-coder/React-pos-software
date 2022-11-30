import axios from "axios";
import { useState } from "react";
// import { Link } from "react-router-dom";
import "./productInput.css";

export default function ProductInput() {
  const [id,setId] = useState("");
  const [productName,setProductName] = useState("");
  const [imageUrl,setImageurl] = useState("");
  const [categories,setCategories] = useState("");
  const [price,setPrice] = useState("");
  const [error,setError] = useState(false);

  const handleSubmit = async (e) => {
    setError(false);

    e.preventDefault();
    try{

  const res = await axios.post("http://localhost:5000/inventory/add/", {
    id,
    productName,
    imageUrl,
    categories,
    price,
  });
}catch(err){
  setError(true);
}
};
  
  

  
  return (
    <div className="register">
        <span className="registerTitle">Upload Product</span>
        <form className="registerForm" onSubmit={handleSubmit}>
        <label>Id</label>
        <input type="text"
        required
         className="registerInput"
          placeholder="Enter product id" 
          onChange={e=>setId(e.target.value)}
          
          /> 
        <label>Product Name</label>
        <input type="text"
        required
         className="registerInput"
          placeholder="Product Name" 
          onChange={e=>setProductName(e.target.value)}
         
          />
        <label>Image Url</label>
        <input type="text" 
        required
        className="registerInput" 
        placeholder="Input product url" 
        onChange={e=>setImageurl(e.target.value)}
        
        />
         <label>Categories</label>
        <input type="text" 
        required
        className="registerInput" 
        placeholder="Input the product categories" 
        onChange={e=>setCategories(e.target.value)}
        
        />

        <label>Price</label>
        <input type="text" 
        required
        className="registerInput" 
        placeholder="Input the Price of the product"
        onChange={e=>setPrice(e.target.value)} 
        
        />
    <button className="registerButton" type="submit">Upload</button>
        </form>
        {error && <span style={{color:"red", marginTop: "10px"}}>Something went wrong!</span> } 
    </div>
  );
}