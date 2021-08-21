import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTrades } from '../store/actions';
import { RootStateOrAny } from 'react-redux';
import Trade from './trade';
import { Button } from 'react-bootstrap';

const TradesList = () => {
  /* useSelector allows you to get data from redux store state */
  const [pageNumber, setPageNumber] = useState(0);
  const tradesStore = useSelector((state: RootStateOrAny) => state.trades)
  const dispatch = useDispatch();

  const decrementPageNumber = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    } else {
      alert('Cannot get more items.');
    }
  }

  const incrementPageNumber = () => {
    setPageNumber(pageNumber + 1);
  }

  useEffect(() => {
    dispatch(getTrades(pageNumber))
  }, [pageNumber, dispatch])

  return (
    <>
      {
        tradesStore.trades ?
          <div className="">
            <div className="trade-list-title">
              <h2>
                Trades
              </h2>
            </div>
            <div className="trade-list ">
              {tradesStore.trades.map((item: any) => (
                <Trade item={item} key={item.id} />
              ))}
            </div>
          </div>
          : null
      }
      <div className="button-container">
        <Button className="left-button button" onClick={() => { decrementPageNumber() }} >
          {'<'}
        </Button>
        <Button className="right-button button" onClick={() => { incrementPageNumber() }} >
          {'>'}
        </Button>
      </div>
    </>
  )
}

export default TradesList;
