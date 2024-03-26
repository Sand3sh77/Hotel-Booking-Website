import React, { useContext, useState } from 'react';
import "./login.scss";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { HiddenEyeSvg, ShowEyeSvg } from '../../../public/assets/svg/svg.jsx';
import callApi from '../../hooks/callApi.jsx';
import Navbar from '../../components/Navbar/navbar.jsx';
import { API } from '../../helpers/api.jsx';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: '', password: '' });
    const { setUserToken } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const url = API + "auth/login";
        const url = "https://quizhunt.suraj1.com.np/auth/login";
        try {
            const resp = await axios.post(url, data, {
                headers: {
                    "accept": '/',
                }
            });
            if (resp.status === 200) {
                toast.success("Log In Succesfull");
                // setUserToken(resp.data.token);
                setUserToken(resp.data.data.token);
                navigate('/');
                // localStorage.setItem("data", resp.data);
            }
        }
        catch (error) {
            // console.error("Error:", error);
            if (error.response.data.message) {
                toast.error(error.response.data.message);
            }
        }
    }

    return (
        <div className='login'>
            <div className="nav">
                <Navbar />
            </div>
            <div className='middle_container'>
                <div className='top'>
                    Log In
                </div>
                <div className="middle">
                    <form>
                        <div className='inputs'>
                            <input
                                type='email'
                                placeholder='email'
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                            />
                            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                                {showPassword ?
                                    <input
                                        type="text"
                                        placeholder='password'
                                        value={data.password}
                                        onChange={(e) => setData({ ...data, password: e.target.value })}
                                    />
                                    :
                                    <input
                                        type="password"
                                        placeholder='password'
                                        value={data.password}
                                        onChange={(e) => setData({ ...data, password: e.target.value })}
                                    />
                                }
                                {data.password &&
                                    <div onClick={() => setShowPassword(!showPassword)} className='show-password'>
                                        {showPassword ? <ShowEyeSvg /> : <HiddenEyeSvg />}
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='buttons'>
                            <button type='submit' onClick={handleSubmit}>Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login