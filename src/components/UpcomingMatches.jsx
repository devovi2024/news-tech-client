import React from 'react';

const UpcomingMatches = () => {
  const matches = [
    {
      team1: 'Germany',
      team2: 'France',
      flag1: 'https://flagcdn.com/16x12/de.png', // German flag (replace with actual flag URL if needed)
      flag2: 'https://flagcdn.com/16x12/fr.png', // French flag (replace with actual flag URL if needed)
      date: 'Tomorrow',
      time: 'M22:30 (CST)',
    },
    {
      team1: 'Germany',
      team2: 'France',
      flag1: 'https://flagcdn.com/16x12/pt.png', // Portuguese flag (replace with actual flag URL if needed)
      flag2: 'https://flagcdn.com/16x12/fr.png', // French flag (replace with actual flag URL if needed)
      date: 'Tomorrow',
      time: 'M22:30 (CST)',
    },
    {
      team1: 'Germany',
      team2: 'France',
      flag1: 'https://flagcdn.com/16x12/it.png', // Italian flag (replace with actual flag URL if needed)
      flag2: 'https://flagcdn.com/16x12/fr.png', // French flag (replace with actual flag URL if needed)
      date: 'Tomorrow',
      time: 'M22:30 (CST)',
    },
    {
      team1: 'Germany',
      team2: 'France',
      flag1: 'https://flagcdn.com/16x12/hr.png', // Croatian flag (replace with actual flag URL if needed)
      flag2: 'https://flagcdn.com/16x12/fr.png', // French flag (replace with actual flag URL if needed)
      date: 'Tomorrow',
      time: 'M22:30 (CST)',
    },
    {
      team1: 'Germany',
      team2: 'France',
      flag1: 'https://flagcdn.com/16x12/de.png', // German flag (replace with actual flag URL if needed)
      flag2: 'https://flagcdn.com/16x12/fr.png', // French flag (replace with actual flag URL if needed)
      date: 'Tomorrow',
      time: 'M22:30 (CST)',
    },
  ];

  return (
    <div className="p-4 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Upcoming Matches</h2>
        <a href="#" className="text-sm text-blue-500 font-semibold hover:underline">
          SEE ALL
        </a>
      </div>

      {/* Matches List */}
      {matches.map((match, index) => (
        <div key={index} className="flex items-center justify-between mb-4">
          {/* Teams and Flags */}
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <img
                src={match.flag1}
                alt={`${match.team1} flag`}
                className="w-8 h-8 rounded-full mr-2"
              />
              <img
                src={match.flag2}
                alt={`${match.team2} flag`}
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div>
              <p className="text-base font-semibold text-gray-800">
                {match.team1} VS {match.team2}
              </p>
              <p className="text-sm text-gray-600">
                {match.date} | {match.time}
              </p>
            </div>
          </div>
          {/* Circular Icon */}
          <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingMatches;