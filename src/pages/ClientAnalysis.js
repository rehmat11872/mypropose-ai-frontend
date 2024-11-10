import React from 'react';

export default function ClientAnalysis() {
  return (
    <div className="flex min-h-screen flex-col bg-white overflow-x-hidden font-sans">
      <div className="flex flex-col h-full">
        <div className="flex justify-center py-5 px-40 flex-1">
          <div className="flex flex-col max-w-[960px] w-full">
            {/* Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex flex-col gap-3 min-w-72">
                <p className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">Client Analysis</p>
                <p className="text-[#637588] text-base font-normal">Insights into the quality of your client relationships</p>
              </div>
            </div>

            {/* Client Quality Score */}
            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Client Quality Score</h3>
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 p-6 bg-[#f0f2f4] rounded-xl">
                <p className="text-[#111418] text-base font-medium">Client Quality</p>
                <p className="text-[#111418] text-2xl font-bold leading-tight">8.2</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex justify-between">
                <p className="text-[#111418] text-base font-medium">Client Quality Score</p>
              </div>
              <div className="bg-[#dce0e5] rounded">
                <div className="h-2 bg-[#111418] rounded" style={{ width: '82%' }}></div>
              </div>
              <p className="text-[#637588] text-sm">8.2/10</p>
            </div>

            {/* Risk Meter */}
            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Risk Meter</h3>
            <div className="flex flex-wrap gap-4 p-4">
              {['Medium', '$100,000', '85%'].map((item, index) => (
                <div key={index} className="flex min-w-[158px] flex-1 flex-col gap-2 p-6 border border-[#dce0e5] rounded-xl">
                  <p className="text-[#111418] text-base font-medium">
                    {index === 0 ? 'Risk Level' : index === 1 ? 'Total Spend' : 'Success Rate'}
                  </p>
                  <p className="text-[#111418] text-2xl font-bold leading-tight">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex justify-between">
                <p className="text-[#111418] text-base font-medium">Risk Meter</p>
              </div>
              <div className="bg-[#dce0e5] rounded">
                <div className="h-2 bg-[#111418] rounded" style={{ width: '60%' }}></div>
              </div>
              <p className="text-[#637588] text-sm">60%</p>
            </div>

            {/* Key Metrics */}
            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Key Metrics</h3>
            <div className="grid grid-cols-2 gap-4 p-4">
              {[
                ['Total Spend', '$200,000'],
                ['Project Size', '10'],
                ['Payment History', 'On Time'],
                ['Feedback', 'Positive'],
                ['Success Rate', '90%'],
              ].map(([title, value], index) => (
                <div key={index} className={`flex flex-col gap-1 border-t border-[#dce0e5] py-4 ${index % 2 === 0 ? 'pr-2' : 'pl-2'}`}>
                  <p className="text-[#637588] text-sm">{title}</p>
                  <p className="text-[#111418] text-sm">{value}</p>
                </div>
              ))}
            </div>

            {/* Trends */}
            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Trends</h3>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              {['Total Spend', 'Success Rate', 'Project Size'].map((title, index) => (
                <div key={index} className="flex min-w-72 flex-1 flex-col gap-2 p-6 border border-[#dce0e5] rounded-xl">
                  <p className="text-[#111418] text-base font-medium">{title}</p>
                  <p className="text-[#111418] text-[32px] font-bold leading-tight truncate">
                    {title === 'Total Spend' ? '$200,000' : title === 'Success Rate' ? '90%' : '10'}
                  </p>
                  <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                    <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                      <path
                        d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                        fill="url(#paint0_linear_1131_5935)"
                      ></path>
                      <path
                        d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                        stroke="#637588"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>
                      <defs>
                        <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#f0f2f4"></stop>
                          <stop offset="1" stopColor="#f0f2f4" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="flex justify-around">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((month) => (
                        <p key={month} className="text-[#637588] text-[13px] font-bold tracking-[0.015em]">{month}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


