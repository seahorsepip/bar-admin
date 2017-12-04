import axios from 'axios';

export function fetchAllBars() {
    return axios.get('http://localhost:3000/api/bars');
}

export function fetchBarById(id) {
    return axios.get('http://localhost:3000/api/bars/' + id);
}

export function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}