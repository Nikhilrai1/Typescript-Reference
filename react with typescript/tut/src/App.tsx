import { useState } from 'react'
import Product from "./components/Product"

export interface IProduct{
  id: number;
  name: string;
  price: number;
  desc: string;
}

const storeProducts = [
  {
    id: 1,
    name: "Iphone",
    price: 1000,
    desc: "Iphone 14 pro max"
  },
  {
    id: 2,
    name: "TV",
    price: 1200,
    desc: "Samsung Led Tv"
  },
  {
    id: 3,
    name: "Hp laptop",
    price: 1000,
    desc: "Hp laptop (gaming laptop)"
  },
]
function App() {
  const [products,setProducts] = useState<IProduct[]>(storeProducts)

  const addToCart = (id: number) => {
    console.log(`Product with id ${id} is added to cart`)
  }
  return (
   <div >
    {products.map(product => <Product key={product.id} product={product} addToCart={addToCart}/> )}
   </div>
  )
}

export default App
