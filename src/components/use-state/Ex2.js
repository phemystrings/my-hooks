import { useState } from 'react'

const Ex2 = () => {
    const [value, setValue] = useState('')
    // Note that you have to initialize the value as empty
    return (
        <>
            <h2>Reading out Texts on inputs</h2>
            <br />
            <p>{value}</p>
            <input
                type="text"
                placeholder='Enter some text here'
                value={value}
                // we can also define a function for this
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    )
}

export default Ex2
