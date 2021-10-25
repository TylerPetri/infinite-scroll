import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_DEMO_KEY;

export function InfiniteSpace() {
  const [apods, setApods] = useState([{ hello: 'hi' }]);

  // useEffect(()=>{
  //     const data = axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${process.env.DEMO_KEY}`)
  //     console.log(data)
  // })

  async function logs() {
    const { data } = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
    );
    setApods(data.photos);
    console.log(data);
  }

  return (
    <>
      <h1>InfiniteSpace here</h1>
      <button onClick={logs}>logs</button>
      {apods.map((a) => (
        <h3>{a.id}</h3>
      ))}
    </>
  );
}
