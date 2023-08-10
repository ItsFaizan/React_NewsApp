// DataComponent.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/dataSlice'; // Your data slice file

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.articles.map((item) => (
          <li>
            {item.title}
            <h1>{item.author}</h1>
           
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
