import { useState } from 'react'
const pStyle = {
    overflow: 'hidden', width: '100%', wordWrap: 'break-word', padding: '0.5rem'
}

const Ex2 = () => {
    const [value, setValue] = useState('')
    // Note that you have to initialize the value as empty except you have an initial value you want to display
    // This example shows why you must be intentional about the use case for your hooks
    // The page will render every time you type or delete input from the text-box
    return (
        <section>
            <h2>Reading out</h2>
            <br />
            {/* This reads out the state  */}
            <p style={pStyle}>{value}</p>
            <input
                type="text"
                placeholder='Enter some text here'
                // this displays the current state
                value={value}
                // we can also define a function for this
                // this will change the state of the current state to what is typed inside the text-box
                onChange={(e) => setValue(e.target.value)}
            />
        </section>
    )
}

export default Ex2
