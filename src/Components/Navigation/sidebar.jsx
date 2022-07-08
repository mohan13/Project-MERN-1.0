import React from 'react'
import NavItems from "./NavItems/NavItems";

const sidebar = () => {
  return (
    <div >
       <div className="flex "> <NavItems from='sidebar'/></div>
    </div>
  )
}

export default sidebar