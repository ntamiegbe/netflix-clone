import './index.css'
import Hero from './pages/Homepage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path='/' element={<Hero />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
