import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
    return (
      <main className="body-main">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
          <div key={id} className="container-main-content">
            <Skeleton></Skeleton>

            <div className="swiper-hero">
              <Skeleton></Skeleton>
            </div>

            <div className="filter-container">
              <Skeleton></Skeleton>
            </div>

            <div className="populer-container">
              <Skeleton></Skeleton>
            </div>

            <div className="trending-container">
              <Skeleton></Skeleton>
            </div>

            <div className="genres-container">
              <Skeleton></Skeleton>
            </div>

            <div className="vrgames-container">
              <Skeleton></Skeleton>
            </div>

            <div className="footer-container">
              <Skeleton></Skeleton>
            </div>
          </div>
        ))}
      </main>
    );
}