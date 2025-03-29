import '../styles/product-card.css'
import ProductCardSkeleton from './ProductCardSkeleton'
import { useState, useEffect } from 'react'

function CardComponent({ price, type, image, size }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return loading ? (
    <ProductCardSkeleton />
  ) : (
    <div className="card">
      <img className="image" src={image} alt={image} />
      <div className="text-container">
        <div className="text">
          <h5 className="type">{type} </h5>
          <h5 className="size">{size} </h5>
        </div>
        <h5 className="price">${price}</h5>
      </div>
    </div>
  )
}

export default CardComponent
