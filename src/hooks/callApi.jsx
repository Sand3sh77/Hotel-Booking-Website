import toast from 'react-hot-toast';
import axios from 'axios';

const callApi = async ({ url, method, data, alert }) => {
    const userToken = JSON.parse(localStorage.getItem('token'));
    try {
        const commonOptions = {
            url: url,
            method: method,
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
                "Authorization": `Bearer ${userToken}`
            }
        };

        const resp = await axios.request({
            ...commonOptions,
            ...(method !== "get" ? { data: data } : {})
        });

        if (resp.status === 200) {
            if (alert) {
                toast.success(resp.data.message);
            }
            return { data: resp.data, status: resp.status };
        }
    }
    catch (error) {
        // console.error("Error:", error);
        if (error.response.data.message) {
            toast.error(error.response.data.message);
        }
        else {
            toast.error(error.response.data.errors[0].msg);
        }
        return { status: error.response.status };
    }
}

export default callApi;