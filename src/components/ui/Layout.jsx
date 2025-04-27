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

const Layout = () => {
  return (
    <div className="flex flex-col items-center min-w-screen px-20">
      <Header />
      <div className="flex flex-col md:flex-row gap-8 md:gap-8 lg:gap-26 mb-18 px-4 md:px-8">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 max-w-[1460px] w-full px-4 md:px-8 mb-8">
        <LineStatusTile title="bakerloo" lineColor="#b44a0b"></LineStatusTile>
        <LineStatusTile title="central" lineColor="#e02b24"></LineStatusTile>
        <LineStatusTile title="circle" lineColor="#ffcc00"></LineStatusTile>
        <LineStatusTile title="district" lineColor="#008039"></LineStatusTile>
        <LineStatusTile title="elizabeth" lineColor="#7055a6"></LineStatusTile>
        <LineStatusTile title="hammersmith & city" lineColor="#d79caf"></LineStatusTile>
        <LineStatusTile title="jubilee" lineColor="#9ea7aa"></LineStatusTile>
        <LineStatusTile title="metropolitan" lineColor="#a10060"></LineStatusTile>
        <LineStatusTile title="northern" lineColor="#1a1a1a"></LineStatusTile>
        <LineStatusTile title="overground" lineColor="#f17a10"></LineStatusTile>
        <LineStatusTile title="piccadilly" lineColor="#003b8f"></LineStatusTile>
        <LineStatusTile title="victoria" lineColor="#00a3e0"></LineStatusTile>
        <LineStatusTile title="waterloo & city" lineColor="#99d1bf"></LineStatusTile>
      </div>
    </div>
  );
};

export default Layout;
