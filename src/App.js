import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import Like from './Page/Like/Like';
import Personal from './Page/Personal account/Personal';
import Settings from './Page/Settings page/Settings';
import Card from './Page/Card/Card';
import Search from './Page/Search/Search';
import './Style.css';


function App() { 
  return (
    <Router>
      <header className='urlConteiner'>
        <p className='Home'><Link to={'/'}>Home</Link></p>
        <p className='Like'><Link to={'/Like'}>Like</Link></p>
        <p className='Personal'><Link to={'/personal-account'}>Personal account</Link></p>
        <p className='Setting'><Link to={'/settings'}>Settings</Link></p>
        <p className='Card'><Link to={'/card'}>Card</Link></p>
        <p className='Search'><Link to={'/search'}>Search</Link></p>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Like" element={<Like />} />
        <Route path="/personal-account" element={<Personal />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/card" element={<Card />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;

