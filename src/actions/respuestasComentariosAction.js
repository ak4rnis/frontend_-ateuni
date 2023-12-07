import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../utilities/axios";
import { delayedTimeout } from "../utilities/delayedTimeout";


export const crearRespuestaComentario = createAsyncThunk(
    "respuestasComentarios/crearRespuestaComentario",
    async({usuario_id, comentario_id, texto}, {rejectWithValue}) => {
        try{
            
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.post(`respuestascomentarios/crear_respuesta_comentario`, {usuario_id, comentario_id, texto}, requestConfig);
            return data;
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const verRespuestaComentarioPorId = createAsyncThunk(
    "respuestasComentarios/verRespuestaComentarioPorId",
    async(id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`respuestascomentarios/ver_respuesta_comentario_por_id/${id}`);
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const actualizarRespuestaComentario = createAsyncThunk(
    "respuestasComentarios/actualizarRespuestaComentario",
    async({id, usuario_id, comentario_id, texto}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                }
            }
            const {data} = await axios.put(`respuestascomentarios/actualizar_respuesta_comentario/${id}`,{usuario_id, comentario_id, texto}, requestConfig);
            return data;
        }catch(error){

        }
    }
)

export const mostrarRespuestasComentarios = createAsyncThunk(
    "respuestasComentarios/mostrarRespuestasComentarios",
    async(ThunkApi, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`respuestascomentarios/mostrar_respuestas_comentarios`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const mostrarRespuestasComentariosPorUsuario = createAsyncThunk(
    "respuestasComentarios/mostrarRespuestasComentariosPorUsuario",
    async(usuario_id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`respuestascomentarios/mostrar_respuestas_comentarios_por_usuario/${usuario_id}`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const mostrarRespuestasComentariosPorComentario = createAsyncThunk(
    "respuestasComentarios/mostrarRespuestasComentariosPorComentario",
    async(comentario_id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`respuestascomentarios/mostrar_respuestas_comentarios_por_comentario/${comentario_id}`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

