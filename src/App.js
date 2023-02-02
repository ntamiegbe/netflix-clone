import './index.css'
import Hero from './pages/Homepage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './server/firebase';
import { useEffect } from 'react';

function App() {

  const user = null

  useEffect(() => {
    const unsucscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        console.log(user);
      } else {
        // User is signed out
        // ...
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
