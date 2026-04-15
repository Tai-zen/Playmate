import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-5xl font-heading font-bold text-white mb-4 tracking-tighter">Get in touch</h1>
        <p className="text-white/40 mb-12">We typically respond within one business day.</p>
        
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full bg-card border border-white/5 rounded-2xl p-5 text-white outline-none focus:border-accent transition-colors"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full bg-card border border-white/5 rounded-2xl p-5 text-white outline-none focus:border-accent transition-colors"
          />
          <textarea 
            placeholder="What's on your mind?" 
            rows="5"
            className="w-full bg-card border border-white/5 rounded-2xl p-5 text-white outline-none focus:border-accent transition-colors"
          ></textarea>
          <button className="w-full py-5 bg-accent text-white font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;