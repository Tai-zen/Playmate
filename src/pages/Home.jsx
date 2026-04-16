import SearchIcon from '../components/ui/SearchIcon';
import LoadingCard from '../components/ui/LoadingCard';
import GameCard from '../components/GameCard';

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

export default Home;