import { Match } from '@/lib/types';

export default function LiveMatch({ match }: { match: Match }) {
  return (
    <div className="bg-white rounded-xl shadow-md border-l-4 border-bpl-secondary p-6 mb-8 transform hover:scale-[1.01] transition-transform">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">
          {match.status}
        </span>
        <span className="text-gray-500 text-sm">{match.venue}</span>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-center w-1/3">
          <h3 className="font-bold text-lg md:text-xl text-gray-800">{match.team1}</h3>
          <p className="font-display text-3xl font-bold text-bpl-primary mt-2">{match.team1Score}</p>
        </div>
        
        <div className="text-center w-1/3 text-gray-400 font-bold text-xl">VS</div>
        
        <div className="text-center w-1/3">
          <h3 className="font-bold text-lg md:text-xl text-gray-800">{match.team2}</h3>
          <p className="font-display text-3xl font-bold text-bpl-primary mt-2">{match.team2Score}</p>
        </div>
      </div>
      
      <div className="mt-6 text-center border-t pt-4">
        <p className="text-bpl-secondary font-semibold">{match.result}</p>
      </div>
    </div>
  );
}