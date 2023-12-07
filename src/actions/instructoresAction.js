import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../utilities/axios";
import { delayedTimeout } from "../utilities/delayedTimeout";

export const crearInstructor = createAsyncThunk(
    "instructores/crearInstructor",
    async({usuario_id, biografia, foto_perfil}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.post(`instructores/crear_instructor`, {usuario_id, biografia, foto_perfil}, requestConfig);
            return data;
        }catch(error)
        {   
            console.log(error);
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    } 
)

export const verInstructorPorId = createAsyncThunk(
    "instructores/verInstructorPorId",
    async(id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`instructores/ver_instructor_por_id/${id}`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const actualizarInstructorPorId = createAsyncThunk(
    "instructores/actualizarInstructorPorId",
    async({usuario_id, biografia, foto_perfil}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                }
            }
            const {data} = await axios.put(`instructores/actualizar_instructor/${usuario_id}`, {biografia, foto_perfil}, requestConfig);
            return data;
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const mostrarInstructores = createAsyncThunk(
    "instructores/mostrarInstructores",
    async(ThunkApi, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`instructores/mostrar_instructores`);
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

