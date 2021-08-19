import { combineReducers } from 'redux';

import trades from './trade.reducer';
import balance from './balance.reducer';
import historicalBalance from './historical-balance.reducer';


const appReducers = combineReducers({
  trades,
  balance,
  historicalBalance,
});

export default appReducers;