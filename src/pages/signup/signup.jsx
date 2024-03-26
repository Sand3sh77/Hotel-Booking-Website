import React, { useContext, useState } from 'react';
import "./signup.scss";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { HiddenEyeSvg, ShowEyeSvg } from '../../../public/assets/svg/svg';
import { AuthContext } from '../../context/authContext';
import callApi from '../../hooks/callApi';
import Navbar from '../../components/Navbar/navbar';
import { API } from '../../helpers/api';
import axios from 'axios';

const Signup = () => {
    const [data, setData] = useState({ name: '', email: '', password: '', cpassword: '' });
    const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });
    const { setUserToken } = useContext(AuthContext);

    const navigate = useNavigate();
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (data.cpassword !== data.password) {
            toast.error("Passwords do not match");
        }
        else {
            const url = API + "auth/register";
            try {
                const resp = await axios.post(url, data, {
                    headers: {
                        "accept": '/',
                    }
                });
                if (resp.status === 200) {
                    toast.success(resp.data.message);
                    navigate("/login");
                }
            }
            catch (error) {
                // console.error("Error:", error);
                if (error.response.data.message) {
                    toast.error(error.response.data.message);
                }
            }
        }
    }

    return (
        <div className='signup'>
            <div className="nav">
                <Navbar />
            </div>
            <div className='middle_container'>
                <div className='top'>Register</div>
                <div className="middle">
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            <input
                                type='text'
                                placeholder='name'
                                name='name'
                                value={data.name}
                                onChange={handleChange}
                            />
                            <input
                                type='email'
                                placeholder='email'
                                name='email'
                                value={data.email}
                                onChange={handleChange}
                            />

                            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                                {showPassword.password ?
                                    <input
                                        type='text'
                                        placeholder='password'
                                        name='password'
                                        value={data.password}
                                        onChange={handleChange}
                                    />
                                    :
                                    <input
                                        type='password'
                                        placeholder='password'
                                        name='password'
                                        value={data.password}
                                        onChange={handleChange}
                                    />
                                }
                                {data.password &&
                                    <div onClick={() => setShowPassword({ ...showPassword, password: !showPassword.password })} className='show-password'>
                                        {showPassword.password ? <ShowEyeSvg /> : <HiddenEyeSvg />}
                                    </div>
                                }
                            </div>
                            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                                {showPassword.confirmPassword ?
                                    <input
                                        type='text'
                                        placeholder='confirm password'
                                        name='cpassword'
                                        value={data.cpassword}
                                        onChange={handleChange}
                                    />
                                    :
                                    <input
                                        type='password'
                                        placeholder='confirm password'
                                        name='cpassword'
                                        value={data.cpassword}
                                        onChange={handleChange}
                                    />
                                }
                                {data.cpassword &&
                                    <div onClick={() => setShowPassword({ ...showPassword, confirmPassword: !showPassword.confirmPassword })} className='show-password'>
                                        {showPassword.confirmPassword ? <ShowEyeSvg /> : <HiddenEyeSvg />}
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='buttons'>
                            <button>Register</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Signup;