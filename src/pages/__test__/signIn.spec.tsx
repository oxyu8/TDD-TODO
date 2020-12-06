import * as React from 'react';
import { shallow } from 'enzyme'
import SignIn from '../signIn'
import { PageTitle } from '../../components/PageTitle'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

// to test whether child components are exist
describe('SignIn', () => {
    describe('should be child', () => {
        test('child number', () => {
            const wrapper = shallow(<SignIn/>)
            expect(wrapper.find(PageTitle).length).toBe(1)
            expect(wrapper.find(Input).length).toBe(2)
            expect(wrapper.find(Button).length).toBe(1)
        })
    })
});