import './navbar.css'
import Logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar)
        return () => window.removeEventListener("scroll", transitionNavbar)
    }, [])


    return (
        <nav className={`navbar ${show && "navbar__black"}`}>
            <div className="navbar__contents">
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className='navbar__logo' onClick={() => navigate("/home")} />
                <img src={Logo} alt="" className='navbar__avatar'/>
            </div>
        </nav>
    )
}

export default Navbar