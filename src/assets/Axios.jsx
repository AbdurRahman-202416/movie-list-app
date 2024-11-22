import React from 'react'
import axios from 'axios'
const Axios = () => {
  const instance = axios.create({
    baseURL: 'https://dummyapi.online/api/movie',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
  return ( instance)
}

export default Axios
