import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))
import Header from './components/Header'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import Progress from './components/Progress'

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false)
    return (
        <BrowserRouter>
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
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </StylesProvider>
        </BrowserRouter>
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
