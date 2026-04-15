import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="w-full py-20 px-6 border-t border-white/5 bg-[#0a0a0c]">
    <div className="max-w-6xl mx-auto">
      {/* Newsletter Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20 bg-accent/5 p-10 rounded-[3rem] border border-accent/10">
        <div>
          <h3 className="text-2xl font-heading font-bold text-white mb-2">Weekly Gaming Updates</h3>
          <p className="text-white/40">No spam, just the best new releases every Friday.</p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <input 
            type="email" 
            placeholder="email@example.com" 
            className="bg-black/40 border border-white/10 rounded-full px-6 py-3 text-white outline-none focus:border-accent w-full md:w-64"
          />
          <button className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-accent hover:text-white transition-all">
            JOIN
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex gap-8 mb-10">
          <Link to="/" className="text-xs font-bold text-white/30 uppercase hover:text-white transition-colors">Home</Link>
          <Link to="/contact" className="text-xs font-bold text-white/30 uppercase hover:text-white transition-colors">Contact Us</Link>
        </div>
        <p className="text-[11px] text-white/20 text-center">&copy; 2026 PLAYMATE. DEVELOPED BY TAI-ZEN.</p>
      </div>
    </div>
  </footer>
);
export default Footer;