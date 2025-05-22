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
    <div className="flex flex-col h-full w-full items-center justify-center px-4 py-4 cursor-default">
      <div className="flex items-center justify-center mt-[-8px]">
        <span className="text-2xl md:text-3xl not-first:text-neutral-100/80 font-extrabold drop-shadow-[_-3px_-3px_6px_#ffffff80,_4px_4px_2px_#00000033] mb-6">
          overview
        </span>
      </div>
      <div className="w-full max-w-md flex flex-col items-center">
        {/* good service */}
        <div className="w-full mb-2.5 p-2 rounded-lg flex items-center justify-between bg-neutral-100/80 transition-transform hover:-translate-y-0.5 hover:shadow-lg group cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center bg-green-200 rounded-full w-7 h-7 mr-1 group-hover:scale-110 transition-transform ml-2">
              <ThumbsUp size={16} className="text-green-600" />
            </div>
            <span className="text-gray-600 font-semibold text-sm lowercase px-6">
              good service
            </span>
          </div>
          <span className="text-gray-600 font-bold text-sm lowercase mr-2">
            {statusCounts.goodService}
          </span>
        </div>

        {/* minor delays */}
        <div className="w-full mb-2.5 p-2 rounded-lg flex items-center justify-between bg-neutral-100/80 transition-transform hover:-translate-y-0.5 hover:shadow-lg group cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center bg-yellow-200 rounded-full w-7 h-7 mr-1 group-hover:scale-110 transition-transform ml-2">
              <Hourglass size={16} className="text-yellow-600" />
            </div>
            <span className="text-gray-600 font-semibold text-sm lowercase px-6">
              minor delays
            </span>
          </div>
          <span className="text-gray-800 font-bold text-sm lowercase mr-2">
            {statusCounts.minorDelays}
          </span>
        </div>

        {/* severe delays */}
        <div className="w-full mb-2.5 p-2 rounded-lg flex items-center justify-between bg-neutral-100/80 transition-transform hover:-translate-y-0.5 hover:shadow-lg group cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center bg-red-200 rounded-full w-7 h-7 mr-1 group-hover:scale-110 transition-transform ml-2">
              <AlertTriangle size={16} className="text-red-600" />
            </div>
            <span className="text-gray-600 font-semibold text-sm lowercase px-6">
              severe delays
            </span>
          </div>
          <span className="text-gray-800 font-bold text-sm lowercase mr-2">
            {statusCounts.severeDelays}
          </span>
        </div>

        {/* part closure */}
        <div className="w-full mb-2.5 p-2 rounded-lg flex items-center justify-between bg-neutral-100/80 transition-transform hover:-translate-y-0.5 hover:shadow-lg group cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center bg-orange-200 rounded-full w-7 h-7 mr-1 group-hover:scale-110 transition-transform ml-2">
              <Construction size={16} className="text-orange-600" />
            </div>
            <span className="text-gray-600 font-semibold text-sm lowercase px-6">
              part closure
            </span>
          </div>
          <span className="text-gray-800 font-bold text-sm lowercase mr-2">
            {statusCounts.partClosure}
          </span>
        </div>

        {/* planned */}
        <div className="w-full mb-2.5 p-2 rounded-lg flex items-center justify-between bg-neutral-100/80 transition-transform hover:-translate-y-0.5 hover:shadow-lg group cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center bg-blue-200 rounded-full w-7 h-7 mr-1 group-hover:scale-110 transition-transform ml-2">
              <Hammer size={16} className="text-blue-600" />
            </div>
            <span className="text-gray-600 font-semibold text-sm lowercase px-6">
              planned
            </span>
          </div>
          <span className="text-gray-800 font-bold text-sm lowercase mr-2">
            {statusCounts.planned}
          </span>
        </div>

        {/* suspended */}
        <div className="w-full mb-2.5 p-2 rounded-lg flex items-center justify-between bg-neutral-100/80 transition-transform hover:-translate-y-0.5 hover:shadow-lg group cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center bg-gray-300 rounded-full w-7 h-7 mr-1 group-hover:scale-110 transition-transform ml-2">
              <Ban size={16} className="text-gray-700" />
            </div>
            <span className="text-gray-600 font-semibold text-sm lowercase px-6">
              suspended
            </span>
          </div>
          <span className="text-gray-800 font-bold text-sm lowercase mr-2">
            {statusCounts.suspended}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
