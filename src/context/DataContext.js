import { createContext, useState } from "react"

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [confirmPwd, setConfirmPwd] = useState('')
    const [users, setUsers] = useState([])

    return (
        <DataContext.Provider value={{
            email, setEmail, confirmPwd, setConfirmPwd,
            pwd, setPwd, users, setUsers
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext
