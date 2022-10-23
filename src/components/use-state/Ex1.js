import { useState } from 'react'

const Ex1 = () => {
    const [count, setCount] = useState(0)
    // This is the easiest way to use useState Hooks 
    // when you don't have too much logic
    return (
        <>
            <section className="section">
                <h1>useState Hook</h1>
                <p>{count}</p>
                <div>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                    <button onClick={() => setCount(count - 1)}>Decrement</button>
                </div>
            </section>
        </>
    )
}

export default Ex1
