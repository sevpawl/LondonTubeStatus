import '../../global.css';
import { fetchTubeStatus, countStatusDisruptions } from '../../services/api';
import { useState, useEffect } from 'react';
import StatusCountCardItems from './StatusCountCardItems';
import {
  AlertTriangle,
  Ban,
  ThumbsUp,
  Construction,
  Hourglass,
  Hammer,
  Loader2,
} from 'lucide-react';

const StatsCard = () => {
  const [statusCounts, setStatusCounts] = useState({
    goodService: 0,
    minorDelays: 0,
    severeDelays: 0,
    partClosure: 0,
    planned: 0,
    suspended: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  // fetch data
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
    // loading
    setIsLoading(true);
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
        {/* loading state management */}
        {isLoading ? (
          <div>
            <Loader2 size={42} className="animate-spin text-orange-300 mt-10"></Loader2>
          </div>
        ) : (
          <div>
            <StatusCountCardItems
              icon={<ThumbsUp size={16} className="text-green-600" />}
              statusType="good service"
              statusCount={statusCounts.goodService}
              bgColor="bg-green-200"
            />
            <StatusCountCardItems
              icon={<Hourglass size={16} className="text-yellow-600" />}
              statusType="minor delays"
              statusCount={statusCounts.minorDelays}
              bgColor="bg-yellow-200"
            />
            <StatusCountCardItems
              icon={<AlertTriangle size={16} className="text-red-600" />}
              statusType="severe delays"
              statusCount={statusCounts.severeDelays}
              bgColor="bg-red-200"
            />
            <StatusCountCardItems
              icon={<Construction size={16} className="text-orange-600" />}
              statusType="part closure"
              statusCount={statusCounts.partClosure}
              bgColor="bg-orange-200"
            />
            <StatusCountCardItems
              icon={<Hammer size={16} className="text-blue-600" />}
              statusType="planned"
              statusCount={statusCounts.planned}
              bgColor="bg-blue-200"
            />
            <StatusCountCardItems
              icon={<Ban size={16} className="text-gray-700" />}
              statusType="suspended"
              statusCount={statusCounts.suspended}
              bgColor="bg-gray-300"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
