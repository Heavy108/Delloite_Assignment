'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { Barlow_Condensed } from "next/font/google";
const Data = [
  {
    
    name: "headphones",
    category: "Household",
    brand:"Sony",
    price: 500,
  },
  {
    
    name: "headphones",
    category: "Household",
    brand:"Sony",
    price: 500,
  },
  {
    
    name: "headphones",
    category: "Household",
    brand:"Sony",
    price: 3500,
  },
  {
    
    name: "headphones",
    category: "Household",
    brand:"Sony",
    price: 400,
  },
];

export default function Home() {

const [product ,setProduct] =useState([])
const [inpu ,setinpu] =useState({ name:'' ,category:'' ,brand:'' ,price:''})
const [filters, setFilters] = useState({
  category: "",
  brand: "",
  minprice: "",
  maxprice: "",
});
const [ filteredProduct ,setfilteredProduct] = useState([])


  const handleSubmit = (e) =>{
    e.preventDefault()
    // const {name , category , brand,price} = inpu
    
    // const newProduct ={
    //   name,
    //   category,
    //   brand,
    //   price
    // }
    // setProduct(prev =>[...prev,newProduct])
    product.push(inpu)
    // setinpu({ name: "", category: "", brand: "", price: "" });
    console.log(product)

  }

  const handleFilter =(e) =>{
    e.preventDefault()

    const results =product.filter(product =>{
      const matchCategory =filters.category ? product.category == filters.category:true;
      const matchBrand = filters.brand
        ? product.brand == filters.brand
        : true;
        const matchPrice =filters.minprice && filters.maxprice ? product.price >= Number(filters.minprice) && product.price <= Number(filters.maxprice):true;
        return matchCategory && matchBrand && matchPrice

    })
    setfilteredProduct(results);

  }

 

  return (
    <>
      <h1>E-commerce Website</h1>
      <div>
        <h3>Add Product</h3>
        <form>
          <input
            type="text"
            name="product"
            placeholder="Enter the Product Name"
            value={inpu.name}
            onChange={(e) => setinpu({ ...inpu, name: e.target.value })}
          />
          <input
            type="text"
            name="Category"
            placeholder="Enter the Category Name"
            value={inpu.category}
            onChange={(e) => setinpu({ ...inpu, category: e.target.value })}
          />
          <input
            type="text"
            name="Brand"
            placeholder="Enter the Brand  Name"
            value={inpu.brand}
            onChange={(e) => setinpu({ ...inpu, brand: e.target.value })}
          />
          <input
            type="number"
            name="price"
            placeholder="Enter the Price"
            value={inpu.price}
            onChange={(e) => setinpu({ ...inpu, price: e.target.value })}
          />
          <button onClick={handleSubmit}>Add product</button>
        </form>

        <form>
          <h2>Filter product</h2>

          <input
            type="text"
            name="Category"
            placeholder="Enter the Category Name"
            value={filters.category}
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
          />
          <input
            type="text"
            name="Brand"
            placeholder="Enter the Brand  Name"
            value={filters.brand}
            onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
          />
          <input
            type="number"
            name="minprice"
            placeholder="Enter the Price"
            value={filters.price}
            onChange={(e) =>
              setFilters({ ...filters, minprice: e.target.value })
            }
          />
          <input
            type="number"
            name="maxprice"
            placeholder="Enter the Price"
            value={filters.price}
            onChange={(e) =>
              setFilters({ ...filters, maxprice: e.target.value })
            }
          />
          <button onClick={handleFilter}>Filter</button>
        </form>

        <h2> Filtered Products</h2>
        {/* <ul>
          {product.length === 0 ? (
            <li>no products</li>
          ) : (
            product.map((product, i) => {
              <li key={i}>
                {" "}
                {product[0]}
                {product.name} - {product.category} -- {product.brand} --
                {product.price}
              </li>;
            })
          )}
        </ul> */}
        <ul>
          {filteredProduct.length === 0 ? (
            <li> No Matching Products</li>
          ) : (
            filteredProduct.map((prod, i) => (
              <li key={i}>
                {prod.category}--{prod.brand} -- {prod.price}
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}
