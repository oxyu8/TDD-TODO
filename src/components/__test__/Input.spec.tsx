import * as React from 'react'
import { shallow } from 'enzyme'
import { Input } from '../Input'

test('should call handleFunc method', () => {
    // モック関数
    const handleChangeMock = jest.fn()

    const testProps = {
        type: 'text',
        name: 'email',
        placeholder: 'test',
        value: 'test-value',
        handleFunc: handleChangeMock
    }
    const wrapper = shallow(<Input {...testProps}/>)
    wrapper.find('input').simulate('change', 'xxx');
    expect(handleChangeMock).toHaveBeenCalledWith('xxx');
})
