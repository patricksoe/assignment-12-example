import axios from "axios";

import constants from "../../constants";

const { API_URL } = constants;

const loginUser = async (userCredentials) => {
  try {
    const { data } = await axios.post(`${API_URL}/login`, userCredentials);
    return data;
  } catch (error) {
    throw error;
  }
};

export default {
  loginUser,
};
