import { activeMatch, pointsTableData, topPerformers, newsUpdates } from '@/lib/data';
import LiveMatch from '@/components/LiveMatch';
import PointsTable from '@/components/PointsTable';
import StatsHighlight from '@/components/StatsHighlight';
import { Player } from '@/lib/types';

// Helper component for the Rank 2-5 list rows
// This makes the list look cleaner without cluttering the main code
const LeaderboardRow = ({ rank, player, metric }: { rank: number; player: Player; metric: string }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors px-2">
    <div className="flex items-center gap-4">
      <span className="font-display font-bold text-gray-300 text-xl w-6">0{rank}</span>
      <div>
        <p className="font-bold text-sm text-gray-800 leading-none">{player.name}</p>
        <p className="text-xs text-gray-500 mt-1">{player.team}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="font-display font-bold text-lg text-bpl-primary">{metric}</p>
    </div>
  </div>
);

export default function Home() {
  const topBatsman = topPerformers.batsmen[0];
  const topBowler = topPerformers.bowlers[0];

  // Get the rest of the list (Rank 2 to 5)
  const battingLeaderboard = topPerformers.batsmen.slice(1, 5);
  const bowlingLeaderboard = topPerformers.bowlers.slice(1, 5);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION: Gradient Background */}
      <div className="bg-gradient-to-r from-bpl-dark to-bpl-primary pb-24 pt-12 text-center shadow-inner">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 tracking-wide uppercase">
          BPL <span className="text-bpl-accent">Season 12</span>
        </h1>
        <p className="text-gray-300 mb-8 font-medium">Official Live Scores & Updates</p>
      </div>

      {/* Negative margin to pull the Live Card up into the Hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <LiveMatch match={activeMatch} />
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN (Span 8) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 2. STATS SECTION */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display font-bold text-bpl-dark border-l-4 border-bpl-secondary pl-3">
                  Tournament Leaders
                </h2>
                <a href="/stats" className="text-sm font-medium text-bpl-primary hover:text-bpl-secondary transition-colors">
                  View Full Stats &rarr;
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Batting Column */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <h3 className="text-sm font-bold uppercase text-gray-500 tracking-widest">Most Runs</h3>
                  </div>
                  
                  {/* Card for #1 */}
                  <StatsHighlight 
                    title="Orange Cap" 
                    player={topBatsman} 
                    metricLabel="Runs" 
                    metricValue={topBatsman.runs || 0}
                    subMetric={`Strike Rate: ${topBatsman.sr}`}
                  />
                  
                  {/* List for #2-#5 */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                    {battingLeaderboard.map((player, idx) => (
                      <LeaderboardRow 
                        key={idx} 
                        rank={idx + 2} 
                        player={player} 
                        metric={player.runs?.toString() || "0"} 
                      />
                    ))}
                  </div>
                </div>

                {/* Bowling Column */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    <h3 className="text-sm font-bold uppercase text-gray-500 tracking-widest">Most Wickets</h3>
                  </div>

                  {/* Card for #1 */}
                  <StatsHighlight 
                    title="Purple Cap" 
                    player={topBowler} 
                    metricLabel="Wickets" 
                    metricValue={topBowler.wickets || 0}
                    subMetric={`Economy: ${topBowler.eco}`}
                  />

                  {/* List for #2-#5 */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                    {bowlingLeaderboard.map((player, idx) => (
                      <LeaderboardRow 
                        key={idx} 
                        rank={idx + 2} 
                        player={player} 
                        metric={player.wickets?.toString() || "0"} 
                      />
                    ))}
                  </div>
                </div>

              </div>
            </section>

            {/* 3. NEWS SECTION */}
            <section>
              <h2 className="text-2xl font-display font-bold text-bpl-dark border-l-4 border-bpl-secondary pl-3 mb-6">
                Latest Updates
              </h2>
              <div className="grid gap-4">
                {newsUpdates.map((news) => (
                  <article key={news.id} className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-2 py-1 bg-green-50 text-bpl-primary text-[10px] font-bold uppercase rounded tracking-wider">
                            {news.category}
                          </span>
                          <span className="text-gray-400 text-xs font-medium">{news.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-bpl-secondary transition-colors leading-snug">
                          {news.title}
                        </h3>
                      </div>
                      <div className="md:text-right hidden md:block">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-gray-400 group-hover:bg-bpl-primary group-hover:text-white transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN (Span 4) */}
          <aside className="lg:col-span-4 space-y-8">
            <PointsTable data={pointsTableData} />
            
            {/* Promo / Social Widget */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-center text-white shadow-lg">
              <h3 className="font-display font-bold text-2xl mb-2 text-bpl-accent">Follow BPL</h3>
              <p className="text-gray-400 text-sm mb-6">Get exclusive content, highlights, and behind-the-scenes action.</p>
              <button className="bg-white text-bpl-dark font-bold py-3 px-8 rounded-full hover:bg-bpl-accent transition-colors w-full text-sm uppercase tracking-wider">
                Join Community
              </button>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}