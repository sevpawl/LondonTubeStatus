import { Header, Card, LineStatusTile } from '../RootContainer';

const Layout = () => {
  return (
    <div className="mx-12 flex flex-col items-center">
      <Header />
      <Card />
      <div className="grid grid-rows-4 gap-6 max-w-[900px] w-full">
        <LineStatusTile></LineStatusTile>
        <LineStatusTile></LineStatusTile>
        <LineStatusTile></LineStatusTile>
      </div>
    </div>
  );
};

export default Layout;
