import './index.css'
import Hero from './pages/Homepage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './server/firebase';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  // const uid = user.uid;

  useEffect(() => {
    const unsucscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          uid: user.uid,
          email: user.email
        }))
        console.log(user);
      } else {
        dispatch(logout)
      }
    });

    return unsucscribe

  }, [])


  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path='/' element={<Hero />} />
          </Routes>
        )}
      </Router>
    </div >
  );
}

export default App;
