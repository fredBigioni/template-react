import React, { useMemo, useState } from 'react';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import MaterialReactTable from 'material-react-table';
import { getUserTasks, getOpenTasks, loadEditData, getProjectsData, setModalState, editTask, setActionType } from "../../../store";
import { Box, Card, CircularProgress, Grid, IconButton, Stack, Tooltip } from '@mui/material';
import { AccordionComponent } from '../../../ui';
import { AlarmAdd, AlarmOn, Edit } from '@mui/icons-material'
import { Modal } from './components';

export const TaskView = () => {

  const [title, setTitle] = useState('');
  const [isOpenedTask, setIsOpenedTask] = useState(false);

  const { isLoading, personalData, teamData, isModalOpening, actionType } = useSelector(state => state.task);
  const { id, teams } = useSelector(state => state.auth.user);
  const teamId = teams[0];
  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(getUserTasks(id));
    dispatch(getOpenTasks(teamId));
  }, [isModalOpening])

  React.useEffect(() => {
    validateOpenedTask();
  }, [teamData])

  useMemo(() => {
    dispatch(getProjectsData(teamId));
  }, [])

  const renderAddTask = (params) => {
    return (
      <Grid container>
        <Tooltip title="Nueva Tarea">
          <IconButton
            color="secondary"
            sx={{
              // marginBottom: 3
            }}
            onClick={() => {

              validateOpenedTask();
              if (isOpenedTask) {
                swal({
                  title: "Atención!",
                  text: "Existe una tarea abierta. Si procede con la creación de una nueva tarea se cerrá automaticamente la tarea abierta. Desea continua?",
                  icon: "warning",
                  buttons: true,
                  confirmButtonText: "Si",
                  showCancelButton: true,
                }).then((result) => {
                  if (result) {
                    setTitle('Nueva Tarea');
                    dispatch(setModalState(true));
                    dispatch(setActionType('New'));
                  }
                })
              }
              else {
                setTitle('Nueva Tarea');
                dispatch(setModalState(true));
                dispatch(setActionType('New'));
              }
            }}
          >
            <AlarmAdd />
          </IconButton>
        </Tooltip>
        <Tooltip title="Nueva Tarea Finalizada">
          <IconButton
            color="secondary"
            onClick={() => {
              setTitle('Nueva Tarea Finalizada');
              dispatch(setModalState(true));
              dispatch(setActionType('Finished'));
            }}
          >
            <AlarmOn />
          </IconButton>
        </Tooltip>
      </Grid>
    )
  }

  const columnsTeamData = useMemo(() => [
    {
      accessorKey: 'userName',
      header: 'Usuario',
    },
    {
      accessorKey: 'start',
      header: 'Comienzo',
    },
    {
      accessorKey: 'projectDescription',
      header: 'Proyecto',
    },
    {
      accessorKey: 'roadmapDescription',
      header: 'Roadmap',
    },
    {
      accessorKey: 'reference',
      header: 'Referencia',
    },
    {
      accessorKey: 'id',
      header: 'id',
      size: 0,
      // Header: renderAddTask ,
      muiTableHeadCellProps: ({ column }) => ({
        sx: {
          visibility: 'hidden',
        },
      }),
      Cell: ({ cell, column }) => (
        <>{cell.visibility = false}</>
      )
    },
    {
      accessorKey: 'userId',
      header: 'userid',
      size: 0,
      // Header: renderAddTask ,
      muiTableHeadCellProps: ({ column }) => ({
        sx: {
          visibility: 'hidden',
        },
      }),
      Cell: ({ cell, column }) => (
        <>{cell.visibility = false}</>
      )
    },
  ]);

  const columnsPersonalData = useMemo(() => [
    {
      accessorKey: 'start',
      header: 'Inicio',
    },
    {
      accessorKey: 'projectDescription',
      header: 'Proyecto',
    },
    {
      accessorKey: 'roadmapDescription',
      header: 'Roadmap',
    },
    {
      accessorKey: 'reference',
      header: 'Referencia',
    },
    {
      accessorKey: 'timeSpent',
      header: 'Tiempo',
    },
  ]);


  const validateOpenedTask = () => {

    if (teamData.length > 0) {

      let openTask = teamData.filter((p) => {
        return p.userId === id
      });

      
      if (openTask.length > 0)
        setIsOpenedTask(true)
      else
        setIsOpenedTask(false);
    }
    else {
      setIsOpenedTask(false);
    }
  }

  const handleClose = (value) => {
    dispatch(setModalState(false));
  };

  const openModal = (row) => {

    const userId = row.original.userId;
    
    if (userId === id) {
      const taskId = row.original.id;
      dispatch(editTask(taskId));
    }
    else {
      swal({
        title: "Error",
        text: "No se puede cerrar una tarea que no sea propia",
        icon: "error",
        dangerMode: true,
      })
    }
  };

  const handleEdit = (row) => {
    const taskId = row.original.id;
    setTitle('Cerrar Tarea');
    dispatch(setActionType('Edit'));
    openModal(row);
  }

  return (
    <>
      <Modal
        open={isModalOpening}
        onClose={handleClose}
        title={title}
      />

      <Box
        sx={{
          mb: 2,
          display: "flex",
          flexDirection: "column",
          // height: 300,
          // overflow: "hidden",
          // overflowY: "scroll",
        }}
      >
        <Grid container>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={2}>
              <Card>
                <Stack spacing={1} direction="column">
                  {
                    isLoading ? <CircularProgress disableShrink /> :
                      <>
                        <AccordionComponent>
                          <MaterialReactTable
                            columns={columnsTeamData}
                            data={teamData}
                            displayColumnDefOptions={{
                              'mrt-row-actions': {
                                Header: renderAddTask,
                                size: 100,
                                //use a text button instead of a icon button
                                Cell: ({ row, table }) => (
                                  // <Button onClick={() => table.setEditingRow(row)}>Edit Customer</Button>
                                  <span><Edit className='editIcon' onClick={() => { handleEdit(row) }} /></span>
                                ),
                              }
                            }}
                            // icons={{
                            //   ClearAllIcon: () => (<div></div>),
                            //   DensityLargeIcon: () => (<div></div>),
                            //   DensityMediumIcon: () => (<div></div>),
                            //   DensitySmallIcon: () =>  (<div></div>),
                            //   DragHandleIcon: () =>  (<div></div>),
                            //   FilterListIcon: (props) =>  (<div></div>),
                            //   FilterListOffIcon: () => (<div></div>),
                            //   FullscreenExitIcon: () => (<div></div>),
                            //   FullscreenIcon: () => (<div></div>),
                            //   SearchIcon: (props) => (<div></div>),
                            //   SearchOffIcon: () => (<div></div>),
                            //   ViewColumnIcon: () => (<div></div>),
                            //   MoreVertIcon: () => (<div></div>),
                            //   MoreHorizIcon: () => (<div></div>),
                            //   SortIcon: (props) => (<div></div>),
                            //   PushPinIcon: (props) => (<div></div>),
                            //   VisibilityOffIcon: () => (<div></div>),
                            // }}
                            title='Tareas del Equipo'
                            expanded={true}
                            initialState={{ pagination: { pageSize: 5, pageIndex: 0 } }}
                            muiTableProps={{
                              sx: {
                                tableLayout: 'fixed',
                              },
                            }}
                            enableEditing
                          />
                        </AccordionComponent>
                        <AccordionComponent>
                          <MaterialReactTable
                            columns={columnsPersonalData}
                            data={personalData}
                            title='Tareas Finalizadas'
                            expanded={false}
                            muiTableProps={{
                              sx: {
                                tableLayout: 'fixed',
                              },
                            }}
                            initialState={{ pagination: { pageSize: 5, pageIndex: 0 } }}
                          />
                        </AccordionComponent>
                      </>
                  }
                </Stack>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}



