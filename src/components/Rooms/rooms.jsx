import React from 'react';
import "./rooms.scss";

const Rooms = ({ props }) => {
    const { imgLink, name, location, price, type } = props;

    return (
        <div className='room-container'>
            <div className='image'>
                <img src={imgLink} />
            </div>
            <div className='details'>
                <div className='name'>
                    {/* <h2> */}
                    {name} near {location}
                    {/* </h2> */}
                </div>
                <div className="phNumber">Phone Number : 9856093046</div>
                <div className="type">Type : {type}</div>
                <div className='buttons'>
                    <button>Book Now</button>
                    <button>View Details</button>
                </div>
            </div>
        </div >
    )
}

export default Rooms