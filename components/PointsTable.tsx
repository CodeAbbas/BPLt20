export default function PointsTable({ data }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="bg-bpl-dark px-4 py-3 border-b border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-white font-display">Points Table</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pos</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">P</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">W</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">L</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">NRR</th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Pts</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row) => (
              <tr key={row.team} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.rank}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.team}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{row.played}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-green-600 font-semibold">{row.won}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-red-600">{row.lost}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{row.nrr}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold text-bpl-primary">{row.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-gray-50 px-4 py-3 text-right">
        <a href="/stats" className="text-sm font-medium text-bpl-primary hover:text-bpl-secondary">View Full Table &rarr;</a>
      </div>
    </div>
  );
}