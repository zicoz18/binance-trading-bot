import axios from 'axios';
import { tradeAmountPerPage } from '../variables/trade.variable';

const URL_SERV = "https://binance-trading-bot-server.herokuapp.com";


export const getTrades = async (pageNumber: number) => {
  try {
    // const params = {
    //   filter: {
    //     limit: "5",
    //     order: ["date DESC"]
    //   },
    //   include: ['balance']
    // };
    const response = await axios.get(`${URL_SERV}/trades?filter={"limit": "5", "skip": ${tradeAmountPerPage * pageNumber},"order": ["date DESC"], "include":["balance"]}`);
    return {
      trades: response.data
    };
  } catch (error) {
    throw error;
  }
}

export const getCurrentBalance = async () => {
  try {
    const response = await axios.post(`${URL_SERV}/balances/calculate-current-balance`);
    return {
      balance: response.data
    };
  } catch (error) {
    throw error;
  }
}

export const getHistoricalBalance = async (type: string) => {
  try {
    const response = await axios.get(`${URL_SERV}/balances?filter={"order": ["date DESC"], "where":{"type": "${type}"}}`);
    return {
      [type]: response.data[0].amountInUsdt
    }
  } catch (error) {
    throw error;
  }
}


