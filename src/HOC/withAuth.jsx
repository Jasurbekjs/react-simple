import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"

export const withAuth = (Component) => (props) => {
    const {user} = useContext(AuthContext)
    
    if(!user) 
        return <p>Not Authorized to view</p>

    return <Component {...props}/>
}