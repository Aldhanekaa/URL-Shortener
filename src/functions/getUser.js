import axios from 'axios'

export default function () {
    return axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:3004/user"
    });
}