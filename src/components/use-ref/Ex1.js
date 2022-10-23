import React, { useEffect, useRef, useState } from 'react'

const Ex1 = () => {
    const formData = useRef(new FormData())
    const inputRef = useRef()
    const [users, setUsers] = useState([])
    // useEffect to initialize the form and set focus to first input on Load
    useEffect(() => {
        formData.current.reset()
        inputRef.current.focus()
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        // extract the form data using higher order functions on Object functions
        // This is useful for multi-step forms or a quiz app
        const newUser = (Object.entries(formData.current)).filter(
            a => (a[1].dir === '') && (a[1].localName !== 'button')
        ).reduce((a, b) => {
            a[b[1].name] = b[1].value
            return a
        }, {})
        // set the user into the database
        setUsers([...users, newUser])
    }
    const deleteUser = (username) => {
        setUsers(users.filter(val => val.username !== username))
    }
    return (
        <article>
            <form
                ref={formData}
                onSubmit={handleSubmit}
            >
                <button>Submit</button>
                <br />
                <input
                    ref={inputRef}
                    name='username'
                    placeholder='username'
                    type="text"
                    required
                />
                <br />
                <input
                    required
                    name='pwd'
                    placeholder='password'
                    type='password'
                />
            </form>
            <>
                {users.map((val, key) =>
                    <div className='listBox' key={key}>
                        <dt>{val.username}</dt>
                        <button onClick={() => deleteUser(val.username)}>+</button>
                    </div>
                )}
            </>

        </article>
    )
}

export default Ex1
