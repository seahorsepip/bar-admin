// import React, { Component } from 'react';
// import axios from 'axios';
//
// class BarListComponent extends Component {
//     public fetchAllBars() {
//         axios.get('http://localhost:3000/api/bars')
//             .then(function (response) {
//                 if (response.status == 200) {
//                     console.log(response);
//                     return response;
//                 } else {
//                     console.log(response);
//                     return false;
//                 }
//             })
//             .catch(function (response) {
//                 if (response.status !== 200) {
//                     //No OK
//                     console.log(response)
//                     return false;
//                 }
//             })
//     }
// }
//
// export default BarListComponent();