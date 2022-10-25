import { Link, Route, Routes } from 'react-router-dom'
import Ex1 from './Ex1'
import Ex2 from './Ex2'
// import Ex1 from './Ex1'

const UseEffect = () => {
    return (
        <main>
            <h2 className='title'>useEffect</h2>
            <Routes>
                <Route path='/' element={<Ex1 />} />
                <Route path='/two' element={<Ex2 />} />
            </Routes>
            <Link to='/'>Home</Link>
        </main>
    )
}

export default UseEffect
