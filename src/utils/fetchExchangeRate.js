import customFetch from "../services/customFetch.js";

const API_KEY = "209331add407d2d6baa7c9c9";
const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

let data = await customFetch(url);
data = data.conversion_rates.NGN;
export { data };
