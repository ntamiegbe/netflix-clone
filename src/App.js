import './index.css'
import Hero from './pages/Homepage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './server/firebase';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './pages/Profile/Profile';
import MovieDetails from './pages/MovieDetails/MovieDetails';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsucscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout())
      }
    });

    return unsucscribe

  }, [dispatch])


  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path='/' element={<Hero />} />
            <Route exact path='/:id' element={<MovieDetails />} />
            <Route exact path='/profile' element={<Profile />} />
          </Routes>
        )}
      </Router>
    </div >
  );
}

export default App;
