import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './index.css';
import Nav from './Nav';
import Footer from './Footer';
import GameCard from './GameCard';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';

const API_URL = 'https://api.rawg.io/api/games';
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

if (!API_KEY) {
  console.error("API Key is missing! Check your .env file.");
}
// --- Shared Components ---


const SearchIcon = ({ onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width="18" height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white/30 hover:text-accent cursor-pointer transition-colors duration-200 shrink-0"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const LoadingCard = () => (
  <div className="w-full rounded-3xl overflow-hidden bg-card border border-white/5 animate-pulse">
    <div className="w-full h-64 bg-white/5" />
    <div className="p-6 space-y-4">
      <div className="h-4 bg-white/5 rounded w-3/4" />
      <div className="flex gap-2">
        <div className="h-4 w-16 bg-white/5 rounded-full" />
        <div className="h-4 w-12 bg-white/5 rounded-full" />
      </div>
    </div>
  </div>
);

// --- Page: Home ---
const Home = ({ games, loading, searchTerm, setSearchTerm, searchGames, query }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') searchGames(searchTerm);
  };

  return (
    <div className="min-h-screen">
      <header className="pt-24 pb-12 flex flex-col items-center gap-8 px-6">
        <p className="text-[11px] font-heading font-semibold uppercase tracking-[4px] text-accent/60">
          Game Discovery
        </p>
        <h1 className="text-6xl font-heading font-bold gradient-text tracking-tighter text-center max-sm:text-4xl">
          Discover Your <br /> Next Adventure
        </h1>
        
        <div className="search-wrap w-full max-w-xl">
          <input 
            type="text" 
            placeholder="Search 800,000+ games..." 
            className="flex-1 bg-transparent border-none outline-none font-body font-medium text-base text-white/70 placeholder:text-white/20"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <SearchIcon onClick={() => searchGames(searchTerm)} />
        </div>

        {!loading && games.length > 0 && (
          <p className="text-[11px] font-body text-white/25 uppercase tracking-widest">
            {games.length} results for "{query}"
          </p>
        )}
      </header>

      <main className="px-8 pb-20 max-w-[1400px] mx-auto">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => <LoadingCard key={i} />)}
          </div>
        ) : games.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 py-32 text-center">
            <p className="text-white/20 text-lg">No games found</p>
            <p className="text-white/10 text-sm">Try a different search term</p>
          </div>
        )}
      </main>
    </div>
  );
};

// --- Page: Game Detail ---
const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when opening a game
    fetch(`${API_URL}/${id}?key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setGame(data));
  }, [id]);

  if (!game) return (
    <div className="fixed inset-0 z-[60] bg-app-bg flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="fixed inset-0 z-[60] bg-app-bg overflow-y-auto animate-in fade-in duration-500">
      <button 
        onClick={() => navigate(-1)}
        className="fixed top-8 right-8 z-[70] w-12 h-12 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/10"
      >
        ✕
      </button>
      
      <div className="max-w-5xl mx-auto pt-10 pb-20 px-6">
        <div className="relative h-[450px] rounded-[3rem] overflow-hidden mb-12 shadow-2xl border border-white/5">
          <img src={game.background_image} className="w-full h-full object-cover" alt={game.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-app-bg via-transparent to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <h1 className="text-6xl font-heading font-bold text-white mb-6 tracking-tighter">{game.name}</h1>
            <div className="flex gap-4 mb-10">
              <span className="bg-accent/10 text-accent border border-accent/20 px-5 py-2 rounded-2xl text-sm font-bold">★ {game.rating.toFixed(1)}</span>
              <span className="text-white/40 text-sm font-bold uppercase tracking-[0.2em] self-center">{game.released}</span>
            </div>
            <div 
              className="text-white/60 leading-relaxed text-lg space-y-4 prose-invert" 
              dangerouslySetInnerHTML={{ __html: game.description }}
            />
          </div>
          
          <div className="w-full md:w-80 bg-card border border-white/5 p-10 rounded-[2.5rem] sticky top-24 shadow-xl">
            <button className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-accent hover:text-white transition-all duration-300 mb-6">
              GET GAME
            </button>
            <div className="space-y-6 text-sm">
              <div>
                <p className="font-bold text-white/20 mb-2 uppercase tracking-widest text-[10px]">Publisher</p> 
                <p className="text-white/70">{game.publishers?.[0]?.name || "N/A"}</p>
              </div>
              <div>
                <p className="font-bold text-white/20 mb-2 uppercase tracking-widest text-[10px]">Website</p> 
                <a href={game.website} target="_blank" rel="noreferrer" className="text-accent hover:underline break-words">{game.website}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
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