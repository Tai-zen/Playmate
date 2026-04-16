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

export default LoadingCard;