import { Header, Card, LineStatusTile, StatsCard, AlertsCard, ChartCard } from '../RootContainer';
import '../../global.css';

const Layout = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex flex-row gap-18 mb-12">
        <Card>
          <StatsCard />
        </Card>
        <Card>
          <AlertsCard />
        </Card>
        <Card>
          <ChartCard />
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1220px] w-full mb-8">      
        <LineStatusTile title="bakerloo" color="#b44a0b"></LineStatusTile>
        <LineStatusTile title="central" color="#e02b24"></LineStatusTile>
        <LineStatusTile title="circle" color="#ffcc00"></LineStatusTile>
        <LineStatusTile title="district" color="#008039"></LineStatusTile>
        <LineStatusTile title="elizabeth" color="#7055a6"></LineStatusTile>
        <LineStatusTile title="hammersmith & city" color="#d79caf"></LineStatusTile>
        <LineStatusTile title="jubilee" color="#9ea7aa"></LineStatusTile>
        <LineStatusTile title="metropolitan" color="#a10060"></LineStatusTile>
        <LineStatusTile title="northern" color="#1a1a1a"></LineStatusTile>
        <LineStatusTile title="overground" color="#f17a10"></LineStatusTile>
        <LineStatusTile title="piccadilly" color="#003b8f"></LineStatusTile>
        <LineStatusTile title="victoria" color="#00a3e0"></LineStatusTile>
        <LineStatusTile title="waterloo & city" color="#99d1bf"></LineStatusTile>
      </div>
    </div>
  );
};

export default Layout;
