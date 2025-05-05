import '../../global.css';
import { fetchTubeStatus, countStatusDisruptions } from '../../services/api';
import { useState, useEffect } from 'react';
import { statusColors } from '../../utils/Colors';
import { AlertTriangle, Ban, ThumbsUp, Construction, Hourglass, Hammer } from 'lucide-react';

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
      <div className="flex items-center justify-center mb-3">
        <span className="text-xl md:text-2xl font-extrabold drop-shadow-[_-3px_-3px_6px_#ffffff80,_4px_4px_2px_#00000033]">
          overview
        </span>
      </div>

      <div className="mb-2 p-2 rounded-lg bg-gray-100 border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-2.5 h-2.5 rounded-full ${statusColors.goodService}`}></div>
            <span className="text-gray-600 font-semibold text-sm">good service</span>
          </div>
          <div className="flex items-center">
            <ThumbsUp size={16} className="text-black/70 mr-1"></ThumbsUp>
            <span className="text-gray-800 font-bold">{statusCounts.goodService}</span>
          </div>
        </div>
      </div>

      <div className="mb-2 p-2 rounded-lg bg-gray-50 border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-2.5 h-2.5 rounded-full ${statusColors.minorDelays}`}></div>
            <span className="text-gray-600 font-semibold text-sm">minor delays</span>
          </div>
          <div className="flex items-center">
            <Hourglass size={16} className="text-black/70 mr-1"></Hourglass>
            <span className="text-gray-800 font-bold">{statusCounts.minorDelays}</span>
          </div>
        </div>
      </div>

      <div className="mb-2 p-2 rounded-lg bg-gray-50 border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-2.5 h-2.5 rounded-full ${statusColors.severeDelays}`}></div>
            <span className="text-gray-600 font-semibold text-sm">severe delays</span>
          </div>
          <div className="flex items-center">
            <AlertTriangle size={16} className="text-black/70 mr-1"></AlertTriangle>
            <span className="text-gray-800 font-bold">{statusCounts.severeDelays}</span>
          </div>
        </div>
      </div>

      <div className="mb-2 p-2 rounded-lg bg-gray-50 border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-2.5 h-2.5 rounded-full ${statusColors.partClosure}`}></div>
            <span className="text-gray-600 font-semibold text-sm">part closure</span>
          </div>
          <div className="flex items-center">
            <Construction size={16} className="text-black/70 mr-1"></Construction>
            <span className="text-gray-800 font-bold">{statusCounts.partClosure}</span>
          </div>
        </div>
      </div>

      <div className="mb-2 p-2 rounded-lg bg-gray-50 border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-2.5 h-2.5 rounded-full ${statusColors.planned}`}></div>
            <span className="text-gray-600 font-semibold text-sm">planned</span>
          </div>
          <div className="flex items-center">
            <Hammer size={16} className="text-black/70 mr-1"></Hammer>
            <span className="text-gray-800 font-bold">{statusCounts.planned}</span>
          </div>
        </div>
      </div>

      <div className="mb-2 p-2 rounded-lg bg-gray-50 border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-2.5 h-2.5 rounded-full ${statusColors.suspended}`}></div>
            <span className="text-gray-600 font-semibold text-sm">suspended</span>
          </div>
          <div className="flex items-center">
            <Ban size={16} className="text-black/70 mr-1"></Ban>
            <span className="text-gray-800 font-bold">{statusCounts.suspended}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
