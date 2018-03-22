import React from 'react';
import {shallow} from 'enzyme';
import Ace from '../Ace.react';

describe('Ace', () => {

    it('renders', () => {
        const component = shallow(<Ace id="test_id"/>);
        expect(component).to.be.ok;
    });
});
