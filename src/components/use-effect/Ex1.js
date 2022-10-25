import React, { useEffect, useState } from 'react'

const Ex1 = () => {
    const [names, setNames] = useState([])
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        name.trim() !== '' && setNames([...names, name])
        setName('')
    }
    // the useEffect is used to manage logic when a program mounts, unmounts and mounted
    useEffect(() => {
        // this program mounts when there a change in state (name)
        console.log('Program Mount in useEffect')
        // the return is what happens after the useEffect runs it's logic
        // you can add a cleanup function or any this to re-instantiate you r program
        // return console.log('program unmounts')
    }, [names])
    // this example shows why a useEffect can be a menace with respect to dependencies
    // as above we set the dependency to name
    // it means every time the name state changes, the page re-renders
    // this is not good for data fetching that have to reload every time you type sth into the input
    // open you console to see the result of the useEffect hooks


    return (
        <section>
            <h2>Effect Mount</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter a new Name'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {names.map((val, key) =>
                    <div key={key}>{key + 1}: {val}</div>
                )}
            </form>
        </section>
    )
}

export default Ex1
