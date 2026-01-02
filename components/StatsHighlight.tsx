export default function StatsHighlight({ title, player, metricLabel, metricValue, subMetric }) {
  return (
    <div className="bg-gradient-to-br from-bpl-primary to-green-800 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -right-6 -top-6 w-32 h-32 bg-white opacity-10 rounded-full"></div>
      
      <h3 className="text-sm uppercase tracking-widest text-green-200 mb-4 font-semibold">{title}</h3>
      
      <div className="flex items-end space-x-4">
        <div className="flex-1 z-10">
          <p className="text-xl font-bold leading-tight">{player.name}</p>
          <p className="text-sm text-green-100">{player.team}</p>
        </div>
        <div className="text-right z-10">
          <p className="text-4xl font-display font-bold text-bpl-accent">{metricValue}</p>
          <p className="text-xs uppercase text-green-200">{metricLabel}</p>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-green-700 flex justify-between text-sm">
        <span>{subMetric}</span>
      </div>
    </div>
  );
}