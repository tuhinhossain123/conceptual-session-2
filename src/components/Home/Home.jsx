/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css'
import 'sweetalert2/src/sweetalert2.scss'

const Home = () => {
    const [allActors, setAllActors] = useState([]);
    const [selectActors, setSelectActors] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAllActors(data))
    }, [])
    const handleSelectActor = (actor) => {
        const isExit = selectActors.find((item) => item.id == actor.id);
        let count = actor.salary;
        if (isExit) {
            alert('allready booked')
        }
        else {
            selectActors.forEach((item) => {
                count = count + item.salary;
            })
            const totalRemaining = 20000 - count;

            if (count > 20000) {
                return alert('sorry your balance is low');
            }
            else {
                setTotalCost(count);
                setRemaining(totalRemaining)
                setSelectActors([...selectActors, actor])
            }

        }

    }
    console.log(selectActors)

    return (
        <div className='container'>
            <div className="home-container">
                <div className="card-container">
                    {allActors.map((actor) => (
                        <div key={actor.id} className="card">
                            <div className="card-img">
                                <img className='photo' src={actor.image} alt="" />
                            </div>
                            <h3>{actor.name}</h3>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, officia.</small>
                            <div className="info">
                                <p>Salary:{actor.salary}</p>
                                <p>{actor.role}</p>
                            </div>
                            <button onClick={() => handleSelectActor(actor)} className='card--btn'>select</button>
                        </div>
                    ))}
                </div>
                <div className="cart">
                    <Cart selectActors={selectActors} remaining={remaining} totalCost={totalCost}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;