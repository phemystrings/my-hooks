import { useState } from 'react'

const Ex1 = ({ title }) => {
    const [count, setCount] = useState(0)
    // This is the easiest way to use the useState Hooks 
    // 1. when you don't have too much logic
    // 2. when you want immediate response result of the event
    // 3. the useState hooks will re-render a page every time the setState function is called

    return (
        <>
            <section className="section">
                <h1>Counter App</h1>
                {/* we output the state of the count here */}
                <p>{count}</p>
                <div>
                    <button
                        style={{ marginInline: '0.5rem' }}
                        // the click event sets the new state of the count (state -1)
                        onClick={() => setCount(count - 1)}
                    >Decrement</button>
                    <button
                        style={{ marginInline: '0.5rem' }}
                        // the click event sets the new state of the count (state + 1)
                        onClick={() => setCount(count + 1)}
                    >Increment</button>
                </div>
            </section>
        </>
    )
}

export default Ex1
