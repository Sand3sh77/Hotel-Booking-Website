import React, { useContext } from 'react';
import "./rooms.scss";
import { Link } from 'react-router-dom';
import { IMG_API } from '../../helpers/api';
import { RoomContext } from '../../context/roomContext';

const Rooms = ({ props }) => {
    const { room_id, image_url, title, description, hotel_name, price_per_day, contact, type, max_count } = props;

    const { setRoom } = useContext(RoomContext);

    const handleClick = () => {
        setRoom(props);
    }

    return (
        <div className='room-container'>
            <div className='image'>
                <img src={IMG_API + image_url} />
            </div>
            <div className='details'>
                <div className='name'>
                    {title} of hotel {hotel_name}
                </div>
                <p>{description}</p>
                <div className="contact">Contact : {contact}</div>
                <div className="price">Price Per Day : {price_per_day}</div>
                <div className="maxCount">Max Count : {max_count}</div>
                <div className="type">Type : {type}</div>
                <div className='buttons'>
                    <Link to={`/bookNow/${room_id}`} onClick={handleClick}>
                        <button>Book Now</button>
                    </Link>
                    <Link to={`/room/${room_id}`} onClick={handleClick}>
                        <button>View Details</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Rooms