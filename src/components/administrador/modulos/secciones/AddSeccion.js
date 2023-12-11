import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Box, Button, Grid, IconButton, InputAdornment, MenuItem, TextField, Typography } from '@mui/material';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db, storage } from "../../../../firebase-config";
import Swal from 'sweetalert2';
import { useAppStore } from '../../../../appStore';
import { useDispatch, useSelector } from "react-redux";
import { crearUsuario, mostrarUsuarios } from '../../../../actions/usuariosAction';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { AccountCircle, Close, CurrencyRupee } from '@mui/icons-material';
import { crearCurso, mostrarCursos } from '../../../../actions/cursosAction';
import {crearSeccion, mostrarSecciones} from "../../../../actions/seccionesAction";

const AddUsuario = ({ closeEvent }) => {
  const [titulo, setTitulo] = useState("");
  const [url, setUrl] = useState(null);
  const [duracion, setDuracion] = useState(0);
  const [curso, setCurso] = useState("");
  const [avatarURL, setAvatarURL] = useState("");
  const [cursos, setCursos] = useState([]);
  const setRows = useAppStore((state) => state.setRows);
  const dispatch = useDispatch();

  const getCursos = async () => {
    const response = await dispatch(mostrarCursos());
    setCursos(response?.payload?.data?.cursos);
  }

  useEffect(() => {
    getCursos();
  }, [dispatch]);

  useEffect(() => {
    if (url) {
      const avatarURL = URL.createObjectURL(url);
      setAvatarURL(avatarURL);
    }
    getUsers()
  }, [url, dispatch]);

  const getUsers = async () => {
    try {
      const response = await dispatch(mostrarSecciones());
      console.log(response); // Log the API response to the console
      setRows(response.payload.data.seccion);
    } catch (error) {
      console.error("Error fetching usuarios:", error);
    }
  }

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleDuracionChange = (event) => {
    setDuracion(event.target.value);
  };
  const handleCursoChange = (event) => {
    setCurso(event.target.value);
  };

  const handleUrlChange = (event) => {
    const file = event.target.files[0];
    setUrl(file);
  };

  const createUser = async () => {
    if (url) {
      const storageRef = ref(storage, `secciones/${url.name}`);
      await uploadBytes(storageRef, url);
      const videoUrl = await getDownloadURL(storageRef);
      setAvatarURL(videoUrl);

      dispatch(
        crearSeccion({ titulo: titulo, duracion: duracion, curso_id: curso, url: videoUrl })
      );

      closeEvent();
      Swal.fire(
        "La sección que ingresaste se ha registrado correctamente",
        "success"
      );
      getUsers();

    }
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Agregar Sección
      </Typography>
      <IconButton style={{ position: "absolute", top: "0", right: "0" }} onClick={closeEvent}>
        <Close />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            value={titulo}
            label="Titulo"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            onChange={handleTituloChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            select
            value={curso}
            label="Curso"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            onChange={handleCursoChange}
          >
            {cursos.map((option) => (
              <MenuItem key={option.id} value={option.id}>{option.titulo}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <input
            type="file"
            accept="video/*"
            onChange={handleUrlChange}
            style={{ display: "none" }}
            id="upload-video-input"
          />
          <label htmlFor="upload-video-input">
            <Button
              variant="contained"
              component="span"
              startIcon={<AccountCircle />}
            >
              Subir Video
            </Button>
          </label>
        </Grid>
        <Grid item xs={12}>
          {url && (
            <ReactPlayer
              url={URL.createObjectURL(url)}
              width="300px"
              height="200px"
              controls
              onDuration={(duration) => setDuracion(Math.round(duration))}
            />
          )}
        </Grid>
        <Box height={2} />
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button disabled={!url} variant="contained" onClick={createUser}>
              Guardar Cambios
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AddUsuario;