import axios from 'axios';

export function fetchAllBars() {
    return axios.get('http://localhost:3000/api/bars');
}
