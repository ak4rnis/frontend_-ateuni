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
import { mostrarInstructores } from '../../../../actions/instructoresAction';
import { mostrarCategorias } from '../../../../actions/categoriasAction';
import { actualizarCurso, mostrarCursos, verCursoPorId } from '../../../../actions/cursosAction';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const EditUsuario = ({closeEvent, fit}) => {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [instructor, setInstructor] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState(0.00);
    const [nivel, setNivel] = useState("");
    const [imagen, setImagen] = useState(null);
    const [nombre, setNombre] = useState("");
    const [instructores, setInstructores] = useState([]);
    const [categorias, setCategorias] = useState([]);
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
    
    const getInstructores = async () => {
        const response = await dispatch(mostrarInstructores());
        setInstructores(response?.payload?.data?.instructores);
    }

    const getCategorias = async () => {
        const response = await dispatch(mostrarCategorias());
        setCategorias(response?.payload?.data?.categoria);
    }

    useEffect(() => {
        getCategorias();
        getInstructores();
    }, [dispatch]);

    const getUsuarioPorId = async () => {
        try{
            const response = await dispatch(verCursoPorId(fit.id));
            console.log(response);
            setTitulo(response?.payload?.data?.curso?.titulo);
            setDescripcion(response?.payload?.data?.curso?.descripcion);
            setInstructor(response?.payload?.data?.curso?.instructor_id);
            setCategoria(response?.payload?.data?.curso?.categoria_id);
            setPrecio(response?.payload?.data?.curso?.precio);
            setNivel(response?.payload?.data?.curso?.nivel);
            setImagen(response?.payload?.data?.curso?.imagen);
            

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
            const response = await dispatch(mostrarCursos());
            console.log(response); // Log the API response to the console
            setRows(response.payload.data.cursos);
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
  
      const handleDescripcionChange = (event) => {
          setDescripcion(event.target.value);
        };
        const handleInstructorChange = (event) => {
          setInstructor(event.target.value);
        };
  
        const handleCategoriaChange = (event) => {
          setCategoria(event.target.value);
        };
  
        const handlePrecioChange = (event) => {
            const precioDecimal = parseFloat(event.target.value).toFixed(2);
            setPrecio(precioDecimal);
          };
      
    
      const handleNivelChange = (event) => {
        setNivel(event.target.value);
      };
      
    
      const handleImagenChange = (event) => {
        const file = event.target.files[0];
        setImagen(file);
      };

     
    

    const createUser = async () => {
        const storageRef = ref(storage, `cursos/${imagen.name}`);
        await uploadBytes(storageRef, imagen);
        const imagenUrl = await getDownloadURL(storageRef);
        setAvatarURL(imagenUrl);
        dispatch(
            actualizarCurso({id:fit.id,  titulo: titulo,  descripcion: descripcion, instructor_id: instructor, categoria_id: categoria, precio: precio, nivel: nivel,  imagen: imagenUrl })
          );
       
        getUsers();
        closeEvent();
        Swal.fire("Actualizando!", "Los datos del Usuario han sido actualizado.", "success"); 
    }
    return(
        <>
            <Box sx={{m: 2}} />
            <Typography variant="h5" align='center'>
                Editar Curso
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
              
              value={descripcion}
              label="Descripción"
              variant="outlined"
              size="small"
              sx={{ minWidth: "100%" }}
              onChange={handleDescripcionChange}
            />
          </Grid>
          

        <Grid item xs={12}>
          <TextField id="outlined-basic" select value={instructor} label="Instructor" variant="outlined" size="small" sx={{ minWidth: "100%" }} onChange={handleInstructorChange}>
            {instructores.map((option) => (
              <MenuItem key={option.usuario_id} value={option.usuario_id}>
                {option.nombre}
              </MenuItem>
            ))}
          </TextField>

        </Grid>
        <Grid item xs={12}>
          <TextField id="outlined-basic" select value={categoria} label="Categoría" variant="outlined" size="small" sx={{ minWidth: "100%" }} onChange={handleCategoriaChange}>
            {categorias.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
        <TextField
  id="outlined-basic"
  value={precio}
  type='number'
  label="Precio"
  variant="outlined"
  size="small"
  sx={{minWidth: "100%"}}
  onChange={handlePrecioChange}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <MonetizationOnIcon />
      </InputAdornment>
    )
  }}
  inputProps={{
    step: "0.01", // Define el paso para permitir decimales hasta dos posiciones
    inputMode: "decimal", // Indica que se espera una entrada decimal
  }}
/>
        </Grid>
        <Grid item xs={12}>
            <TextField id="outlined-basic" select value={nivel} label="Nivel" variant="outlined" size="small" sx={{ minWidth: "100%" }} onChange={handleNivelChange}>
                
                    <MenuItem value="Básico">
                        Básico
                    </MenuItem>
                    <MenuItem value="Intermedio">
                        Intermedio
                    </MenuItem>
                    <MenuItem value="avanzado">
                        Avanzado
                    </MenuItem>
                

            </TextField>
        </Grid>
          <Grid item xs={6}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImagenChange}
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
          {imagen ? (
  <Avatar src={imagen instanceof File ? URL.createObjectURL(imagen) : imagen} sx={{ width: "100px", height: "100px" }} />
) : <Avatar sx={{width: "100px", height: "100px"}} />}
          </Grid>
          <Box height={2} />
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              <Button disabled={!imagen} variant="contained" onClick={createUser}>
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