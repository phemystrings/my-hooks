import React, { useEffect, useState } from 'react'

const Ex1 = () => {
    const [names, setNames] = useState([])
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        name.trim() !== '' && setNames([...names, name])
        setName('')
    }
    useEffect(() => {
        console.log('Program Mount in useEffect')
    }, [names])

    return (
        <>
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
        </>
    )
}

export default Ex1
