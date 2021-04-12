import axios from 'axios';
const token = 'code'

export default axios.create({
    baseURL: '/api/',
        // headers: {
        //     'Content-Type': 'application/json',
        //     'Authorization': 'Token ' + token}
});
