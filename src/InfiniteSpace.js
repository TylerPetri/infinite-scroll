import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_DEMO_KEY;

export function InfiniteSpace() {
  const [apods, setApods] = useState([{ hello: 'hi' }]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${API_KEY}`
      );
      setApods(data.photos);
      setPage(2);
      console.log(data.photos);
    }
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
  }

  async function fetchMoreListItems() {
    const { data } = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=${API_KEY}`
    );
    setApods([...apods, ...data.photos]);
    setPage(page + 1);
    setIsFetching(false);
  }

  return (
    <>
      <h1>InfiniteSpace here</h1>
      <Container maxWidth='sm'>
        {apods.map((a) => (
          <img
            src={a.img_src}
            alt='rover'
            key={a.id}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        ))}
      </Container>
    </>
  );
}
