import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

export default ({ history, onSignIn }) => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin">
                        <SignIn onSignIn={onSignIn} />
                    </Route>
                    <Route path="/auth/signup">
                        <SignUp onSignIn={onSignIn} />
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    )
}
