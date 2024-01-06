import { bestsellers } from '../data'
const Bestseller = () => {
  return (
    <div className='section-center featured-center'>
      {bestsellers.map((item) => {
        const { id, image, title, info, price } = item
        return (
          <article key={id} className='tour-card'>
            <div className='tour-img-container'>
              <img src={image} className='tour-img' alt={title} />
            </div>
            <div className='tour-info'>
              <div className='tour-title'>
                <h4>{title}</h4>
              </div>
              <p>{info}</p>
              <div className='tour-footer'>
                <p>${price}</p>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
export default Bestseller
