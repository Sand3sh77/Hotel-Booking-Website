import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('');
    const [userToken, setUserToken] = useState(JSON.parse(localStorage.getItem('token')) || false);

    useEffect(() => {
        const url = "https://quizhunt.suraj1.com.np/user"

        const getUserDetails = async () => {
            try {
                const resp = await axios.post(url, {}, {
                    headers: {
                        "accept": '/',
                        "Authorization": `Bearer ${userToken}`
                    }
                });
                if (resp.status === 200) {
                    setCurrentUser({ ...resp.data.data, role: "admin" });
                    localStorage.setItem("token", JSON.stringify(userToken));
                }
            }
            catch (error) {
                // console.error("Error:", error);

                setUserToken(false);
                localStorage.setItem("token", false);
                setCurrentUser('');

                if (!error.response.data.message) {
                    toast.error(error.response.data.errors[0].msg);
                }
            }
        }
        if (userToken) {
            getUserDetails();
        }
    }, [userToken]);

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser, userToken, setUserToken }}>
            {children}
        </AuthContext.Provider>
    )
}
