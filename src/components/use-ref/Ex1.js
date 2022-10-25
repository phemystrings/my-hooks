import React, { useEffect, useRef, useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Ex1 = () => {
    const formData = useRef(new FormData())
    const inputRef = useRef()
    const [users, setUsers] = useState([])//database with no API
    // useEffect to initialize the form and set focus to first input on Load
    // here we can use useEffect to initialize the form since useRef does not trigger re-render
    useEffect(() => {
        // this logic resets the form
        formData.current.reset()
        // this logic resets the focus to the username
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
        }, {})//refers to Higher order functions: the array.reduce(()=>{}, initVal)
        // set the user into the database
        setUsers([...users, newUser])
    }
    const deleteUser = (username) => {
        setUsers(users.filter(val => val.username !== username))
    }
    return (
        <section>
            <form
                ref={formData}
                onSubmit={handleSubmit}
            >
                <button>Submit</button>
                <input
                    ref={inputRef}
                    name='username'
                    placeholder='username'
                    type="text"
                    required
                />
                <input
                    required
                    name='pwd'
                    placeholder='password'
                    type='password'
                />
            </form>
            <>
                {users.map((val, key) =>
                    <div className='listBox' style={{ width: '80%' }} key={key}>
                        <dt>{val.username}</dt>
                        <FaTrashAlt
                            onClick={() => deleteUser(val.username)}
                            className='trashBtn'
                        />
                    </div>
                )}
            </>
        </section>
    )
}

export default Ex1
