import  React, {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Divider, Typography, Stack, TextField, Autocomplete, Modal } from '@mui/material';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux"

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { useAppStore } from '../../../../appStore';
import {Avatar} from "@mui/material";

import AddUsuario from './AddSeccion';
import EditUsuario from './EditSeccion';

import { mostrarUsuarios } from '../../../../actions/usuariosAction';
import { mostrarSecciones } from '../../../../actions/seccionesAction';



const translations = {
  
  rowsPerPage: 'Filas por página',
  page: 'Página',
  of: 'de',
  
};
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  };

export default function SeccionList(){
    const dispatch = useDispatch();
    const {usuarios} = useSelector((state) => state.usuarios);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [formid, setFormid] = useState("");
    const rows = useAppStore((state) => state.rows);
    const setRows = useAppStore((state) => state.setRows);
    
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);
    const [listausuarios, setListausuarios] = ([]);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };  
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const deleteUser = (id) => {
        Swal.fire({
          title: "Eliminar Usuario:",
          text: "Estas seguro que quieres eliminar el usuario",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, quiero eliminarlo",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if(result.value){
            deleteApi(id);
          }
        });
      };
      useEffect(() => {
        
      
        getUsers();
      
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [dispatch]);
      const uniqueRows = Array.from(new Set(rows.map((row) => row.curso_titulo)));
    
      const getUsers = async () => {
        
            try {
              const response = await dispatch(mostrarSecciones());
              console.log(response); // Log the API response to the console
              setRows(response.payload.data.seccion);
            } catch (error) {
              console.error("Error fetching usuarios:", error);
              // Handle the error, show a message, or set an error state if needed
            }
          
      }
    
      const deleteApi = async (id) => {
        
        Swal.fire("Eliminado!", "El Usuario se ha sido eliminado correctamente", "success");
        getUsers();
      }
    
      const filterData = (v) => {
        if(v){
          setRows([v]);
        }else{
          setRows([]);
          getUsers();
        }
      }
    
      const editData = (id) => {
        const data = {
          id: id,
         

           
          
        };
        setFormid(data);
        handleOpenEdit();
      }

    return(
        <>
            <div>
                <Modal open={open} 
                    //onClose={handleClose} 
                    aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <AddUsuario closeEvent={handleClose}  />
                    </Box>
                </Modal>
            </div>
            <div>
                <Modal open={openEdit} 
                //onClose={handleClose} 
                aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <EditUsuario closeEvent={handleCloseEdit} fit={formid}  />
                </Box>
                </Modal>
    </div>
            
        <Paper sx={{ width: '98%', overflow: 'hidden', padding: "12px" }}>
        <Typography gutterBottom variant='h5' component="div" sx={{padding: "20px"}}>
            Las Secciones
        </Typography>
        <Divider />
        <Box height={10} />
        <Stack direction="row" spacing={2} className='my-2 mb-2'>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={rows}
            sx={{width: 300}}
            onChange={(e, v) => filterData(v)}
            getOptionLabel={(rows) => rows.nombre || ""}
            renderInput={(params) => (
              <TextField {...params} size="small" label="Buscar Sección" />
            )}
          />
          
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}></Typography>
          <Button variant='contained' onClick={handleOpen} endIcon={<AddCircleIcon />}>
            Agregar
          </Button>
        </Stack>
        <Box height={10} />
  <TableContainer sx={{ maxHeight: 440 }}>
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          <TableCell
            align='left'
            style={{minHeight: "100px"}}
          >
            Título
          </TableCell>
          <TableCell
            align='left'
            style={{minHeight: "100px"}}
          >
            Duración
          </TableCell>
          <TableCell
            align='left'
            style={{minHeight: "100px"}}
          >
            Curso
          </TableCell>
        
          
          
          <TableCell
            align='left'
            style={{minHeight: "100px"}}
          >
            Opciones
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.isArray(rows) && rows.length > 0 ? (
          rows.slice(page  * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell  align="left">
                  {row.titulo}
                </TableCell>
                <TableCell  align="left">
                  {row.duracion}
                </TableCell>
                <TableCell  align="left">
                  {row.curso_titulo}
                </TableCell>
                
                
                <TableCell align='left'>
                  <Stack spacing={2} direction="row">
                    <EditIcon style={{fontSize: "20px", color: "blue", cursor: "pointer"}} className='cursor-pointer' onClick={() => {
                      editData(row.id)
                    }} />
                    
                  </Stack>
                </TableCell>
              </TableRow>
            );
          })) : (
            <TableRow>
    <TableCell colSpan={5} align="center">
      No hay usuarios para mostrar.
    </TableCell>
  </TableRow>
          )}
      </TableBody>
    </Table>
  </TableContainer>
  <TablePagination
    rowsPerPageOptions={[10, 25, 100]}
    component="div"
    count={rows.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
    labelRowsPerPage={translations.rowsPerPage} 
    labelDisplayedRows={({ from, to, count }) => `${translations.page} ${from}-${to} ${translations.of} ${count}`}
  />
    </Paper>
      

        </>
    )
}