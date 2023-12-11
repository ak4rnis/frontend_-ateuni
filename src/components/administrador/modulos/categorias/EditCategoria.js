import { AccountCircle, Close, CurrencyRupee } from '@mui/icons-material'
import { Box, Button, Grid, IconButton, InputAdornment, MenuItem, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {collection, addDoc, getDocs, updateDoc, doc} from "firebase/firestore";
import { db, storage } from '../../../../firebase-config';
import Swal from 'sweetalert2';
import { useAppStore } from '../../../../appStore';
import {Avatar} from "@mui/material"
import {useDispatch, useSelector} from "react-redux";
import { actualizarUsuario, mostrarUsuarios, verUsuarioPorId } from '../../../../actions/usuariosAction';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {actualizarCategoria, mostrarCategorias, verCategoriaPorId} from "../../../../actions/categoriasAction";

const EditUsuario = ({closeEvent, fit}) => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [avatarURL, setAvatarURL] = useState({ file: null, url: fit.imagen || "" });
    const [rol_usuario, setRol_usuario] = useState("");
    
    const dispatch = useDispatch();
    
    const setRows = useAppStore((state) => state.setRows);
    const empCollectionRef = collection(db, "usuarios");
    const enpCollectionAreasRef = collection(db, "areas");
    const enpCollectionProductosRef = collection(db, "perfiles");
    
    const getUsuarioPorId = async () => {
        try{
            const response = await dispatch(verCategoriaPorId(fit.id));
            console.log(response);
            setNombre(response?.payload?.data?.categoria?.nombre);
            
            

        }catch(error){
            console.error("Error fetching usuarios:", error);
        }
    }



    
    
    useEffect(() => {
        getUsuarioPorId();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getUsers = async () => {
        try {
            const response = await dispatch(mostrarCategorias());
            console.log(response); // Log the API response to the console
            setRows(response.payload.data.categoria);
          } catch (error) {
            console.error("Error fetching usuarios:", error);
            // Handle the error, show a message, or set an error state if needed
          }
    }
    const handleNombreChange = (event) => {
        setNombre(event.target.value);
      };
    
      const handleCorreoChange = (event) => {
        setCorreo(event.target.value);
      };
      const handleContrasenaChange = (event) => {
        setContrasena(event.target.value);
      };
    
      const handleRolUsuarioChange = (event) => {
        setRol_usuario(event.target.value);
      };
    
      const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        setAvatar(file);
      };

    const createUser = async () => {
        
        dispatch(
            actualizarCategoria({id:fit.id, nombre: nombre})
          );
       
        getUsers();
        closeEvent();
        Swal.fire("Actualizando!", "Los datos de la categoría han sido actualizado.", "success"); 
    }
    return(
        <>
            <Box sx={{m: 2}} />
            <Typography variant="h5" align='center'>
                Editar Categoría
            </Typography>
            <IconButton style={{position: "absolute", top: "0", right: "0"}} onClick={closeEvent}>
                <Close />
            </IconButton>
            <Box height={20} />
            <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              value={nombre}
              label="Nombre"
              variant="outlined"
              size="small"
              sx={{ minWidth: "100%" }}
              onChange={handleNombreChange}
            />
          </Grid>
          
          
          <Box height={2} />
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              <Button variant="contained" onClick={createUser}>
                Guardar Cambios
              </Button>
            </Typography>
          </Grid>
        </Grid>
            
            <Box sx={{m: 4}} />



        </>
    )
}

export default EditUsuario;