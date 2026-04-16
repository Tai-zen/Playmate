import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <p className="text-[11px] font-heading font-semibold uppercase tracking-[4px] text-accent/60">
            Our Mission
          </p>
          <h1 className="text-6xl font-heading font-bold gradient-text tracking-tighter max-sm:text-4xl">
            Beyond the Pixels
          </h1>
          <p className="text-white/60 text-lg leading-relaxed font-body">
            Founded in 2026, we believe that gaming is more than just a pastime—it's a gateway to new worlds, 
            untold stories, and shared human experiences. Our platform was built for the explorers, the 
            competitors, and the dreamers who seek their next great digital adventure.
          </p>
        </section>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-heading font-bold text-white tracking-tight">The Discovery Engine</h2>
            <p className="text-white/40 leading-relaxed">
              With a database of over 800,000 titles, we utilize the RAWG API to bring you real-time data, 
              stunning visuals, and community ratings. Whether you are looking for an obscure indie gem 
              or the latest AAA blockbuster, our discovery engine is tuned to find exactly what you're 
              craving.
            </p>
          </div>
          <div className="bg-card border border-white/5 p-8 rounded-[2.5rem] shadow-xl">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">01</div>
                <p className="text-white/70 text-sm italic">"To empower gamers with the most comprehensive data on the planet."</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">02</div>
                <p className="text-white/70 text-sm italic">"To foster a community built on the love of interactive storytelling."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <section className="pt-10 border-t border-white/5">
          <h3 className="text-sm font-heading font-bold uppercase tracking-[0.3em] text-white/20 mb-8">Our Core Values</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { t: 'Authenticity', d: 'We provide raw, unfiltered game data and honest community ratings.' },
              { t: 'Innovation', d: 'Continuously refining our search and discovery algorithms.' },
              { t: 'Inclusion', d: 'A space where every genre and every gamer has a home.' }
            ].map((v, i) => (
              <div key={i} className="space-y-2">
                <h4 className="text-white font-bold">{v.t}</h4>
                <p className="text-white/40 text-sm leading-snug">{v.d}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;