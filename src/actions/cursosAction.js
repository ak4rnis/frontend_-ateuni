import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../utilities/axios";
import { delayedTimeout } from "../utilities/delayedTimeout";

export const crearCurso = createAsyncThunk(
    "cursos/crearCurso",
    async({titulo, descripcion, instructor_id, categoria_id, precio, nivel, imagen}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.post(`cursos/crear_curso`, {titulo, descripcion, instructor_id, categoria_id, precio, nivel, imagen}, requestConfig);
            return data;
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
);

export const verCursoPorId = createAsyncThunk(
    "cursos/verCursoPorId",
    async(id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`cursos/ver_curso_por_id/${id}`);
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const actualizarCurso = createAsyncThunk(
    "cursos/actualizarCurso",
    async({id,titulo, descripcion, instructor_id, categoria_id, precio, nivel, imagen}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                }
            }
            const {data} = await axios.put(`cursos/actualizar_curso/${id}`, {titulo, descripcion, instructor_id, categoria_id, precio, nivel, imagen}, requestConfig);
            return data;
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const mostrarCursos = createAsyncThunk(
    "cursos/mostrarCursos",
    async(ThunkApi, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`cursos/mostrar_cursos`);
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const mostrarCursosPorIntructor = createAsyncThunk(
    "cursos/mostrarCursosPorInstructor",
    async(instructor_id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`cursos/mostrar_cursos_por_instructor/${instructor_id}`)
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }   
    }
)

export const mostrarCursosPorCategoria = createAsyncThunk(
    "cursos/mostrarCursosPorCategoria",
    async(categoria_id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`cursos/mostrar_cursos_por_categoria/${categoria_id}`);
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

