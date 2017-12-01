import React, { Component } from 'react';
import axios from 'axios';
import BarForm from './BarForm';
import { Badge } from 'reactstrap';

class AddBarPage extends Component {
    testVar = this.fetchAllBars();


    render() {
        return (
            <div>
                <h1>Add Bar</h1>
                {this.testVar}
                <BarForm/>
            </div>
        );
    }
}


export default AddBarPage;