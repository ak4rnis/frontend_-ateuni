import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../utilities/axios";
import { delayedTimeout } from "../utilities/delayedTimeout";

export const crearComentario = createAsyncThunk(
    "comentarios/crearComentario",
    async ({usuario_id, curso_id, texto}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.post(`comentarios/crear_comentario`, {usuario_id, curso_id, texto}, requestConfig);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)


export const verComentarioPorId = createAsyncThunk(
    "comentarios/verComentarioPorId",
    async(id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`comentarios/ver_comentario/${id}`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const actualizarComentario = createAsyncThunk(
    "comentarios/actualizarComentario",
    async( {id, usuario_id, curso_id, texto}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                }
            }
            const {data} = await axios.put(`comentarios/actualizar_comentario/${id}`, {usuario_id, curso_id, texto}, requestConfig);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const mostrarComentarios = createAsyncThunk(
    "comentarios/mostrarComentarios",
    async(ThunkApi, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`comentarios/mostrar_comentarios`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
);

export const mostrarComentariosPorUsuario = createAsyncThunk(
    "comentarios/mostrarComentariosPorUsuario",
    async(usuario_id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`comentarios/mostrar_comentarios_por_usuario/${usuario_id}`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const mostrarComentariosPorCurso = createAsyncThunk(
    "comentarios/mostrarComentariosPorCurso",
    async(curso_id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`comentarios/mostrar_comentarios_por_curso/${curso_id}`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)



