import * as React from 'react';
import renderer from 'react-test-renderer'
import { PageTitle } from '../PageTitle'

test('test PageTitle', () => {
    const component = renderer.create(<PageTitle />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
})

