import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../components/index_home.jsx'
import Login from '../components/user/login.jsx'


it('renders without exploding', () => {
  const div = document.createElement('div')
  ReactDOM.render(<div />, div)
})

// TODO: Migrate views to mobx first then run the test

// it('renders without exploding', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<Home />, div)
// })
//
//
// it('renders without exploding', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<Login />, div)
// })
