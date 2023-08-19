import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/dataSlice';
import { useParams } from 'react-router-dom';

export const NewsCategory = () => {
  const { categoryName } = useParams(); 

  const dispatch = useDispatch();
  const { data} = useSelector((state) => state.data);

 useEffect(() => {
  dispatch(fetchData());
  }, [dispatch]);


  const filteredNews = data?.articles?.filter(
    (article) =>
      (article.title && article.title.toLowerCase().includes(categoryName.toLowerCase())) ||
      (article.description && article.description.toLowerCase().includes(categoryName.toLowerCase())) ||
      (article.content && article.content.toLowerCase().includes(categoryName.toLowerCase())) ||
      (article.url && article.url.toLowerCase().includes(categoryName.toLowerCase()))
  );


  
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-2 mt-20">Category: {categoryName}</h1>
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filteredNews?.map((item, index) => (
        <div key={index} className="bg-white rounded shadow-md">
          <img src={item.urlToImage} alt={item.title} className="w-full h-[50vh] object-cover rounded-t" />
          <div className="p-4">
            <p className="text-xl font-bold text-gray-800 mb-2">{item.title}</p>
            <p className="text-gray-600">{item.author}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600 transition duration-300 inline-block">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};
