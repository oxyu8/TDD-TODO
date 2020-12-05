import * as React from 'react';
import { shallow } from 'enzyme'
import Home from '../index'
import { PageTitle } from '../../components/PageTitle'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

// to test whether child components are exist
test('are child components existe', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find(PageTitle).length).toBe(1)
    expect(wrapper.find(Input).length).toBe(2)
    expect(wrapper.find(Button).length).toBe(1)
});