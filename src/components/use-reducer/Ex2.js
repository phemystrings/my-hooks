import { useReducer } from 'react'
// On submit, we just want to log the results of the input into our console
const reducer = (state, action) => {
    switch (action.type) {
        case 'changeInput':
            return { ...state, [action.payload.name]: action.payload.value }
        default: throw Error(`Unknown action type: ${action.type}`)
    }
}

const Ex2 = () => {
    console.log('The program renders')
    const [state, dispatch] = useReducer(reducer,
        { id: '', username: '', pwd: '' }
    )
    const handleSubmit = (e) => {
        e.preventDefault()
        state.id++
        // The is the log action to the console
        return (console.log(state))
    }

    return (
        <article>
            <form onSubmit={handleSubmit} >
                <button>Test Reducer</button>

                <input
                    type="text"
                    placeholder='username'
                    name='username'
                    value={state.username}
                    onChange={(e) => dispatch({ type: 'changeInput', payload: e.target })}
                />
                <input
                    type="password"
                    placeholder='password'
                    name='pwd'
                    value={state.pwd}
                    onChange={(e) => dispatch({ type: 'changeInput', payload: e.target })}
                />
            </form>
        </article>
    )
}

export default Ex2