import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../utilities/axios";
import { delayedTimeout } from "../utilities/delayedTimeout";

export const crearSeccion = createAsyncThunk(
    "secciones/crearSeccion",
    async({titulo, url, duracion, curso_id}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.post(`secciones/crear_seccion`,{titulo, url, duracion, curso_id}, requestConfig);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const verSeccionPorId = createAsyncThunk(
    "secciones/verSeccionPorId",
    async(id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`secciones/ver_seccion/${id}`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const actualizarSeccion = createAsyncThunk(
    "secciones/actualizarSeccion",
    async({id, titulo, url, duracion, curso_id}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                }
            }
            const {data} = await axios.put(`secciones/actualizar_seccion/${id}`, {titulo, url, duracion, curso_id}, requestConfig);
            return data;
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const mostrarSecciones = createAsyncThunk(
    "secciones/mostrarSecciones",
    async(ThunkApi, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`secciones/mostrar_secciones`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const mostrarSeccionesPorCurso = createAsyncThunk(
    "secciones/mostrarSeccionesPorCurso",
    async(curso_id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`secciones/mostrar_secciones_por_curso/${curso_id}`);
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)