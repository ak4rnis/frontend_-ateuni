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


const AddUsuario = ({ closeEvent }) => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [avatarURL, setAvatarURL] = useState("");
    const [rol_usuario, setRol_usuario] = useState("");
    const setRows = useAppStore((state) => state.setRows);
    const dispatch = useDispatch();
    
  
    useEffect(() => {
      if (avatar) {
        const avatarURL = URL.createObjectURL(avatar);
        setAvatarURL(avatarURL);
      }
      getUsers()
    }, [avatar, dispatch]);
  
    const getUsers = async () => {
        try {
            const response = await dispatch(mostrarUsuarios());
            console.log(response); // Log the API response to the console
            setRows(response.payload.data.usuarios);
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
      if (avatar) {
        const storageRef = ref(storage, `usuarios/${avatar.name}`);
        await uploadBytes(storageRef, avatar);
        const imagenUrl = await getDownloadURL(storageRef);
        setAvatarURL(imagenUrl);
        dispatch(
            crearUsuario({ nombre, correo, contrasena, avatar: imagenUrl, rol_usuario })
          );
          
          closeEvent();
          Swal.fire(
            "El Usuario que ingresaste se ha registrado correctamente",
            "success"
          );
          getUsers();
          
      }
  
      
    };
  
    return (
      <>
        <Box sx={{ m: 2 }} />
        <Typography variant="h5" align="center">
          Agregar Usuario
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
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              type="email"
              value={correo}
              label="Correo"
              variant="outlined"
              size="small"
              sx={{ minWidth: "100%" }}
              onChange={handleCorreoChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              value={contrasena}
              label="Contraseña"
              variant="outlined"
              size="small"
              sx={{ minWidth: "100%" }}
              onChange={handleContrasenaChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              select
              value={rol_usuario}
              label="Rol de Usuario"
              variant="outlined"
              size="small"
              sx={{ minWidth: "100%" }}
              onChange={handleRolUsuarioChange}
            >
              <MenuItem value="cliente">cliente</MenuItem>
              <MenuItem value="profesor">Profesor</MenuItem>
              <MenuItem value="administrador">administrador</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              style={{ display: "none" }}
              id="upload-image-input"
            />
            <label htmlFor="upload-image-input">
              <Button
                variant="contained"
                component="span"
                startIcon={<AccountCircle />}
              >
                Subir Imagen
              </Button>
            </label>
          </Grid>
          <Grid item xs={6}>
            {avatar ? (
              <Avatar src={URL.createObjectURL(avatar)} sx={{ width: "100px", height: "100px" }} />
            ) : <Avatar sx={{width: "100px", height: "100px"}} />}
          </Grid>
          <Box height={2} />
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              <Button disabled={!avatar} variant="contained" onClick={createUser}>
                Guardar Cambios
              </Button>
            </Typography>
          </Grid>
        </Grid>
        
      </>
    );
  };
  
export default AddUsuario;