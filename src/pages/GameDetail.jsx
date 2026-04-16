import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL, API_KEY } from '../lib/constants';

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
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

export default GameDetail;