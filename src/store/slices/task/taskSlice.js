import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    taskId: null,
    teamData: null,
    personalData: null,
    projectList: null,
    roadmapList: null,
    actionType: '',
    taskEdit: {
        observation: null,
        reference: null,
        start: null,
        finish: null,
        projectDescription: null,
        roadmapDescription: null
    },
    projectDescription: '',
    roadmapDescription: '',
    reference: '',
    observation: '',
    start: null,
    finish: null,
    enableMantisFinder: false,
    isLoading: false,
    isDisabled: false,
    isModalOpening: false,
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        loadPersonalData: (state, { payload }) => {
            state.personalData = payload.data.map((d) => {
                return d;
            });
        },
        loadTeamData: (state, { payload }) => {
            state.teamData = payload.data.map((d) => {
                return d;
            });
        },
        loadEditData: (state, { payload }) => {

            state.taskEdit = payload.data;
            state.isModalOpening = true;
        },
        setIsLoadingData: (state, { payload }) => {
            state.isLoading = payload;
        },
        setDisabled: (state, { payload }) => {
            state.isDisabled = payload;
        },
        loadProjectData: (state, { payload }) => {

            state.projectList = payload.data.projectList.map((d) => {
                return d;
            })
            state.isLoading = false;
        },
        loadRoadmapData: (state, { payload }) => {

            state.roadmapList = payload.data.roadmapList.map((d) => {
                return d;
            });
            state.isLoading = false;
            state.isDisabled = false;
        },
        setModalState: (state, { payload }) => {
            state.isModalOpening = payload;
            if (payload === 'New') {
                state.taskEdit.projectDescription = null;
                state.taskEdit.roadmapDescription = null;
                state.taskEdit.reference = '';
                state.taskEdit.observation = '';
                state.taskEdit.start = null;
                state.taskEdit.finish = null;
            }
        },
        setActionType: (state, { payload }) => {
            state.actionType = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    loadPersonalData,
    loadTeamData,
    loadEditData,
    setIsLoadingData,
    setDisabled,
    loadProjectData,
    loadRoadmapData,
    setModalState,
    setActionType,
} = taskSlice.actions;