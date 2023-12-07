import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../utilities/axios";
import { delayedTimeout } from "../utilities/delayedTimeout";

export const crearValoracion = createAsyncThunk(
    "valoraciones/crearValoracion",
    async({usuario_id, curso_id, puntuacion, comentario}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.post(`valoraciones/crear_valoracion`, {usuario_id, curso_id, puntuacion, comentario}, requestConfig);
            return data;
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const verValoracionPorId = createAsyncThunk(
    "valoraciones/verValoracionPorId",
    async(id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`valoraciones_ver_valoracion_por_id/${id}`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
        
    }
)

export const actualizarValoracion = createAsyncThunk(
    "valoraciones/actualizarValoracion",
    async({id, usuario_id, curso_id, puntuacion, comentario}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.put(`valoraciones/actualizar_valoracion/${id}`, {usuario_id, curso_id, puntuacion, comentario}, requestConfig);
            return data;
        }catch(error){
            rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const mostrarValoraciones = createAsyncThunk(
    "valoraciones/mostrarValoraciones", 
    async(ThunkApi, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`valoraciones/mostrar_valoraciones`);
        }catch(error){
            rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const mostrarValoracionesPorCurso = createAsyncThunk(
    "valoraciones/mostrarValoracionesPorCurso",
    async(curso_id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return axios.get(`valoraciones/mostrar_valoraciones_por_curso/${curso_id}`);
        }catch(error){
            rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
        
    }
)

export const mostrarValoracionesPorUsuario = createAsyncThunk(
    "valoraciones/mostrarValoracionesPorUsuario",
    async(usuario_id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`valoraciones/mostrar_valoraciones_por_usuario/${usuario_id}`);
        }catch(error){
            rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)