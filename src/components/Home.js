
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/dataSlice';


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
    <div className='bg-gray-100 min-h-screen'>
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-4 mt-16 text-center'>Latest News</h1>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {data.articles.map((item, index) => (
          <div
            key={index}
            className='bg-white rounded shadow-md'
          >
            <img src={item.urlToImage} alt={item.title} className='w-full h-32 object-cover rounded-t' />
            <div className='p-4'>
              <p className='text-xl font-bold text-gray-800 mb-2'>{item.title}</p>
              <p className='text-gray-600'>{item.author}</p>
              <button className='bg-blue-600 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600 hover:shadow-lg transition duration-300'>
  Read More
</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default Home;
