import { Link, Route, Routes } from 'react-router-dom'
import Ex1 from './Ex1'
import Ex2 from './Ex2'
import Ex3 from './Ex3'
import Ex4 from './Ex4'

const UseStateHooks = () => {
    return (
        <main>
            <h3 className='title'>useState Hook</h3>
            <Routes>
                <Route path='/' element={<Ex1 />} />
                <Route path='two' element={<Ex2 />} />
                <Route path='three' element={<Ex3 />} />
                <Route path='four' element={<Ex4 />} />
            </Routes>
            <Link to='/'>Home</Link>

        </main>
    )
}

export default UseStateHooks
