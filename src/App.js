import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendars from './components/Calendars';
import Anime from './components/Anime';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Calendars />} />
            <Route path="/anime" element={<Anime />} />
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
