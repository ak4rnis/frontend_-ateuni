import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../utilities/axios";
import { delayedTimeout } from "../utilities/delayedTimeout";

export const crearCursoSeccion = createAsyncThunk(
    "cursoSecciones/crearCursoSeccion",
    async({curso_id, seccion_id}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.get(`cursosecciones/crear_cursoseccion`, {curso_id, seccion_id}, requestConfig);
            return data;
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const verCursoSeccionPorId = createAsyncThunk(
    "cursoSecciones/verCursoSeccionPorId",
    async(id , {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`cursosecciones/ver_cursoseccion_por_id/${id}`);
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const actualizarCursoSeccion = createAsyncThunk(
    "cursoSecciones/actualizarCursoSeccion",
    async({id, curso_id, seccion_id}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                }
            }
           const {data} = await axios.put(`cursosecciones/actualizar_cursoseccion/${id}`, {curso_id, seccion_id}, requestConfig);
           return data; 
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const mostrarCursoSecciones = createAsyncThunk(
    "cursoSecciones/mostrarCursoSecciones",
    async(ThunkApi, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`cursosecciones/mostrar_cursosecciones`);
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
        
    }
)

export const mostrarCursoSeccionesPorCurso = createAsyncThunk(
    "cursosecciones/mostrarCursoSeccionesPorCurso",
    async(curso_id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`cursosecciones/mostrar_cursosecciones_por_curso/${curso_id}`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const mostrarCursoSeccionesPorSeccion = createAsyncThunk(
    "cursosecciones/mostrarCursoSeccionesPorSeccion",
    async(seccion_id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`cursosecciones/mostrar_cursosecciones_por_seccion/${seccion_id}`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

