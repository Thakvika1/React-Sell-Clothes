import '../styles/product-card.css'

function CardComponent({ price, type, image, size }) {
  return (
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
