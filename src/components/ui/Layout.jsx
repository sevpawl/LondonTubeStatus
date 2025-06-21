import { useState, useEffect } from 'react';
import {
  Header,
  Card,
  LineStatusTile,
  StatsCard,
  AlertsCard,
  ChartCard,
} from '../RootContainer';
import '../../global.css';
import { tubeLines } from '../../utils/constants';
import { fetchTubeStatus, parseLineData } from '../../services/api';

const Layout = () => {
  const [linesData, setLinesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parsedData = await fetchTubeStatus();
        setLinesData(parseLineData(parsedData));
      } catch (error) {
        console.error('error fetching data: ', error);
        setLinesData([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // helper to get line data by name
  const getLineData = (lineName) =>
    linesData.find(
      (line) => line.name.toLowerCase() === lineName.toLowerCase(),
    );

  return (
    <div className="flex flex-col items-center min-w-screen px-20">
      <Header />
      <div className="flex flex-col md:flex-row gap-8 md:gap-8 lg:gap-26 mb-18 px-4 md:px-8">
        <Card>
          <StatsCard linesData={linesData} />
        </Card>
        <Card>
          <AlertsCard linesData={linesData} />
        </Card>
        <Card>
          <ChartCard />
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 max-w-[1460px] w-full px-4 md:px-8 mb-8">
        {tubeLines.map((line) => (
          <LineStatusTile
            key={line.id}
            lineName={line.name}
            lineColor={line.color}
            lineData={getLineData(line.name)}
            isLoading={isLoading}
          />
        ))}
      </div>
    </div>
  );
};

export default Layout;
