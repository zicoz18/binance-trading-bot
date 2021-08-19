import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTrades } from '../store/actions';
import { RootStateOrAny } from 'react-redux';
import Trade from './trade';

const TradesList = () => {
  /* useSelector allows you to get data from redux store state */
  const tradesStore = useSelector((state: RootStateOrAny) => state.trades)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrades())
  }, [dispatch])

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
    </>
  )
}

export default TradesList;
