import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axios.get(endPoint);
    const data = JSON.parse(JSON.stringify(response.data));
    setData(data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [endPoint]);

  return data;
};

export default useFetch;
