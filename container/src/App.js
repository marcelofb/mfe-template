import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))
const DashboardLazy = lazy(() => import('./components/DashboardApp'))
import Header from './components/Header'
import {
    StylesProvider,
    createGenerateClassName
} from '@material-ui/core/styles'
import Progress from './components/Progress'
import { createBrowserHistory } from 'history'

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

const history = createBrowserHistory()

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false)
    useEffect(() => {
        if (isSignedIn) history.push('/dashboard')
    }, [isSignedIn])
    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <Header
                    onSignOut={() => setIsSignedIn(false)}
                    isSignedIn={isSignedIn}
                />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth">
                            <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/dashboard">
                            {!isSignedIn && <Redirect to="/" />}
                            <DashboardLazy />
                        </Route>
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </StylesProvider>
        </Router>
    )
    {
        /* <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <Header
                    onSignOut={() => setIsSignedIn(false)}
                    isSignedIn={isSignedIn}
                />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth">
                            <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/dashboard">
                            {!isSignedIn && <Redirect to="/" />}
                            <DashboardLazy />
                        </Route>
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </StylesProvider>
        </Router> */
    }
}
