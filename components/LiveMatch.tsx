import Image from 'next/image';
import { Match } from '@/lib/types';

// Helper to split "145/6 (18.4)" into two parts
const ScoreDisplay = ({ score }: { score: string }) => {
  // If score doesn't have overs (e.g. "Yet to Bat"), just show it simply
  if (!score.includes('(')) {
    return <p className="font-display text-2xl font-bold text-gray-400 mt-2">{score}</p>;
  }

  const [runs, overs] = score.split('(');

  return (
    <div className="flex flex-col items-center mt-2">
      {/* Big Score */}
      <span className="font-display text-4xl font-bold text-bpl-primary leading-none">
        {runs.trim()}
      </span>
      {/* Small Overs */}
      <span className="text-sm font-medium text-gray-500 mt-1">
        ({overs}
      </span>
    </div>
  );
};

export default function LiveMatch({ match }: { match: Match }) {
  return (
    <div className="bg-gradient-to-br from-bpl-primary to-green-800 rounded-xl shadow-lg p-6 mb-8 relative overflow-hidden">
      {/* Optional: Background Pattern for texture */}
      <div className="absolute -right-6 -top-6 w-32 h-32 bg-white opacity-10 rounded-full"></div>

      {/* Header: Status & Venue */}
      <div className="flex justify-between items-center mb-6 relative z-10">
        <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse uppercase tracking-wider">
          {match.status}
        </span>
        <span className="text-gray-500 text-xs font-medium uppercase tracking-wide">
          {match.venue}
        </span>
      </div>
      
      {/* Main Score Area */}
      <div className="flex justify-between items-center relative z-10">
        
        {/* Team 1 */}
        <div className="text-center w-1/3 flex flex-col items-center">
          <div className="relative w-20 h-20 md:w-24 md:h-24 mb-2">
            {/* Fallback to text if logo is missing, or show Image */}
            {match.team1Logo ? (
              <Image 
                src={match.team1Logo} 
                alt={match.team1}
                fill
                className="object-contain drop-shadow-md"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-400 font-bold">
                {match.team1[0]}
              </div>
            )}
          </div>
          {/*<h3 className="font-bold text-sm text-gray-600 uppercase tracking-tight">{match.team1}</h3>*/}
          <ScoreDisplay score={match.team1Score} />
        </div>
        
        {/* VS Badge */}
        <div className="text-center w-1/3">
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-green-500 opacity-30 text-gray-900 font-display font-bold text-lg shadow-inner">
            VS
          </div>
        </div>
        
        {/* Team 2 */}
        <div className="text-center w-1/3 flex flex-col items-center">
          <div className="relative w-20 h-20 md:w-24 md:h-24 mb-2">
            {match.team2Logo ? (
              <Image 
                src={match.team2Logo} 
                alt={match.team2}
                fill
                className="object-contain drop-shadow-md"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-400 font-bold">
                {match.team2[0]}
              </div>
            )}
          </div>
          <ScoreDisplay score={match.team2Score} />
        </div>
      </div>
      
      {/* Match Result / Footer */}
      <div className="mt-6 text-center border-t border-gray-100 pt-4 relative z-10">
        <p className="text-bpl-secondary font-semibold text-sm md:text-base">
          {match.result}
        </p>
      </div>
    </div>
  );
}