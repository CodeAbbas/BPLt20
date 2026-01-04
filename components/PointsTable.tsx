import { TableRow } from '@/lib/types';

export default function PointsTable({ data }: { data: TableRow[] }) {
  return (
    <div className="bg-gradient-to-br to-bpl-primary from-green-800 rounded-xl shadow-sm border border-green-700 rounded-lg shadow overflow-hidden">
      <div className="bg-bpl-dark px-4 py-3 border-b border-green-700">
        <h3 className="text-lg leading-6 font-medium text-white font-display">Points Table</h3>
      </div>
      {/* Rest of your table code remains the same */}
      <div className="overflow-x-auto ">
        <table className="min-w-full divide-y divide-green-500 ">
          <thead className="bg-gradient-to-br to-bpl-primary from-green-800  border border-green-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Pos</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Team</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">P</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">W</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">L</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">NRR</th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-300 uppercase tracking-wider">Pts</th>
            </tr>
          </thead>
          <tbody className="bg-gradient-to-br to-bpl-primary from-green-800 border border-green-700 divide-y divide-green-500">
            {data.map((row) => (
              <tr key={row.team} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{row.rank}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">{row.team}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">{row.played}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-green-600 font-semibold">{row.won}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-red-600">{row.lost}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">{row.nrr}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold text-bpl-primary">{row.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-gradient-to-br to-bpl-primary from-green-800 border border-green-700 px-4 py-3 text-right">
        <a href="/stats" className="text-sm font-medium text-bpl-primary hover:text-bpl-secondary">View Full Table &rarr;</a>
      </div>
    </div>
  );
}