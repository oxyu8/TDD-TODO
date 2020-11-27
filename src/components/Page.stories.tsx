import React from 'react'
import {PageTitle} from './PageTitle'

export default {
    title: 'atoms/title',
    component: PageTitle
}

const Templage = (args) => <PageTitle {...args} />
export const title = Templage.bind({})

title.args = {
    title: 'title',
    color: 'red'
}
