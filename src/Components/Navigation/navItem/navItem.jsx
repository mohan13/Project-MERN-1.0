import React from 'react'
import { Link } from 'react-router-dom'
const NavItem = ({icon,path,title}) => {
  return (
    <div>
      <Link to={path}>{icon}{title}</Link>
    </div>
  )
}

export default NavItem