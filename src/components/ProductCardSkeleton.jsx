import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/product-card.css'

function ProductCardSkeleton() {
  return (
    <div className="card-skeleton">
      <Skeleton className="image-skeleton" />
      <Skeleton className="title-skeleton" />
      <Skeleton className="text-skeleton" />
    </div>
  )
}

export default ProductCardSkeleton
