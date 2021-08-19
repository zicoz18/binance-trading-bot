import { GET_HISTORICAL_BALANCE } from "../types";

export default function historicalBalanceReducer(state = {}, action: any) {
  switch (action.type) {
    case GET_HISTORICAL_BALANCE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}