
import Shimmer from './Shimmer';
import UserContext from './utils/UserContext';
import useRestaurant from './utils/useRestaurant';
import React, { useContext } from 'react';

export const RestaurantsMenu = () => {
    const user = useContext(UserContext)
    const Card = ({ id, image, price, category }) => {
        return (
            <div className='div-class'>
                <img alt="no" src={image} />
                <h1>Restaurant id :{id}  </h1>
                <h1>{category}</h1>
                <h1>{user.name}</h1>
                <h1>{price}</h1>

            </div>
        )
    }
    const restaurant = useRestaurant()
    // console.log(restaurant)
    if (!restaurant) {
        return <Shimmer />
    }
    return (

        <div className='divv' >

            <Card {...restaurant} />
        </div>
    )




}
