import React from 'react'
import { SearchBar } from '../../components/searchBar/searchBar'
import Rooms from '../../components/Rooms/rooms'

const Home = () => {

    const rooms = [
        {
            imgLink: "https://thespruce.com/thmb/2_Q52GK3rayV1wnqm6vyBvgI3Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg",
            name: "OYO room for couples",
            location: "new delhi",
            type: "delux",
            price: 500
        },
        {
            imgLink: "https://thespruce.com/thmb/2_Q52GK3rayV1wnqm6vyBvgI3Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg",
            name: "OYO room for couples",
            location: "new delhi",
            type: "delux",
            price: 500
        },
        {
            imgLink: "https://thespruce.com/thmb/2_Q52GK3rayV1wnqm6vyBvgI3Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg",
            name: "OYO room for couples",
            location: "new delhi",
            type: "delux",
            price: 500
        },
        {
            imgLink: "https://thespruce.com/thmb/2_Q52GK3rayV1wnqm6vyBvgI3Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg",
            name: "OYO room for couples",
            location: "new delhi",
            type: "delux",
            price: 500
        },
    ]
    return (
        <div className='home-container'>
            <SearchBar />
            <div className='rooms'>
                {rooms.map((room, index) => <Rooms key={index} props={room} />)}
            </div>
        </div>
    )
}

export default Home