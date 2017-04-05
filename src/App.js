import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function App({ children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/contacts">Contacts</Link>
        {' '}
        <Link to="/counter">Counter</Link>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/counter')}>Go to /counter</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}
