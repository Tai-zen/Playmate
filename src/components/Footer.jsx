import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 border-t border-white/5 pt-20 pb-10 px-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand & Address */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-heading font-bold tracking-tighter text-white">
            Play<span className="text-accent">Mate</span>
          </Link>
          <div className="text-white/40 text-sm leading-relaxed">
            <p>123 Pixel Avenue</p>
            <p>Silicon Valley, CA 94025</p>
            <p className="mt-4">taye.ojo08@gmail.com</p>
            <p>+234 905 1018 238</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/20">Explore</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
{/* Legal Section in Footer.jsx */}
<div className="space-y-6">
  <h4 className="text-xs font-bold uppercase tracking-widest text-white/20">Legal</h4>
  <ul className="space-y-4 text-sm text-white/60">
    <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
    <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Use</Link></li>
    <li><Link to="/cookies" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
  </ul>
</div>

        {/* Disclaimer */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/20">Disclaimer</h4>
          <p className="text-white/25 text-[11px] leading-relaxed">
            Data provided by RAWG.io. All game titles, images, and logos are 
            trademarks of their respective owners. This site is for discovery 
            and informational purposes only.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/20 font-medium uppercase tracking-widest">
        <p>© {currentYear} GAMERDB Project. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;