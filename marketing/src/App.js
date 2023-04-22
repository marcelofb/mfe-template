import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Pricing from './components/Pricing'
import Landing from './components/Landing'

const generateClassName = createGenerateClassName({
    productionPrefix: 'mkt'
})

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    )
}
