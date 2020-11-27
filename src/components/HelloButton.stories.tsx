import React from 'react'
import { HelloButton } from './HelloButton'
import { action } from '@storybook/addon-actions'


export default {
    title: 'atoms/button',
    component: HelloButton,
}

const Template = (args) => <HelloButton {...args}/>
export const button = Template.bind({})

button.args = {
    text: 'text',
    handleFunc: action('clicked')
}