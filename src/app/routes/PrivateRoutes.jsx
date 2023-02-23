import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


export const PrivateRoutes = ({ children }) => {

    const { isAuthenticated } = useSelector(state => state.auth);

    return (isAuthenticated) ? children : <Navigate to='/login' />
}
