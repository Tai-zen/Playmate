const PrivacyPolicy = () => (
  <div className="min-h-screen pt-32 pb-20 px-6">
    <div className="max-w-3xl mx-auto prose prose-invert prose-white">
      <p className="text-accent font-heading font-bold tracking-widest uppercase text-xs">Security & Trust</p>
      <h1 className="text-5xl font-heading font-bold tracking-tighter mb-12">Privacy Policy</h1>
      
      <section className="space-y-6 text-white/60">
        <p>Last Updated: April 16, 2026</p>
        <h2 className="text-white">1. Data Collection</h2>
        <p>We do not require user accounts to browse our database. However, we may collect non-identifiable technical data such as IP addresses and browser types to improve our search performance and security.</p>
        
        <h2 className="text-white">2. Third-Party Services</h2>
        <p>Our platform utilizes the RAWG API. While we do not share your personal information, RAWG may collect data according to their own privacy standards when game assets are loaded.</p>
        
        <h2 className="text-white">3. Data Retention</h2>
        <p>Any search queries performed are stored temporarily in your local browser session to facilitate a faster navigation experience and are not stored on our permanent servers.</p>
      </section>
    </div>
  </div>
);

export default PrivacyPolicy;