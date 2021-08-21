import * as api from '../../api';
import {
  GET_CURRENT_BALANCE,
  GET_HISTORICAL_BALANCE,
  GET_TRADES,
} from '../types';

export const getTrades = (pageNumber: number) => ({
  type: GET_TRADES,
  payload: api.getTrades(pageNumber)
})

export const getCurrentBalance = () => ({
  type: GET_CURRENT_BALANCE,
  payload: api.getCurrentBalance()
})

export const getHistoricalBalance = (type: string) => ({
  type: GET_HISTORICAL_BALANCE,
  payload: api.getHistoricalBalance(type)
})