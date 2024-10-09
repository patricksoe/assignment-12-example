import axios from "axios";

import constants from "../../constants";

const { API_URL } = constants;

const fetchProducts = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/products`);
    return data;
  } catch (error) {
    throw error;
  }
};

export default {
  fetchProducts,
};
