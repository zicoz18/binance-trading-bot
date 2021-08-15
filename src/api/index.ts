import axios from 'axios';

const URL_SERV = "https://binance-trading-bot-server.herokuapp.com";

export const getTrades = async () => {
  try {
    const params = {
      filter: {
        limit: "5",
        order: ["date DESC"]
      }
    };
    const response = await axios.get(`${URL_SERV}/trades?filter={"limit": "5", "order": ["date DESC"]}`);
    console.log('request sent to get trade data.');
    return {
      trades: response.data
    };
  } catch (error) {
    throw error;
  }
}
