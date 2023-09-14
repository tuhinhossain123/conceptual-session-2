/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({ selectActors, remaining, totalCost }) => {
    console.log(selectActors)
    return (
        <div>
            <h4>Total Actors: {selectActors.length}</h4>
            <h5>remaining: {remaining}</h5>
            <h5>Total Cost: {totalCost}</h5>
            {selectActors.map((actor) =>
                <li key={actor.id}>{actor.name}</li>

            )}
        </div>
    );
};

export default Cart;