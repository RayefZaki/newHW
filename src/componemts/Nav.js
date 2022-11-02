import React from 'react'
import {Link} from "react-router-dom"

function Nav() {
  return (
    <nav>

    <div className='nav1'>
        <ol>
            {/* <Link to="/GitCreate">sub</Link> */}
            <br/>
            <Link to="Create">Create</Link>
        </ol>
    </div>
    </nav>
  )
}

export default Nav