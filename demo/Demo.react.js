import React, {Component} from 'react';
import {Ace} from '../src';

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div>
                <h1>ace-components Demo</h1>

                <hr/>
                <h2>Ace</h2>
                <Ace
                    id="test_id"
                />
                <hr/>
            </div>
        );
    }
}

export default Demo;
