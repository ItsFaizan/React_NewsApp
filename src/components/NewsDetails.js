import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/dataSlice';
import { useParams } from 'react-router-dom';

export const NewsDetails = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { data} = useSelector((state) => state.data);

   useEffect(() => {
    dispatch(fetchData());
    }, [dispatch]);
    
 

  return (
    <div className="container mx-auto p-4">
        {data?.articles?.filter((item, index) => index == id).map((item, index) => (
            <div key={index} className="bg-white rounded shadow-md">
                <img src={item.urlToImage} alt={item.title} className="w-full h-[70vh] object-cover rounded-t" />
                <div className="p-4">
                    <p className="text-xl font-bold text-gray-800 mb-2">{item.title}</p>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-600 ">{item.content}</p>
                    <p className="text-gray-600 font-semibold">Written by: {item.author}</p>
                    <p className="text-gray-600 font-semibold">Published at: {item.publishedAt}</p>
                    </div>
            </div>
            ))}
    </div>
  );
};

