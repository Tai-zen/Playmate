import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import GameDetail from './pages/GameDetail';
import { API_URL, API_KEY } from './lib/constants';

export default function App() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('cyberpunk');

  const searchGames = async (title) => {
    const searchTitle = title.trim() || 'cyberpunk';
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}?key=${API_KEY}&search=${searchTitle}&page_size=20`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setGames(data.results ?? []);
      setQuery(searchTitle);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchGames('cyberpunk');
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-app-bg text-white">
        <Nav />
        <Routes>
          <Route path="/" element={
            <Home 
              games={games} 
              loading={loading} 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm} 
              searchGames={searchGames} 
              query={query} 
            />
          } />
          <Route path="/game/:id" element={<GameDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}