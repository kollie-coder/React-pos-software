import { React, useState, useEffect } from "react";
import { getProducts } from "../../service/product";
//import img from "../../Assets/Bells.png";
import './ProductList.css'

function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts()
      setProducts(res)
    }

    fetchProducts()
  }, [])

  console.log(products)

  return (
    <div className="productList">
    <div className="product container mt-5">
      <div className="text-center">
      {/*<img src={img} alt="bells" className="img"/>*/}
      </div>
      <div className='table-responsive bg-light'>
        <table className='table table-responsive table-light table-hover'>
          <thead>
            <tr>
              <td>product id</td>
              <td>Categories</td>
              <td>Name</td>
              <td>Price</td>
              
            </tr>
          </thead>
          <tbody>
            {products.length > 0 && products.map((product, i) => (
              <tr>
                <td>{product.id}</td>
                <td>{product.categories}</td>
                <td>{product.name || product.productName}</td>
                <td>{product.price}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
    </div>


  );
}
export default ProductList