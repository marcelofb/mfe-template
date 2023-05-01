import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const mount = (el) => {
    ReactDOM.render(<App />, el)

    // Vanilla JS example
    // el.innerHTML = 'Text'
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_dashboard-dev-root')
    if (el) mount(el)
}

export { mount }
