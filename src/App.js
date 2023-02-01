import './index.css'
import Hero from './pages/Homepage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {

  const user = null

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
