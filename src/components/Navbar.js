import logo from '../images/SUBTLETY.svg'
import SocialLink from './SocialLink'
import PageLinks from './PageLinks'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <a href='#home'>
            <img src={logo} className='nav-logo' alt='subtlety' />
          </a>
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>

        <PageLinks parentClass='nav-links' itemClass='nav-link' />

        <SocialLink parentClass='nav-icons' itemClass='nav-icon' />
      </div>
    </nav>
  )
}
export default Navbar
