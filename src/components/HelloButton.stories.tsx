import React from 'react'
import { Button } from './Button'
import { action } from '@storybook/addon-actions'


export default {
    title: 'atoms/button',
    component: Button,
}

const Template = (args) => <Button {...args}/>
export const button = Template.bind({})

button.args = {
    text: 'text',
    handleFunc: action('clicked')
}