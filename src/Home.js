import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div className="content">
            <h3>Welcome to the Home Page</h3>
            <div className="homeContents">
                <article>
                    <h4>useState</h4>
                    <Link to='/state' title="Counter with useState">Example 1</Link>
                    <Link to='/state/two'>Example 2</Link>
                    <Link to='/state/three'>Example 3</Link>
                    <Link to='/state/four'>Example 4</Link>
                </article>
                <article>
                    <h4>useEffect</h4>
                    <Link to='/effect'>Example 1</Link>
                    <Link to='/effect/two'>Example 2</Link>
                </article>
                <article>
                    <h4>useRef</h4>
                    <Link to='/ref'>Example 1</Link>
                    <Link to='/ref/two'>Example 2</Link>
                </article>
                <article>
                    <h4>useReducer</h4>
                    <Link to='/reducer'>Example 1</Link>
                    <Link to='/reducer/two'>Example 2</Link>
                    <Link to='/reducer/three'>Example 3</Link>
                    <Link to='/reducer/four'>Example 4</Link>
                </article>
                <article>useContextApi
                    <Link to='/dashboard'>Home</Link>
                    <Link to='/dashboard/register'>Register</Link>
                    <Link to='/dashboard/auth'>Login</Link>
                </article>
            </div>
        </div>
    )
}

export default Home
