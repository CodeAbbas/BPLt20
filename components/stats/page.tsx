import { topPerformers } from '@/lib/data';

export const metadata = {
  title: 'Stats Center',
  description: 'Detailed player statistics, most runs, most wickets, and points table for BPL 2026.',
};

export default function StatsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-display font-bold text-bpl-dark mb-8">Tournament Statistics</h1>
      
      {/* Tab system could go here */}
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-bpl-primary">Most Runs</h2>
          <ul className="space-y-3">
            {topPerformers.batsmen.map((player, idx) => (
              <li key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold text-gray-400">#{idx + 1}</span>
                  <div>
                    <p className="font-bold">{player.name}</p>
                    <p className="text-xs text-gray-500">{player.team}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-bpl-dark">{player.runs}</p>
                  <p className="text-xs text-gray-500">Runs</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Repeat similar block for Bowlers/Wickets */}
      </div>
    </div>
  );
}