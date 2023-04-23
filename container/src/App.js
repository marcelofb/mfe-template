import React from 'react'
import MarketingApp from './components/MarketingApp'

export default () => {
    return (
        <>
            <h1>Container</h1>
            <hr />
            <MarketingApp />
        </>
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
