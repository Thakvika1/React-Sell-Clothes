import '../styles/product-card.css'
import Boy1 from '../assets/images/boy/boy1.jpg'

function CardComponent({ price, type, image, size }) {
  return (
    <div className="card">
      {/* <img className="image" src={image} alt={image} /> */}
      <img className="image" src={Boy1} alt="" />
      <div className="text-container">
        <div className="text">
          <h5 className="type">boy {type} </h5>
          <h5 className="size">12months {size} </h5>
        </div>
        <h5 className="price">${price}300</h5>
      </div>
    </div>
  )
}

export default CardComponent
