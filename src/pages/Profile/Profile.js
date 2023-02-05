import Navbar from '../../components/Navbar/Navbar'
import './profile.css'
import Logo from '../../assets/logo.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../server/firebase'
import { signOut } from 'firebase/auth'

const Profile = () => {
    const user = useSelector(selectUser)

    return (
        <div className='profile'>
            <Navbar />
            <div className="profile__body">
                <h1>Edit Profile</h1>
                <div className="profile__info">
                    <img src={Logo} alt="Logo" className='profile__image' />
                    <div className="profile__details">
                        <h1>{user.email}</h1>
                        <div className="profile__plans">
                            <h3>Subscription Plans</h3>
                            <div className="profile__plan">
                                <h4>Premium Plan<br />5,600</h4>
                                <button>Subscribe</button>
                            </div>
                            <div className="profile__plan">
                                <h4>Standard Plan<br />5,600</h4>
                                <button>Subscribe</button>
                            </div>
                            <div className="profile__plan">
                                <h4>Basic Plan<br />5,600</h4>
                                <button>Subscribe</button>
                            </div>
                            <button onClick={() => signOut(auth)} className='profile__button'>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile