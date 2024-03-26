import React, { useEffect, useState } from 'react'
import { SearchBar } from '../../components/searchBar/searchBar'
import Rooms from '../../components/Rooms/rooms'
import { API } from '../../helpers/api';
import axios from 'axios';
import toast from 'react-hot-toast';

const Home = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            const url = API + "room";
            try {
                const resp = await axios.get(url);
                if (resp.status === 200) {
                    // toast.success(resp.data.message);
                    setRooms(resp.data.data);
                }
            } catch (error) {
                if (error.response && error.response.data.message) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error("Failed to fetch rooms");
                }
            }
        };

        fetchRooms();
    }, []);

    return (
        <div className='home-container'>
            <SearchBar />
            <div className='rooms'>
                {rooms &&
                    <>
                        {rooms.map((room, index) => <Rooms key={index} props={room} />)}
                    </>
                }
            </div>
        </div>
    )
}

export default Home