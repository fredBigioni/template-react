import React, { useState } from 'react';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    Box, Button, CircularProgress,
    Dialog, DialogActions, DialogContent, Grid,
    TextField, DialogTitle,
    Tooltip,
    Autocomplete,
    IconButton
} from '@mui/material';
import { Close, Edit, Fingerprint } from '@mui/icons-material'
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { createEditTask, createFinishNewTask, createNewTask, getRoadmapsData } from '../../../../store';


export const Modal = (props) => {
    const { onClose, open, title, data } = props;
    const { projectList, roadmapList, isLoading, taskEdit,
        isDisabled, actionType, enableMantisFinder, projectDescription } = useSelector(state => state.task);

    // 
    const [projectSelected, setProjectSelected] = useState('');

    useEffect(() => {
        setProjectSelected(projectDescription);
    }, [projectDescription])

    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();


    const validationSubmit = (event) => {

        if (actionType === "New" || actionType === "Finished") {
            //Si es una tarea nueva si o si tengo que tener roadmap y project
            if (event.target['project-select'].value != "" &&
                event.target["roadmap-select"].value != "") {
                if (actionType === "New") {
                    if ((event.target["datetime-start"].value == "" &&
                        event.target["datetime-finish"].value == "") ||
                        (event.target["datetime-finish"].value == "" &&
                            event.target["datetime-start"].value != "") ||
                        (event.target["datetime-finish"].value >=
                            event.target["datetime-start"].value)) {
                        //Guardar new
                        saveNewTaskMethod(event);
                    }
                    else {
                        swal({
                            title: "Error",
                            text: "La fecha de finalización de una tarea no puede ser inferior a la fecha de inicio de la misma, para poder guardar corrija estos datos",
                            icon: "error",
                            dangerMode: true,
                        });
                    }

                }
                else if (actionType === "Finished") {
                    if (event.target["datetime-start"].value != "" &&
                        event.target["time-input"].value != "") {
                        //Guardar nueva tarea finalizada
                        saveNewFinishedTaskMethod(event);
                    }
                    else {
                        swal({
                            title: "Error",
                            text: "Para guardar una tarea debe seleccionar la fecha de inicio y la cantidad de horas que le demoro realizar la tarea",
                            icon: "error",
                            dangerMode: true,
                        });
                    }
                }

            }
            else {
                swal({
                    title: "Error",
                    text: "Para guardar una tarea debe seleccionar un proyecto y roadmap",
                    icon: "error",
                    dangerMode: true,
                });
            }
        }
        else if (actionType === "Edit") {

            if ((event.target["datetime-finish"].value == "" &&
                event.target["datetime-start"].value != "") ||
                (event.target["datetime-finish"].value >=
                    event.target["datetime-start"].value)) {
                //Guardar edit

                editTaskMethod(event);
            }
            else {
                swal({
                    title: "Error",
                    text: "La fecha de finalización de una tarea no puede ser inferior a la fecha de inicio de la misma, para poder guardar corrija estos datos",
                    icon: "error",
                    dangerMode: true,
                });
            }
        }
    }

    const saveNewFinishedTaskMethod = (event) => {
        
        const projectId = projectList.filter(function (p) { return p.description === event.target["project-select"].value; })[0].id;
        const roadmapId = roadmapList.filter(function (p) { return p.description === event.target["roadmap-select"].value && p.projectId === projectId; })[0].id
        var objectToSend = {
            userId: parseInt(user.id),
            projectId: parseInt(projectId),
            roadmapId: parseInt(roadmapId),
            reference: event.target["reference-input"].value,
            observation: event.target["observation-input"].value,
            status: 'A',
            start: event.target["datetime-start"].value,
            cantidadHoras: event.target["time-input"].value
        }

        dispatch(createFinishNewTask(objectToSend));
    }

    const saveNewTaskMethod = (event) => {

        const projectId = projectList.filter(function (p) { return p.description === event.target["project-select"].value; })[0].id;
        const roadmapId = roadmapList.filter(function (p) { return p.description === event.target["roadmap-select"].value && p.projectId === projectId; })[0].id
        var objectToSend = {
            userId: parseInt(user.id),
            projectId: parseInt(projectId),
            roadmapId: parseInt(roadmapId),
            reference: event.target["reference-input"].value,
            observation: event.target["observation-input"].value,
            status: 'A',
        }

        if (event.target["datetime-start"].value !== "")
            objectToSend.start = event.target["datetime-start"].value;

        if (event.target["datetime-finish"].value !== "")
            objectToSend.finish = event.target["datetime-finish"].value

        dispatch(createNewTask(objectToSend));
    }

    const editTaskMethod = (event) => {

        var objectToSend = {
            userId: parseInt(user.id),
            reference: event.target["reference-input"].value,
            observation: event.target["observation-input"].value,
            id: taskEdit.id
        }

        if (event.target["datetime-finish"].value !== "")
            objectToSend.finish = event.target["datetime-finish"].value


        dispatch(createEditTask(objectToSend));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        validationSubmit(event);
    };

    const handleChangeProject = (selected, { id }) => {
        if (id) dispatch(getRoadmapsData(id));
    }

    
    return (
        <>
            {
                open &&
                <Dialog open={open} onClose={onClose} >
                    <Grid container >
                        <Grid item xs={11}>
                            <DialogTitle>{title}</DialogTitle>
                        </Grid>
                        <Grid item xs={1} pt={2}>
                            <Close onClick={onClose} className="closeIcon"></Close>
                        </Grid>

                    </Grid>
                    <form onSubmit={handleSubmit}>
                        <DialogContent>
                            {
                                isLoading && taskEdit ?
                                    <Box sx={{ display: 'flex', minWidth: 350 }}>
                                        <CircularProgress />
                                    </Box>
                                    :
                                    <div>
                                        <Grid container spacing={2}>
                                            {!isLoading &&
                                                <Grid item xs={6}>
                                                    {
                                                        actionType === 'Edit' ?// || filters.projectList.projectSelected ?
                                                            <TextField
                                                                defaultValue={taskEdit.projectDescription}
                                                                label="Proyecto"
                                                                id="project-select"
                                                                disabled
                                                                fullWidth
                                                            />
                                                            :
                                                            <Autocomplete
                                                                disablePortal
                                                                id="project-select"
                                                                options={projectList}
                                                                getOptionLabel={(option) => option.description}
                                                                name="Proyecto"
                                                                disabled={isDisabled}
                                                                sx={{ width: 300 }}
                                                                renderInput={(params) =>
                                                                    <TextField
                                                                        {...params}
                                                                        label="Proyecto"
                                                                    />}
                                                                onChange={handleChangeProject}
                                                            />
                                                    }
                                                </Grid>
                                            }
                                            {!isLoading &&
                                                <Grid item xs={12}>
                                                    {
                                                        actionType === 'Edit' ? //|| filters.roadmapList.roadmapSelected ?
                                                            <TextField
                                                                defaultValue={taskEdit.roadmapDescription}
                                                                label="Roadmap"
                                                                id="roadmap-select"
                                                                disabled
                                                                fullWidth
                                                            />
                                                            :
                                                            <Autocomplete
                                                                disablePortal
                                                                id="roadmap-select"
                                                                options={roadmapList}
                                                                getOptionLabel={(option) => option.description}
                                                                name="Roadmap"
                                                                disabled={isDisabled}
                                                                renderInput={(params) => <TextField {...params} label="Roadmap" />}
                                                            />
                                                    }
                                                </Grid>
                                            }
                                        </Grid>
                                        <Grid container spacing={2} sx={{ mt: 1 }}>
                                            <Grid item xs={9}>
                                                <TextField
                                                    fullWidth
                                                    id="reference-input"
                                                    name="reference"
                                                    label="Referencia/Ticket"
                                                    type="text"
                                                    variant="standard"
                                                    className="TextFieldValidated"
                                                    // inputProps={{ style: { color: `${renderReferenceColor()}` } }}
                                                    defaultValue={actionType === 'Edit' ?
                                                        taskEdit.reference
                                                        :
                                                        ''
                                                    }
                                                    disabled={isDisabled}
                                                // onChange={(ev) => setReferenceNumber(ev.target.value)}
                                                // onKeyDown={(e) => {
                                                //     if (filters.reference.validated) { dispatch(setReferenceValidated(null)) }
                                                // }}
                                                />
                                                <div className="labelMantis">
                                                    {/* <b><i>{filters.reference.labelMantisReference}</i></b> */}
                                                </div>
                                            </Grid>
                                            <Grid item xs={3} sx={{ mt: 2 }}>
                                                {enableMantisFinder &&
                                                    <Tooltip title="Buscar Referencia">
                                                        <IconButton
                                                            color="secondary"
                                                            aria-label="add an alarm"
                                                        // onClick={() => { dispatch(findOnMantis({ referenceNumber })) }}
                                                        >
                                                            <Fingerprint />
                                                        </IconButton>
                                                    </Tooltip>
                                                }
                                            </Grid>
                                            <Grid item xs={12} >
                                                <TextField
                                                    id="observation-input"
                                                    fullWidth
                                                    multiline={true}
                                                    name="observation"
                                                    label="Observación"
                                                    type="text"
                                                    variant="standard"
                                                    defaultValue={actionType === 'Edit' ?
                                                        taskEdit.observation
                                                        :
                                                        ''}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    id="datetime-start"
                                                    fullWidth
                                                    sx={{ minWidth: 250 }}
                                                    label="Desde"
                                                    disabled={actionType === 'Edit' ? true : false}
                                                    type={actionType === 'Finished' ? "date" : "datetime-local"}
                                                    defaultValue={actionType === 'Edit' ?
                                                        taskEdit.start
                                                        :
                                                        ''}
                                                    variant="standard"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </Grid>
                                            {actionType !== "Finished" &&
                                                <Grid item xs={6}>
                                                    <TextField
                                                        id="datetime-finish"
                                                        fullWidth
                                                        sx={{ minWidth: 250 }}
                                                        label="Hasta"
                                                        type="datetime-local"
                                                        variant="standard"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </Grid>
                                            }
                                            {actionType === "Finished" &&
                                                <Grid item xs={6}>
                                                    <TextField
                                                        id="time-input"
                                                        fullWidth
                                                        // value={valInput}
                                                        // onChange={validateOnChange}
                                                        multiline={true}
                                                        name="hours"
                                                        label="hours"
                                                        type="numeric"
                                                        variant="standard"
                                                    />
                                                </Grid>
                                            }
                                        </Grid>
                                    </div>
                            }
                        </DialogContent>
                        <DialogActions>
                            <Grid>
                                <Button variant="contained" color="primary" type="submit">
                                    Guardar
                                </Button>
                            </Grid>
                        </DialogActions>
                    </form>

                </Dialog >
            }
        </>

    );
}

Modal.propTypes = {
    // onClose: PropTypes.func.isRequired,
    // open: PropTypes.bool.isRequired,
};