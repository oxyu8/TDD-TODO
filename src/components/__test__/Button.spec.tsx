import * as React from 'react'
import { shallow } from 'enzyme'
import { Button } from '../Button'

test('should display the passed props', () => {
    const handleFuncMock = jest.fn()
    const testProps = {
        text: 'test',
        value: {
            email: 'test.com',
            password: 12345
        },
        handleFunc: handleFuncMock
    }
    const wrapper = shallow(<Button {...testProps}/>);
    const actual = wrapper.find('button').text();
    expect(actual).toEqual('test')

    wrapper.setProps({...testProps, text: 'changed'})
    const actual2 = wrapper.find('button').text();
    expect(actual2).toEqual('changed')
})