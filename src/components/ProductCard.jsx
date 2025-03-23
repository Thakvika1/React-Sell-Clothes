import '../styles/product-card.css'

function CardComponent({ price, type, image, size }) {
  return (
    <div className="card">
      <img className="image" src={image} alt={image} />
      <h3 className="type"> {type} </h3>
      <h5 className="price"> {price} </h5>
      <h5 className="size"> {size} </h5>
    </div>
  )
}

export default CardComponent
