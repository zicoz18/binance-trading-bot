import { GET_CURRENT_BALANCE } from "../types";

export default function balanceReducer(state = {}, action: any) {
  switch (action.type) {
    case GET_CURRENT_BALANCE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}