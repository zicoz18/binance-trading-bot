import TradesList from './trades-list';
import Summary from './summary';

const Main = () => {
  return (
    <div className="center">
      <Summary />
      <TradesList />
    </div>
  );
}

export default Main;