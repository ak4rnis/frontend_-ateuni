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
import { actualizarSeccion, mostrarSecciones, verSeccionPorId } from '../../../../actions/seccionesAction';
import ReactPlayer from 'react-player';
import { mostrarCursos } from '../../../../actions/cursosAction';

const EditUsuario = ({closeEvent, fit}) => {
    const [titulo, setTitulo] = useState("");
    const [url, setUrl] = useState(null);
    const [duracion, setDuracion] = useState(0);
    const [curso, setCurso] = useState("");
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [cursos, setCursos] = useState([]);
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
            const response = await dispatch(verSeccionPorId(fit.id));
            console.log(response.payload.data.seccion);
            setTitulo(response?.payload?.data?.seccion?.titulo);
            setUrl(response?.payload?.data?.seccion?.url);
            setDuracion(response?.payload?.data?.seccion?.duracion)
            setCurso(response?.payload?.data?.seccion?.curso_id);
            
            

        }catch(error){
            console.error("Error fetching usuarios:", error);
        }
    }



    const getCursos = async () => {
        const response = await dispatch(mostrarCursos());
        setCursos(response?.payload?.data?.cursos);
      }
    
      useEffect(() => {
        getCursos();
      }, [dispatch]);
    
    useEffect(() => {
        getUsuarioPorId();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])
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
        const storageRef = ref(storage, `secciones/${url.name}`);
      await uploadBytes(storageRef, url);
      const videoUrl = await getDownloadURL(storageRef);
      setAvatarURL(videoUrl);
        setAvatarURL(videoUrl);
        dispatch(
            actualizarSeccion({id:fit.id, titulo: titulo, duracion: duracion, curso_id: curso, url: videoUrl })
          );
       
        getUsers();
        closeEvent();
        Swal.fire("Actualizando!", "Los datos de la Sección han sido actualizado.", "success"); 
    }
    return(
        <>
            <Box sx={{m: 2}} />
            <Typography variant="h5" align='center'>
                Editar Usuario
            </Typography>
            <IconButton style={{position: "absolute", top: "0", right: "0"}} onClick={closeEvent}>
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
              url={url instanceof File ? URL.createObjectURL(url) : url}
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
            
            <Box sx={{m: 4}} />



        </>
    )
}

export default EditUsuario;