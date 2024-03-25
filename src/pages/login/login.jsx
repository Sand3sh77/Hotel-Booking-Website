import React, { useContext, useState } from 'react';
import "./login.scss";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { HiddenEyeSvg, ShowEyeSvg } from '../../../public/assets/svg/svg.jsx';
import callApi from '../../hooks/callApi.jsx';
import Navbar from '../../components/Navbar/navbar.jsx';

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: '', password: '' });
    const { setUserToken } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "https://quizhunt.suraj1.com.np/auth/login";
        const resp = await callApi({ url, method: "post", data, alert: true });
        if (resp.status === 200) {
            setUserToken(resp.data.data.token);
            navigate('/');
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