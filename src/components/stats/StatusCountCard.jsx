import '../../global.css';
import { fetchTubeStatus, countStatusDisruptions } from '../../services/api';
import { useState, useEffect } from 'react';

const StatsCard = () => {
  const [statusCounts, setStatusCounts] = useState({
    goodService: 0,
    minorDelays: 0,
    severeDelays: 0,
    partClosure: 0,
    planned: 0,
    suspended: 0,
  });

  useEffect(() => {
    const fetchStatsCardData = async () => {
      try {
        const data = await fetchTubeStatus();
        const counts = countStatusDisruptions(data);
        setStatusCounts(counts);
      } catch (error) {
        console.log('error fetching status counts: ', error);
      }
    };

    fetchStatsCardData();
  }, []);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center justify-center mb-4 md:mb-6">
        <span className="text-2xl md:text-3xl font-extrabold drop-shadow-[_-3px_-3px_6px_#ffffff80,_4px_4px_2px_#00000033]">
          overview
        </span>
      </div>
      <div className="space-y-3 md:space-y-4 w-full px-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-semibold text-sm md:text-base">good service</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-green-500"></div>
            <span className="text-gray-800 font-bold">{statusCounts.goodService}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-semibold text-sm md:text-base">minor delays</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-yellow-50"></div>
            <span className="text-gray-800 font-bold">{statusCounts.minorDelays}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-semibold text-sm md:text-base">severe delays</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-red-500"></div>
            <span className="text-gray-800 font-bold">{statusCounts.severeDelays}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-semibold text-sm md:text-base">part closure</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-red-600"></div>
            <span className="text-gray-800 font-bold">{statusCounts.partClosure}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-semibold text-sm md:text-base">planned</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-purple-500"></div>
            <span className="text-gray-800 font-bold">{statusCounts.planned}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-semibold text-sm md:text-base">suspended</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-black"></div>
            <span className="text-gray-800 font-bold">{statusCounts.suspended}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
