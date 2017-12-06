import axios from 'axios';

axios.get('http://maatwerk.works/api/bars')
    .then(function (response) {
        console.log(response);
        return response;
    })
    .catch(function (error) {
        console.log(error);
        return false;
    });