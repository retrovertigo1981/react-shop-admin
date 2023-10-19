import axios from 'axios';
import endPoints from '@services/api';

const addProducts = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.post(endPoints.products.addProducts, body, config);
  return response.data;
};

export { addProducts };
