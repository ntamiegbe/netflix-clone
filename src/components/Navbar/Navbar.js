import './navbar.css'
import Logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <nav className='navbar navbar__black'>
            <div className="navbar__contents">
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className='navbar__logo' />
                <img src={Logo} alt="" className='navbar__avatar' />
            </div>
        </nav>
    )
}

export default Navbar