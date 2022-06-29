import React from 'react'
import Toolbar from '../Navigation/toolbar'
const Layout = (props) => {
  return (
    <div><Toolbar/>
    {props.children}</div>
  )
}

export default Layout