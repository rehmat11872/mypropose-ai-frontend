import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7fa] font-sans">
      <div className="flex flex-col h-full py-6 px-8 max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-700">Welcome back, Rehmat</h1>
          <button className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg">
            Upgrade to Pro
          </button>
        </div>

        {/* Proposal Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {[
            { label: 'Total Proposals', value: '1.3k' },
            { label: 'Active Proposals', value: '5' },
            { label: 'Won Proposals', value: '1.2k' },
            { label: 'Proposal Value', value: '$15.3M' },
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-white border rounded-lg text-center shadow-sm">
              <p className="text-gray-500 font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* New Proposal Section */}
        <div className="flex items-center justify-between p-6 bg-white border rounded-lg shadow-sm mb-6">
          <p className="text-gray-700 font-semibold">Create a new proposal</p>
          <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-lg">New Proposal</button>
        </div>

        {/* Proposal Timeline */}
        <div className="grid grid-cols-[40px_1fr] gap-x-4 mb-6">
          {[
            { status: 'New proposal', client: 'Acme Co', time: '2 hours ago' },
            { status: 'Proposal won', client: 'Acme Co', time: '1 day ago' },
            { status: 'New proposal', client: 'Acme Co', time: '2 days ago' },
            { status: 'Proposal won', client: 'Acme Co', time: '3 days ago' },
            { status: 'New proposal', client: 'Acme Co', time: '4 days ago' },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-gray-700 mb-1"></div>
                {index < 4 && <div className="w-[2px] bg-gray-300 flex-1"></div>}
              </div>
              <div className="py-2">
                <p className="text-gray-700 font-medium">{item.status}: {item.client}</p>
                <p className="text-gray-500 text-sm">{item.time}</p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Client Quality Scores */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Client Quality Scores</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {Array(3).fill().map((_, index) => (
            <div key={index} className="p-6 bg-white border rounded-lg shadow-sm flex items-center gap-4">
              <div>
                <p className="text-gray-500 text-sm">Acme Co</p>
                <p className="text-gray-700 font-semibold text-lg">100% score</p>
              </div>
              <div className="w-full h-32 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/4e7ac1b8-ad54-4f49-8a15-a97939d1f7d5.png")` }}></div>
            </div>
          ))}
        </div>

        {/* Portfolio Matching Suggestions */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Portfolio Matching Suggestions</h2>
        <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                {['Client', 'Match Score', 'Proposals', 'Last Proposal', 'Average Response Time'].map((header, index) => (
                  <th key={index} className="text-left text-gray-600 font-medium px-4 py-3">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { client: 'Acme Co', score: 95, proposals: 5, last: '2 days ago', response: '1 hour' },
                { client: 'Acme Co', score: 90, proposals: 8, last: '4 days ago', response: '2 hours' },
                { client: 'Acme Co', score: 85, proposals: 6, last: '3 days ago', response: '3 hours' },
                { client: 'Acme Co', score: 80, proposals: 7, last: '5 days ago', response: '4 hours' },
              ].map((row, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-3 text-gray-700">{row.client}</td>
                  <td className="px-4 py-3 text-gray-700 flex items-center gap-2">
                    <div className="w-24 h-1 bg-gray-300 rounded-full">
                      <div className="bg-blue-500 h-1 rounded-full" style={{ width: `${row.score}%` }}></div>
                    </div>
                    <span>{row.score}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{row.proposals}</td>
                  <td className="px-4 py-3 text-gray-500">{row.last}</td>
                  <td className="px-4 py-3 text-gray-500">{row.response}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
