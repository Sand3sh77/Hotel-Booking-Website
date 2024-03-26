import React, { useContext, useState } from 'react';
import "./profile.scss";
import { AuthContext } from '../../context/authContext';

const Profile = () => {
    const [profile, setProfile] = useState(true);
    const { currentUser } = useContext(AuthContext);

    const booking = [
        {
            id: 1,
            name: "hello",
            checkIn: "2050-07-08",
            checkOut: "2050-07-09",
            amount: 1000,
            status: "verified"
        },
        {
            id: 2,
            name: "hello",
            checkIn: "2050-07-08",
            checkOut: "2050-07-09",
            amount: 1000,
            status: "cancelled"
        },
        {
            id: 3,
            name: "hello",
            checkIn: "2050-07-08",
            checkOut: "2050-07-09",
            amount: 1000,
            status: "verified"
        },
    ]

    return (
        <div className='profile-container'>
            <div className='top'>
                <a onClick={() => setProfile(true)} className={profile && "active"}>Profile</a>
                <a onClick={() => setProfile(false)} className={profile || "active"}>Booking</a>
            </div>
            <hr />
            {profile ?
                <div className='profile-section'>
                    <div className='heading'>My Profile</div>
                    <div className='item-data'><h5>Name : </h5>{currentUser.full_name}</div>
                    <div className='item-data'><h5>Email : </h5> {currentUser.email}</div>
                    <div className='isAdmin item-data'>
                        <h5>IsAdmin:</h5>
                        <div className='admin-data' style={{
                            color: currentUser.role === "admin" ? "green" : "red",
                            borderColor: currentUser.role === "admin" ? "green" : "red",
                            backgroundColor: currentUser.role === "admin" ? "rgba(0, 128, 0, 0.1)" : "rgba(255, 0, 0, 0.1)"
                        }}>
                            {currentUser.role === "admin" ? "Yes" : "No"}
                        </div>
                    </div>
                </div>
                :
                <div className='booking-section'>
                    {booking.map((item) => {
                        return (
                            <div className='item' key={item.id}>
                                <div className="name">{item.name}</div>
                                <div className='id item-data'><h5>BookingId : </h5>{item.id}</div>
                                <div className='checkIn item-data'><h5>CheckIn : </h5>{item.checkIn}</div>
                                <div className='checkOut item-data'><h5>CheckOut : </h5>{item.checkOut}</div>
                                <div className='amount item-data'><h5>Amount : </h5>{item.amount}</div>
                                <div className='status item-data'>
                                    <h5>Status:</h5>
                                    <p className='status-data' style={{
                                        color: item.status === "verified" ? "green" : "red",
                                        borderColor: item.status === "verified" ? "green" : "red",
                                        backgroundColor: item.status === "verified" ? "rgba(0, 128, 0, 0.1)" : "rgba(255, 0, 0, 0.1)"
                                    }}>
                                        {item.status.toUpperCase()}
                                    </p>
                                </div>



                                {item.status == "verified" ?
                                    <div className='buttons'>
                                        <button>Cancel Booking</button>
                                    </div>
                                    : ""
                                }
                            </div>
                        );
                    })}
                </div>
            }
        </div>
    )
}

export default Profile