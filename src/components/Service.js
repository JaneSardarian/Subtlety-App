import { services } from '../data'
const Service = () => {
  return (
    <div className='section-center services-center'>
      {services.map((service) => {
        const { id, icon, title, text } = service
        return (
          <article key={id} className='service'>
            <span>
              <img src={icon} className='service-icon' alt={title} />
            </span>
            <div className='service-info'>
              <h4 className='service-title'>{title}</h4>
              <p className='service-text'>{text}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
export default Service
