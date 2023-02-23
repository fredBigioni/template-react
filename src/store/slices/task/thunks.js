import axios from 'axios';
import { endPoint } from '../../../api';
import swal from 'sweetalert';
import {
    loadPersonalData,
    loadTeamData,
    loadEditData,
    setIsLoadingData,
    setDisabled,
    loadProjectData,
    loadRoadmapData,
    setModalState,
} from './taskSlice';

export const getUserTasks = (userId) => {
    return async (dispatch) => {

        const url = "/Tasks/by-user/" + userId;
        dispatch(setIsLoadingData(true));
        
        await endPoint.get(url).
            then((response) => {
                var resp = response.data;

                dispatch(loadPersonalData(resp));
            })
            .catch((error) => {

                console.log(error);
                // alert("ERROR: Ocurrio un error al intentar ejecuar getUserTasks: por favor arreglelo o recargue la pagina");
                swal({
                    title: "Error",
                    text: `ERROR: Ocurrio un error al intentar ejecuar getUserTasks: ${error}`,
                    icon: "error",
                    dangerMode: true,
                });
            })
        dispatch(setIsLoadingData(false));
    }
};

export const getOpenTasks = (teamId) => {
    return async (dispatch) => {

        const url = "/Tasks/by-open/" + teamId;
        dispatch(setIsLoadingData(true));
        await endPoint.get(url).
            then((response) => {
                var resp = response.data;
                
                dispatch(loadTeamData(resp));
            })
            .catch((error) => {

                console.log(error);
                // alert("ERROR: Ocurrio un error al intentar ejecuar getUserTasks: por favor arreglelo o recargue la pagina");
                swal({
                    title: "Error",
                    text: `ERROR: Ocurrio un error al intentar ejecuar getUserTasks: ${error}`,
                    icon: "error",
                    dangerMode: true,
                });
            })
        dispatch(setIsLoadingData(false));
    }
};

export const getProjectsData = (teamId) => {
    return async (dispatch) => {
        const url = "Tasks/projects-data/" + teamId;

        dispatch(setIsLoadingData(true));
        dispatch(setDisabled(true));

        await endPoint.get(url).
            then((response) => {
                var resp = response.data;
                dispatch(loadProjectData(resp));
                dispatch(setDisabled(false));
            })
            .catch((error) => {
                console.log(error);
                dispatch(loadProjectData({ data: { projectList: [] } }
                ));
            })
    }
}

export const getRoadmapsData = (projectId) => {
    return async (dispatch) => {
        const url = "Tasks/roadmaps-data/" + projectId;
        // dispatch(setIsLoadingData(true));
        // dispatch(setDisabled(true));
        await endPoint.get(url).
            then((response) => {
                var resp = response.data;

                dispatch(loadRoadmapData(resp));

                //Si projectId es SFNET, entonces habilito la busqueda
                // if (projectId === 207)
                //     dispatch(enableMantisFinderByProject(true));
                // else
                //     dispatch(enableMantisFinderByProject(false));
            })
            .catch((error) => {
                console.log(error);
                dispatch(loadRoadmapData({ data: { roadmapList: [] } }
                ));

                // swal({
                //     title: "Error",
                //     text: error,
                //     icon: "error",
                //     dangerMode: true,
                // });
            })
    }
}


export const createFinishNewTask = (dataToSave) => {
    return async (dispatch) => {
        const url = "Tasks/save-new-finished-task/" + dataToSave.userId;

        var data = dataToSave;

        await endPoint.post(url, data, { headers: { 'Content-Type': 'application/json' } }).
            then((response) => {
                var resp = response.data;
                dispatch(setModalState(false));
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

export const createNewTask = (dataToSave) => {
    return async (dispatch) => {
        const url = "Tasks/save-new-task/" + dataToSave.userId;

        var data = dataToSave;

        await endPoint.post(url, data, { headers: { 'Content-Type': 'application/json' } }).
            then((response) => {
                var resp = response.data;
                dispatch(setModalState(false));
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


export const createEditTask = (dataToSave) => {
    return async (dispatch) => {
        const url = "Tasks/save-edit-task/";
        var data = dataToSave;

        await endPoint.put(url, data, { headers: { 'Content-Type': 'application/json' } }).
            then((response) => {
                var resp = response.data;
                dispatch(setModalState(false));
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

export const editTask = (taskId) => {
    return async (dispatch) => {
        const url = "Tasks/get-specifict-task/" + taskId;

        endPoint.get(url).
            then((response) => {
                var resp = response.data;

                if (resp !== null) {
                    dispatch(loadEditData(resp));
                }
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