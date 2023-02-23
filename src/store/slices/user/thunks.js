import axios from 'axios';
import { endPoint } from '../../../api';
import swal from 'sweetalert';
import { loadUsersData } from "./userSlice";

export const getAllUsers = () => {
    return async (dispatch) => {
        const url = "Users/GetAllUsers/";

        await endPoint.get(url).
            then((response) => {

                var resp = response.data;
                dispatch(loadUsersData(resp));
            })
            .catch((error) => {
                console.log(error);
                swal({
                    title: "Error",
                    text: error,
                    icon: "error",
                    dangerMode: true,
                });
            })
    }
}

export const saveNewUser = (data) => {
    return async (dispatch) => {
        const url = "Users/create-user/";

        await endPoint.post(url, data, { headers: { 'Content-Type': 'application/json' } }).
            then((response) => {
                debugger;
                var resp = response.data;
                dispatch(loadUsersData(resp));
            })
            .catch((error) => {
                console.log(error);
                swal({
                    title: "Error",
                    text: error,
                    icon: "error",
                    dangerMode: true,
                });
            })
    }
}


export const updateUser = (data) => {
    return async (dispatch) => {
        const url = "Users/update-by-id/" + data.id;

        await endPoint.put(url, data, { headers: { 'Content-Type': 'application/json' } }).
            then((response) => {
                debugger;
                var resp = response.data;
                dispatch(loadUsersData(resp));
            })
            .catch((error) => {
                console.log(error);
                swal({
                    title: "Error",
                    text: error,
                    icon: "error",
                    dangerMode: true,
                });
            })
    }
}


export const deleteUser = (userId) => {
    return async (dispatch) => {
        const url = "Users/update-by-id/" + userId;

        await endPoint.put(url, userId, { headers: { 'Content-Type': 'application/json' } }).
            then((response) => {
                debugger;
                var resp = response.data;
                dispatch(loadUsersData(resp));
            })
            .catch((error) => {
                console.log(error);
                swal({
                    title: "Error",
                    text: error,
                    icon: "error",
                    dangerMode: true,
                });
            })
    }
}