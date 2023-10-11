import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fakestore } from '../Constants';

const useRestaurant = () => {
  const params = useParams();

  const { id } = params;
  const [restaurant, setrestaurant] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, [])
  async function getRestaurantInfo() {
    const data = await fetch(fakestore + id)
    const json = await data.json()

    // setrestaurant(Object.values(json))
    console.log("jjs")
    console.log(json)
    setrestaurant(json)





  }
  return restaurant;
}






export default useRestaurant;
