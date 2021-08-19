import axios from 'axios';

const URL_SERV = "https://binance-trading-bot-server.herokuapp.com";

export const getTrades = async () => {
  try {
    // const params = {
    //   filter: {
    //     limit: "5",
    //     order: ["date DESC"]
    //   },
    //   include: ['balance']
    // };
    console.log('request sent to get trade data.')
    const response = await axios.get(`${URL_SERV}/trades?filter={"limit": "5", "order": ["date DESC"], "include":["balance"]}`);
    console.log('Recieved data: ', response.data);
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
    console.log('Calculated balance: ', response.data);
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
    console.log(`Last ${type} balance: `, response.data);
    return {
      [type]: response.data[0].amountInUsdt
    }
  } catch (error) {
    throw error;
  }
}


