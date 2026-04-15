import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  const genres = game.genres?.slice(0, 2) ?? [];

  return (
    <Link to={`/game/${game.id}`} className="group block">
      <div className="relative bg-card border border-white/[0.04] rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] h-full">
        
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={game.background_image || "https://via.placeholder.com/400x300"}
            alt={game.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />
          
          {/* Rating Badge */}
          {game.rating > 0 && (
            <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span className="text-xs font-bold text-cream">
                ★ {game.rating.toFixed(1)}
              </span>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Genre Pills */}
          <div className="flex flex-wrap gap-2 mb-3">
            {genres.map((g) => (
              <span 
                key={g.id} 
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 text-white/50 border border-white/5"
              >
                {g.name}
              </span>
            ))}
          </div>

          <h3 className="font-heading font-bold text-lg text-white/90 group-hover:text-accent transition-colors line-clamp-1">
            {game.name}
          </h3>

          <p className="text-xs text-white/40 mt-2 font-medium">
            Released: {game.released || "TBA"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;