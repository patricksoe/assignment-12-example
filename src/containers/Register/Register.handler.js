import axios from "axios";

import constants from "../../constants";

const { API_URL } = constants;

const registerUser = async (userData) => {
  try {
    const { data } = await axios.post(`${API_URL}/register`, userData);
    return data;
  } catch (error) {
    throw error;
  }
};

export default {
  registerUser,
};
