import React from 'react'
import { Link } from 'react-router-dom'
import Ex2 from './Ex2'
// import Ex1 from './Ex1'


const UseRef = () => {
    return (
        <main>
            <section>
                <h2>UseRef</h2>
                {/* <Ex1 /> */}
                <Ex2 />
            </section>
            <Link to='/'>Home</Link>
        </main>
    )

}

export default UseRef
