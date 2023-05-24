
import { IProduct } from "../App"

interface ProductProps{
    product: IProduct,
    addToCart(id: number): void
}

const Product = ({product, addToCart}: ProductProps) => {
  return (
    <div>
        <h4>{product.name}</h4>
        <span>price: {product.price}</span>
        <br />
        <p>{product.desc}</p>
        <button onClick={() => addToCart(product.id)}>Add To Cart</button>
    </div>
  )
}

export default Product