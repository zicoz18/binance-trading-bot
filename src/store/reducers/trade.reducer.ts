import {
  GET_TRADES
} from '../types';

export default function tradeReducer(state = {}, action: any) {
  switch (action.type) {
    case GET_TRADES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}