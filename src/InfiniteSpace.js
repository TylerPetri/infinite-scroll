import { useEffect, useState } from 'react';
import axios from 'axios';

export function InfiniteSpace() {
  const [apods, setApods] = useState([
    { hello: 'hello world' },
    { hello: 'sup' },
  ]);

  //   useEffect(()=>{
  //       const data = axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${process.env.DEMO_KEY}`)
  //       console.log(data)
  //   })

  function logs() {
    console.log(process.env.DEMO_KEY);
  }

  return (
    <>
      <h1>InfiniteSpace here</h1>
      <button onClick={logs}>logs</button>
      {apods.maps((a) => (
        <h3>{a.hello}</h3>
      ))}
    </>
  );
}
