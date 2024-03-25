import axios from 'axios';
import { useQuery } from 'react-query';

const useQuiz = (id) => {
    const userToken = JSON.parse(localStorage.getItem('token'));

    return useQuery(["quiz", id], () => {
        return axios.get(
            `https://quizhunt.suraj1.com.np/quiz/${id}`,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    Authorization: `Bearer ${userToken}`
                },
            }
        );
    },
        {
            refetchOnWindowFocus: false,
        });
}

export default useQuiz;
