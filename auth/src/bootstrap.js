import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'

const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
    const history =
        defaultHistory || createMemoryHistory({ initialEntries: [initialPath] })
    if (onNavigate) history.listen(onNavigate)
    ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el)

    // Vanilla JS example
    // el.innerHTML = 'Text'

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location
            if (pathname !== nextPathname) history.push(nextPathname)
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_auth-dev-root')
    if (el) mount(el, { defaultHistory: createBrowserHistory() })
}

export { mount }
