import axios from 'axios';

axios.get('http://localhost:3000/api/bars')
    .then(function (response) {
        console.log(response);
        return response;
    })
    .catch(function (error) {
        console.log(error);
        return false;
    });