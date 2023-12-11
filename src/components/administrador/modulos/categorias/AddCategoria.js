/* eslint-disable react-hooks/exhaustive-deps */

import { Box, Button, Grid, IconButton, InputAdornment, MenuItem, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {collection, addDoc, getDocs} from "firebase/firestore";
import {db, storage} from "../../../../firebase-config";
import Swal from 'sweetalert2';
import { useAppStore } from '../../../../appStore';
import {useDispatch, useSelector} from "react-redux";
import { crearUsuario, mostrarUsuarios } from '../../../../actions/usuariosAction';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { AccountCircle, Close, CurrencyRupee } from '@mui/icons-material'
import {Avatar} from "@mui/material"
import { crearCategoria, mostrarCategorias } from '../../../../actions/categoriasAction';


const AddUsuario = ({ closeEvent }) => {
    const [nombre, setNombre] = useState("");
    
    const setRows = useAppStore((state) => state.setRows);
    const dispatch = useDispatch();
    
  
   
  
    const getUsers = async () => {
        try {
            const response = await dispatch(mostrarCategorias());
            console.log(response); // Log the API response to the console
            setRows(response?.payload?.data?.categoria);
          } catch (error) {
            console.error("Error fetching usuarios:", error);
            // Handle the error, show a message, or set an error state if needed
          }
    }
    const handleNombreChange = (event) => {
      setNombre(event.target.value);
    };
  
    
  
    const createUser = async () => {
      
        dispatch(
            crearCategoria({ nombre: nombre})
          );
          
          closeEvent();
          Swal.fire(
            "La Categoría que ingresaste se ha registrado correctamente",
            "success"
          );
          getUsers();
          
      
  
      
    };
  
    return (
      <>
        <Box sx={{ m: 2 }} />
        <Typography variant="h5" align="center">
          Agregar Categoría
        </Typography>
        <IconButton style={{ position: "absolute", top: "0", right: "0" }} onClick={closeEvent}>
          <Close />
        </IconButton>
        <Box height={20} />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              value={nombre}
              label="Nombre Completo"
              variant="outlined"
              size="small"
              sx={{ minWidth: "100%" }}
              onChange={handleNombreChange}
            />
          </Grid>
          
          <Box height={2} />
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              <Button  variant="contained" onClick={createUser}>
                Guardar Cambios
              </Button>
            </Typography>
          </Grid>
        </Grid>
        
      </>
    );
  };
  
export default AddUsuario;