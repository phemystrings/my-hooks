import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Ex1 from './Ex1'
import Ex2 from './Ex2'

const UseRef = () => {
    return (
        <main>
            <h2 className='title'>useRef</h2>
            <Routes>
                <Route path='/'>
                    <Route index element={<Ex1 />} />
                    <Route path='two' element={<Ex2 />} />
                </Route>
            </Routes>
            <Link to='/'>Home</Link>
        </main>
    )

}

export default UseRef
