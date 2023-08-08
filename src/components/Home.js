import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataFromAPI } from '../redux/action';

const Home = () => {
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataFromAPI());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {console.log(data)}
      {data.articles.map((article, index) => (
        <div key={index}>
          <h2>{article.url}</h2>
        </div>
      ))}
    </div>
  );
};

export default Home;
