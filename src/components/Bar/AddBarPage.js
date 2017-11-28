import React, { Component } from 'react';
import axios from 'axios';
import BarForm from './BarForm';
import { Badge } from 'reactstrap';

class AddBarPage extends Component {

    render() {
        return (
            <div>
                <h1>Add Bar</h1>
                {this.fetchBars() ? (
                    <Badge color="secondary">True</Badge>
                ) : (
                    <Badge color="primary">False</Badge>
                )}
                <BarForm/>
            </div>
        );
    }

    fetchBars(){
        axios.get('http://localhost:3000/api/bars')
            .then(function (response) {
                console.log(response);
                return true;
            })
            .catch(function (response) {
                console.log(response);
                return false;
            })
    }

    postBar(){
        axios.post('http://localhost:3000/api/bars', {
            headers:
                {
                    'postman-token': '62ff126f-dad5-35c3-6fa1-1931ae769f63',
                    'cache-control': 'no-cache',
                    authorization: 'Bearer b581d9569475f0f41c5b29cdea5c10ec611d5172',
                    'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
                },
            name: 'Miller Time Breda',
            description: 'Best Beer Ever',
            city: 'Breda',
            zipcode: '2355AB',
            address: 'Bredalaan 2',
            scope: 'bar'
        }
        )
            .then(function (response) {
                console.log(response);
                return true;
            })
            .catch(function (response) {
                console.log(response);
                return false;
            })
    }
}


export default AddBarPage;