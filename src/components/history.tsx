import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { BalanceType } from '../enums/balance-type.enum';
import { getHistoricalBalance } from '../store/actions';
// import { getDaily, getMonthly, getWeekly } from '../store/actions';


const History = (props: any) => {
  /* useSelector allows you to get data from redux store state */
  const historicalBalanceStore = useSelector((state: RootStateOrAny) => state.historicalBalance)
  const balanceStore = useSelector((state: RootStateOrAny) => state.balance)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHistoricalBalance(BalanceType.daily));
    dispatch(getHistoricalBalance(BalanceType.weekly));
    dispatch(getHistoricalBalance(BalanceType.monthly));
  }, [dispatch])

  const calculateBalanceDifference = (type: string) => {
    const storeName = `${type}Store`;
    const historicalBalance = parseFloat((balanceStore.balance - historicalBalanceStore[type]).toFixed(3));
    if (historicalBalance > 0) {
      return `+${historicalBalance}`
    }
    return historicalBalance;
  }

  const showHistoricalBalance = (type: string) => {
    return balanceStore.balance && historicalBalanceStore[type] ?
      calculateBalanceDifference(type)
      : '-'
  }

  return (
    <div className="history-container">
      <div className="history-element">
        Daily: {
          showHistoricalBalance(BalanceType.daily)
        } $
      </div>
      <div className="history-element">
        Weekly: {
          showHistoricalBalance(BalanceType.weekly)
        } $
      </div>
      <div className="history-element">
        Monthly: {
          showHistoricalBalance(BalanceType.monthly)
        } $
      </div>
    </div>
  );
}

export default History;