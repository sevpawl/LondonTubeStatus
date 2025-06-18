import { useState, useEffect } from 'react';
import {
  Header,
  Card,
  LineStatusTile,
  StatsCard,
  AlertsCard,
  ChartCard,
  Modal,
} from '../RootContainer';
import '../../global.css';
import { fetchTubeStatus } from '../../services/api';

const Layout = () => {
  const [linesData, setLinesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTubeStatus();
        setLinesData(data);
      } catch (error) {
        setLinesData([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Helper to get line data by name
  const getLineData = (name) =>
    linesData.find((line) => line.name.toLowerCase() === name.toLowerCase());

  return (
    <div className="flex flex-col items-center min-w-screen px-20">
      <Header />
      <div className="flex flex-col md:flex-row gap-8 md:gap-8 lg:gap-26 mb-18 px-4 md:px-8">
        <Card>
          <StatsCard linesData={linesData} />
        </Card>
        <Card>
          <AlertsCard />
        </Card>
        <Card>
          <ChartCard />
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 max-w-[1460px] w-full px-4 md:px-8 mb-8">
        <LineStatusTile title="bakerloo" lineColor="#b44a0b" lineData={getLineData('bakerloo')} isLoading={isLoading}></LineStatusTile>
        <LineStatusTile title="central" lineColor="#e02b24" lineData={getLineData('central')} isLoading={isLoading}></LineStatusTile>
        <LineStatusTile title="circle" lineColor="#ffcc00" lineData={getLineData('circle')} isLoading={isLoading}></LineStatusTile>
        <LineStatusTile title="district" lineColor="#008039" lineData={getLineData('district')} isLoading={isLoading}></LineStatusTile>
        <LineStatusTile title="elizabeth" lineColor="#7055a6" lineData={getLineData('elizabeth')} isLoading={isLoading}></LineStatusTile>
        <LineStatusTile title="hammersmith & city" lineColor="#d79caf" lineData={getLineData('hammersmith & city')} isLoading={isLoading}></LineStatusTile>
        <LineStatusTile title="jubilee" lineColor="#9ea7aa" lineData={getLineData('jubilee')} isLoading={isLoading}></LineStatusTile>
        <LineStatusTile title="metropolitan" lineColor="#a10060" lineData={getLineData('metropolitan')} isLoading={isLoading}></LineStatusTile>
        <LineStatusTile title="northern" lineColor="#1a1a1a" lineData={getLineData('northern')} isLoading={isLoading}></LineStatusTile>
        <LineStatusTile title="overground" lineColor="#f17a10" lineData={getLineData('overground')} isLoading={isLoading}></LineStatusTile>
        <LineStatusTile title="piccadilly" lineColor="#003b8f" lineData={getLineData('piccadilly')} isLoading={isLoading}></LineStatusTile>
        <LineStatusTile title="victoria" lineColor="#00a3e0" lineData={getLineData('victoria')} isLoading={isLoading}></LineStatusTile>
        <LineStatusTile title="waterloo & city" lineColor="#99d1bf" lineData={getLineData('waterloo & city')} isLoading={isLoading}></LineStatusTile>
      </div>
    </div>
  );
};

export default Layout;
