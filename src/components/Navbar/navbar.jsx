import React, { useContext, useState } from 'react';
import "./navbar.scss"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { UserFilled } from '../../../public/assets/svg/svg';
import callApi from '../../hooks/callApi';

const Navbar = () => {
    const { currentUser, setCurrentUser, setUserToken } = useContext(AuthContext);
    const [dropdown, setDropdown] = useState(false);

    const handleLogout = () => {
        const url = "https://quizhunt.suraj1.com.np/auth/logout";
        const logout = async () => {
            const resp = await callApi({ url, method: "delete", data: "", alert: true })
            if (resp.status == 200) {
                setUserToken(false);
                setCurrentUser('');
            }
        }
        logout();
    }

    return (
        <div className='nav-container'>
            <div className='left'>
                <Link to="/">
                    MERN HOTEL BOOKING
                </Link>
            </div>
            <div className='right'>
                {currentUser ?
                    <div className='dropdown'>
                        <button onClick={() => setDropdown(!dropdown)}>
                            <UserFilled />
                            {currentUser.full_name} ▼
                        </button>
                        {dropdown &&
                            <div className='items'>
                                <Link to={`/profile/${currentUser.user_id}`}>
                                    <div className='item' onClick={() => setDropdown(!dropdown)}>Profile</div>
                                </Link>
                                <div className='item' onClick={() => handleLogout()}>Logout</div>
                            </div>
                        }
                    </div>
                    :
                    <div className='links'>
                        <Link to="/signup">
                            Register
                        </Link>
                        <Link to="/login">
                            Login
                        </Link>
                    </div>
                }
            </div>
        </div >
    )
}

export default Navbar