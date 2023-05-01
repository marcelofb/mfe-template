import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import React from 'react'

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <h1>Dashboard</h1>
        </StylesProvider>
    )
}
