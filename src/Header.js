import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h2>Hooks</h2>
            <nav>
                <Link to='/state'>State</Link>
                <Link to='/effect'>Effect</Link>
                <Link to='/ref'>Ref</Link>
                <Link to='/reducer'>Reducer</Link>
                <Link to='/dashboard'>Context</Link>
            </nav>
        </header>
    )
}

export default Header
