import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/product-card.css'

function ProductCardSkeleton() {
  return (
    <div className="card-skeleton">
      <Skeleton height={250} width={200} />
      <Skeleton width={100} style={{ marginTop: '10px' }} />
      <Skeleton width={150} style={{ marginTop: '10px' }} />
    </div>
  )
}

export default ProductCardSkeleton
