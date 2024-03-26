import React, { useContext } from 'react';
import "./bookNow.scss";
import { AuthContext } from "../../context/authContext";

const BookNow = () => {
    const { currentUser } = useContext(AuthContext);

    const data =
    {
        id: 1,
        imgLink: "https://thespruce.com/thmb/2_Q52GK3rayV1wnqm6vyBvgI3Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg",
        name: "OYO room for couples",
        location: "new delhi",
        type: "delux",
        price: 500
    };


    return (
        <div className='single-room-container'>
            <div className='left'>
                <div className='name'>{data.name} near {data.location}</div>
                <div className='image'>
                    <img src={data.imgLink} />
                </div>
            </div>
            <div className='right'>
                <div className='top'>Booking Details</div>
                <hr />
                <div className='details'>
                    <div className='details_data'>Name : {currentUser.full_name}</div>
                    <div className='details_data'> From Date : 2080-07-05</div>
                    <div className='details_data'> To Date : 2080-07-12</div>
                    <div className='details_data'> Max Count : 3</div>
                </div>
                <div className='bottom'>Amount</div>
                <hr />
                <div className='details'>
                    <div className='details_data'>Total Days : 7</div>
                    <div className='details_data'> Rent per day : 1000</div>
                    <div className='details_data'> Total Amount : 7000</div>
                </div>
                <div className='buttons'>
                    <button>Pay Now</button>
                </div>
            </div>
        </div>
    )
}

export default BookNow