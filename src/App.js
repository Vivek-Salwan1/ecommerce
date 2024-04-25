import axios from 'axios';
import './App.css';
import Categories from './categories';
import { useEffect, useState } from 'react';

function App() {

  let [categories, setcategories] = useState([]);
  let [products, setproducts] = useState([]);
  let [catName, setCatName] = useState('')

  let getCategory = () => {


    axios.get('https://dummyjson.com/products/categories')
      .then((res) => res.data)
      .then((finalData) =>
        setcategories(finalData))
  }

  let getproducts = () => {


    axios.get('https://dummyjson.com/products')
      .then((res) => res.data)
      .then((finalData) =>
        setproducts(finalData.products)

      )

  }

  useEffect(() => {
    if (catName !== '')
    axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((res) => res.data)
      .then((finalData) =>
        setproducts(finalData.products)

      )


  }, [catName])


  useEffect(() => {
    getCategory();
    getproducts();
  }, [])

  return (
    <>
      <h1>Our Products</h1>
      <div className='ecommerce'>

        <div className='categories'>
          <Categories setCatName={setCatName} categories={categories} />
        </div>

        <div className='productItems'>
          <h3>ProductItems</h3>
          <div className='proItemSection'>
            <ProductItem products={products} />

          </div>
        </div>

      </div>

    </>
  );
}

export default App;





function ProductItem({ products }) {

  let fiProduct = products.map((v, i) => {

    return (
      <div className='proItem'>

        <img className='primg' src={v.thumbnail} alt='productImage' />
        <span>{v.title}</span><br />
        <span>Prie:{v.price}$</span>
      </div>
    )
  })

  return (
    <>
      {fiProduct}
    </>
  )
}