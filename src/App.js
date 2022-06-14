import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route />
      </Routes>
      <Navbar />
      <Profile />
      <Portfolio />
      <Contact />
    </Router>
    </>
  );
}

export default App;
