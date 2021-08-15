import * as api from '../../api';
import {
  GET_TRADES
} from '../types';

export const getTrades = () => ({
  type: GET_TRADES,
  payload: api.getTrades()
})
