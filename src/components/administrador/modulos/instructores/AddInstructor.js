/* eslint-disable react-hooks/exhaustive-deps */

import { Box, Button, Grid, IconButton, InputAdornment, MenuItem, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db, storage } from "../../../../firebase-config";
import Swal from 'sweetalert2';
import { useAppStore } from '../../../../appStore';
import { useDispatch } from "react-redux";
import { crearInstructor, mostrarInstructores } from '../../../../actions/instructoresAction';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { AccountCircle, Close, CurrencyRupee } from '@mui/icons-material'
import { Avatar } from "@mui/material"
import { mostrarUsuarios } from '../../../../actions/usuariosAction';

const AddUsuario = ({ closeEvent }) => {
  const [usuario, setUsuario] = useState("");
  const [biografia, setBiografia] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [foto_perfil, setFotoPerfil] = useState(null);
  const [avatarURL, setAvatarURL] = useState("");

  const dispatch = useDispatch();

  const getUsuarios = async () => {
    try {
      const response = await dispatch(mostrarUsuarios());
      const usuariosData = response?.payload?.data?.usuarios;
  
      if (usuariosData && usuariosData.length > 0) {
        setUsuarios(usuariosData);
      } else {
        console.log("No se encontraron usuarios o la lista está vacía.");
      }
    } catch (error) {
      console.error("Error fetching usuarios:", error);
    }
  }

  useEffect(() => {
    getUsuarios();
  }, [dispatch]);

  useEffect(() => {
    if (foto_perfil) {
      const avatarURL = URL.createObjectURL(foto_perfil);
      setAvatarURL(avatarURL);
    }
  }, [foto_perfil]);

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleBiografiaChange = (event) => {
    setBiografia(event.target.value);
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setFotoPerfil(file);
  };

  const createUser = async () => {
    if (foto_perfil) {
      const storageRef = ref(storage, `instructores/${foto_perfil.name}`);
      await uploadBytes(storageRef, foto_perfil);
      const imagenUrl = await getDownloadURL(storageRef);
      setAvatarURL(imagenUrl);
      dispatch(
        crearInstructor({ usuario_id: usuario, biografia, foto_perfil_url: imagenUrl })
      );

      closeEvent();
      Swal.fire(
        "El Instructor que ingresaste se ha registrado correctamente",
        "success"
      );
      getUsuarios();
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
          <TextField id="outlined-basic" select value={usuario} label="Usuario" variant="outlined" size="small" sx={{ minWidth: "100%" }} onChange={handleUsuarioChange}>
            {usuarios.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            value={biografia}
            label="Biografía"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            onChange={handleBiografiaChange}
          />
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
          {foto_perfil ? (
            <Avatar src={URL.createObjectURL(foto_perfil)} sx={{ width: "100px", height: "100px" }} />
          ) : <Avatar sx={{ width: "100px", height: "100px" }} />}
        </Grid>
        <Box height={2} />
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button disabled={!foto_perfil} variant="contained" onClick={createUser}>
              Guardar Cambios
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AddUsuario;