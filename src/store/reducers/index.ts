import { combineReducers } from 'redux';

import trades from './trade.reducer';
import balances from './balance.reducer';

const appReducers = combineReducers({
  trades,
  balances
});

export default appReducers;