import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { Box, Card, CardContent, CircularProgress, Grid, Stack, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import MaterialReactTable from 'material-react-table';
import { Modal } from './components';
import { getAllUsers } from '../../../store';
import { Edit } from '@mui/icons-material';

export const UserView = () => {

    const { user } = useSelector(state => state.auth);
    const { userData, isLoading, isModalOpening } = useSelector(state => state.user);
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    const handleClose = (value) => {
        // dispatch(setModalState(false));
    };

    const openModal = (row) => {

        const userId = row.original.userId;

        if (userId === id) {
            const taskId = row.original.id;
            //   dispatch(editTask(taskId));
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
        setTitle('Editar Usuario');
        // dispatch(setActionType('Edit'));
        openModal(row);
    }
    const columnsUsersData = useMemo(() => [
        {
            accessorKey: 'userName',
            header: 'Usuario',
        },
        {
            accessorKey: 'firstName',
            header: 'Nombre',
        },
        {
            accessorKey: 'lastName',
            header: 'Apellido',
        },
        {
            accessorKey: 'email',
            header: 'Email',
        },
        {
            accessorKey: 'password',
            header: 'Contraseña',
        },
        {
            accessorKey: 'rolDescription',
            header: 'Rol',
        },
        {
            accessorKey: 'id',
            header: 'UserId',
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
            accessorKey: 'status',
            header: 'Estado',
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
        // {
        //     accessorKey: 'creationDate',
        //     header: 'Fecha Creación',
        // },
        // {
        //     accessorKey: 'description',
        //     header: 'Descripción',
        // },
        // {
        //   accessorKey: 'creationDate',
        //   header: 'Fecha creación',
        //   size: 0,
        //   // Header: renderAddTask ,
        //   muiTableHeadCellProps: ({ column }) => ({
        //     sx: {
        //       visibility: 'hidden',
        //     },
        //   }),
        //   Cell: ({ cell, column }) => (
        //     <>{cell.visibility = false}</>
        //   )
        // },
        // {
        //   accessorKey: 'userId',
        //   header: 'userid',
        //   size: 0,
        //   // Header: renderAddTask ,
        //   muiTableHeadCellProps: ({ column }) => ({
        //     sx: {
        //       visibility: 'hidden',
        //     },
        //   }),
        //   Cell: ({ cell, column }) => (
        //     <>{cell.visibility = false}</>
        //   )
        // },
    ]);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [])

    const renderColumnActions = () => {
        return (
            <>Actions</>
        );
    }
    return (
        <>

            <Modal
                open={isModalOpening}
                onClose={handleClose}
                title={title}
            />
            {/* <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Card sx={{}} >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Datos personales
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div" // sx={{ color: "#CCD1D1" }}
                            >
                                <b>Nombre:</b> <i> {user.firstName} {user.lastName}</i>
                                <br />
                                <b>Equipo:</b> <i>{user.teamName}</i>
                                <br />
                                <b>Rol:</b> <i>{user.rolDescription}</i>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid> */}
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
                                        // isLoading ? <CircularProgress disableShrink /> :
                                        <>
                                            <Suspense fallback={<CircularProgress disableShrink />}>
                                                <MaterialReactTable
                                                    columns={columnsUsersData}
                                                    data={userData}
                                                    title='Tareas del Equipo'
                                                    displayColumnDefOptions={{
                                                        'mrt-row-actions': {
                                                            Header: renderColumnActions,
                                                            size: 100,
                                                            //use a text button instead of a icon button
                                                            Cell: ({ row, table }) => (
                                                                // <Button onClick={() => table.setEditingRow(row)}>Edit Customer</Button>
                                                                <span><Edit className='editIcon'
                                                                    onClick={() => {
                                                                        alert(row)
                                                                    }} /></span>
                                                            ),
                                                        }
                                                    }}
                                                    initialState={{ pagination: { pageSize: 5, pageIndex: 0 } }}
                                                    muiTableProps={{
                                                        sx: {
                                                            tableLayout: 'fixed',
                                                        },
                                                    }}
                                                    enableEditing
                                                />
                                            </Suspense>
                                        </>
                                    }
                                </Stack>
                            </Card>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}
