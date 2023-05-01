import {
    StylesProvider,
    createGenerateClassName
} from '@material-ui/core/styles'
import React from 'react'

const generateClassName = createGenerateClassName({
    productionPrefix: 'da'
})

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <h1>Dashboard</h1>
        </StylesProvider>
    )
}
