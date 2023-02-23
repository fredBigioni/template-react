import { endPoint } from "../../../api"
import { setIsLoading } from "../general";
import { login, setStateLoding } from "./authSlice";
import swal from 'sweetalert';

export const startLogin = (username, password) => {
    return async (dispatch) => {
        try {
            dispatch(setIsLoading(true));
            dispatch(setStateLoding(true));

            const user = { "username": username, "password": password };

            const { data } = await endPoint.post('/auth/authenticate', user);

            dispatch(login(data));

            dispatch(setStateLoding(true));
            dispatch(setIsLoading(false));
        }
        catch (error) {
            const err = { error };
            let msg = "";
            if (err.error.code === "ERR_NETWORK")
                msg = err.error.code;
            else
                msg = err.error.response?.data.message;

            swal({  
                title: "Error",
                text: msg,
                icon: "error",
                dangerMode: true,
            });
            dispatch(setIsLoading(false));
        }
    }
}