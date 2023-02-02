import Navbar from '../../components/Navbar/Navbar'
import './profile.css'
import Logo from '../../assets/logo.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../server/firebase'

const Profile = () => {
    const user = useSelector(selectUser)

    return (
        <div className='profile'>
            <Navbar />
            <div className="profile__body">
                <h1>Edit Profile</h1>
                <div className="profile__info">
                    <img src={Logo} alt="Logo" />
                    <div className="profile__details">
                        <h1>{user.email}</h1>
                        <div className="profile__plans">

                            <button className='profile__button'>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile