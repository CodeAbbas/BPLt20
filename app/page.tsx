import { activeMatch, pointsTableData, topPerformers, newsUpdates } from '@/lib/data';
import LiveMatch from '@/components/LiveMatch';
import PointsTable from '@/components/PointsTable';
import StatsHighlight from '@/components/StatsHighlight';
import { Player } from '@/lib/types';

export default function Home() {
  const topBatsman: Player = topPerformers.batsmen[0];
  const topBowler: Player = topPerformers.bowlers[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-12">
        <h2 className="sr-only">Live Scores</h2>
        <LiveMatch match={activeMatch} />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-display font-bold text-gray-900 border-l-4 border-bpl-primary pl-3">
                Top Performers
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <StatsHighlight 
                title="Orange Cap (Runs)" 
                player={topBatsman} 
                metricLabel="Runs" 
                metricValue={topBatsman.runs || 0} // Fix: Use runs
                subMetric={`Strike Rate: ${topBatsman.sr}`}
              />
              <StatsHighlight 
                title="Purple Cap (Wickets)" 
                player={topBowler} 
                metricLabel="Wickets" 
                metricValue={topBowler.wickets || 0} // Fix: Use wickets, not .bowlers
                subMetric={`Economy: ${topBowler.eco}`}
              />
            </div>
          </section>

          {/* News Section */}
          <section>
            <h2 className="text-2xl font-display font-bold text-gray-900 border-l-4 border-bpl-secondary pl-3 mb-6">
              Latest Updates
            </h2>
            <div className="bg-white rounded-lg shadow divide-y">
              {newsUpdates.map((news) => (
                <article key={news.id} className="p-4 hover:bg-gray-50 transition flex gap-4">
                  <div className="flex-1">
                    <span className="text-xs font-bold text-bpl-primary uppercase">{news.category}</span>
                    <h3 className="font-bold text-lg text-gray-800 mt-1 hover:text-bpl-secondary cursor-pointer">
                      {news.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">{news.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <PointsTable data={pointsTableData} />
        </aside>
      </div>
    </div>
  );
}