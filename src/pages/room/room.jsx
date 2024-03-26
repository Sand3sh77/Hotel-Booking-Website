import React, { useContext, useEffect, useState } from 'react';
import "./room.scss";
import { AuthContext } from "../../context/authContext";
import { Link } from 'react-router-dom';
import { API, IMG_API } from '../../helpers/api';
import { RoomContext } from '../../context/roomContext';

const Room = () => {
    const { currentUser } = useContext(AuthContext);

    const { room, setRoom } = useContext(RoomContext);

    const handleClick = () => {
        setRoom(props);
    }

    const data =
    {
        id: 1,
        imgLink: "https://thespruce.com/thmb/2_Q52GK3rayV1wnqm6vyBvgI3Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg",
        name: "OYO room for couples",
        description: "this is a very good hotel for couples",
        location: "new delhi",
        type: "delux",
        amount: 500,
        max_count: 3,
        contact: 985624561
    };


    return (
        <div className='single-room-container'>
            <div className='left'>
                <div className='image'>
                    <img src={IMG_API + room.image_url} />
                </div>
            </div>
            <div className='right'>
                <div className='top'>Room Details</div>
                <hr />
                <div className='details'>
                    <div className='details_data'><h2>{room.title} of hotel {room.hotel_name}</h2></div>
                    <div className='details_data'><p>{room.description}</p></div>
                    {/* <div className='details_data'>  Location : {room.location}</div> */}
                    <div className='details_data'>  Contact : {room.contact}</div>
                    <div className='details_data'>  Type: {room.type}</div>
                    <div className='details_data'> Max Count : {room.max_count}</div>
                    <div className='details_data'> Rent per day : {room.price_per_day}</div>
                </div>
                <div className='buttons'>
                    <Link to={`/bookNow/${room.id}`} onClick={handleClick}>
                        <button>Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Room