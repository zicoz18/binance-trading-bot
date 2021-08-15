import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTrades } from '../store/actions';
import { RootStateOrAny } from 'react-redux';

const TradesList = () => {
  /* useSelector allows you to get data from redux store state */
  const trades = useSelector((state: RootStateOrAny) => state.trades)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrades())
  }, [dispatch])

  return (
    <>
      This is TradeList
      {
        trades.trades ?
          trades.trades.map((item: any) => (
            <div key={item.id}>
              {item.symbol}
              <br />
              {item.price}
              <br />
              {item.quantity}
              <br />
              {item.side}
              <br />
              {item.date}
              <br />
              <br />
            </div>
          ))
          : null
      }


    </>
  )
}

export default TradesList;
