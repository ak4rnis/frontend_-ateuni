import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../utilities/axios";
import { delayedTimeout } from "../utilities/delayedTimeout";

export const crearCategoria = createAsyncThunk(
    "categorias/crearCategorias",
    async ({nombre}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.post(`usuarios/crear_usuario`, {nombre}, requestConfig);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const verCategoriaPorId = createAsyncThunk(
    "categorias/verCategoriaPorId",
    async(id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`categorias/ver_categoria/${id}`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const actualizarCategoria = createAsyncThunk(
    "categorias/actualizarCategoria",
    async( {id,nombre}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                }
            }
            const {data} = await axios.put(`categorias/actualizar_categoria/${id}`, {nombre}, requestConfig);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const mostrarCategorias = createAsyncThunk(
    "categorias/mostrarCategorias",
    async(ThunkApi, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`categorias/mostrar_categorias`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
);