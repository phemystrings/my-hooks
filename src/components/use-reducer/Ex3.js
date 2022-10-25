import { useReducer } from 'react'
// On submit, we just want to log the results of the input into our console
const reducer = (state, action) => {
    switch (action.type) {
        case 'loadInputs':
            console.log(action.payload)
            return { ...state, myData: action.payload }
        case 'changeInput':
            return { ...state, [action.payload.name]: action.payload.value }
        default: throw Error(`Unknown action type: ${action.type}`)
    }
}
// note the difference with the last example
const formState = { id: '', username: '', pwd: '', myData: [] }

const Ex3 = () => {
    // console.log('The program renders')
    const [state, dispatch] = useReducer(reducer, formState)

    const handleSubmit = (e) => {
        e.preventDefault()
        state.id++
        const { id, username, pwd } = state
        let newItem = { id, username, pwd }
        dispatch({
            type: 'loadInputs',
            payload: [...state.myData, newItem]
        })
        state.username = ''
        state.pwd = ''
        e.target.username.focus()
    }

    return (
        <section>
            <form onSubmit={handleSubmit} name='form'>
                <button>Test Reducer</button>
                <input
                    type="text"
                    id='username'
                    placeholder='username'
                    required
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
        </section>
    )
}

export default Ex3