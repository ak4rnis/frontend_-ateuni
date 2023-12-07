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
import { verInstructorPorId } from '../../../../actions/instructoresAction';

const EditUsuario = ({closeEvent, fit}) => {
    const [usuario, setUsuario] = useState("");
    const [biografia, setBiografia] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    const [foto_perfil, setFotoPerfil] = useState(null);
    const [avatarURL, setAvatarURL] = useState({ file: null, url: fit.imagen || "" });
    const [rol_usuario, setRol_usuario] = useState("");
    
    const dispatch = useDispatch();
    
    const setRows = useAppStore((state) => state.setRows);
    const empCollectionRef = collection(db, "usuarios");
    const enpCollectionAreasRef = collection(db, "areas");
    const enpCollectionProductosRef = collection(db, "perfiles");
    
    const getUsuarioPorId = async () => {
        try{
            const response = await dispatch(verInstructorPorId(fit.id));
            console.log(response.payload.data?.instructor);
            setUsuario(response?.payload?.data?.instructor?.id_usuario);
            setBiografia(response?.payload?.data?.instructor?.biografia);
            
            setFotoPerfil(response?.payload?.data?.instructor?.foto_perfil);
            

        }catch(error){
            console.error("Error fetching usuarios:", error);
        }
    }



    
    
    useEffect(() => {
        getUsuarioPorId();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])
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
        const storageRef = ref(storage, `instructores/${foto_perfil.name}`);
        await uploadBytes(storageRef, foto_perfil);
        const imagenUrl = await getDownloadURL(storageRef);
        setAvatarURL(imagenUrl);
        dispatch(
            actualizarUsuario({usuario_id:fit.id, biografia, foto_perfil: imagenUrl })
          );
       
        getUsers();
        closeEvent();
        Swal.fire("Actualizando!", "Los datos del Usuario han sido actualizado.", "success"); 
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
              
              value={biografia}
              label="Biografiá"
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
  <Avatar src={foto_perfil instanceof File ? URL.createObjectURL(foto_perfil) : foto_perfil} sx={{ width: "100px", height: "100px" }} />
) : <Avatar sx={{width: "100px", height: "100px"}} />}
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
            
            <Box sx={{m: 4}} />



        </>
    )
}

export default EditUsuario;