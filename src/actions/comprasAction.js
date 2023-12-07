import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../utilities/axios";
import { delayedTimeout } from "../utilities/delayedTimeout";

export const crearCompra = createAsyncThunk(
    "compras/crearCompra",
    async({usuario_id, curso_id}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.post(`compras/crear_compra`, {usuario_id, curso_id}, requestConfig);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const verCompraPorId = createAsyncThunk(
    "compras/verCompraPorId",
    async(id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`compras/ver_compra_por_id/${id}`);
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const actualizarCompra = createAsyncThunk(
    "compras/actualizarCompra",
    async({id, usuario_id, curso_id}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.put(`compras/actualizar_compra/${id}`, {usuario_id, curso_id}, requestConfig);
            return data;
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const mostrarCompras = createAsyncThunk(
    "compras/mostrarCompras",
    async(ThunkApi, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`compras/mostrar_compras`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const mostrarComprasPorUsuario = createAsyncThunk(
    "compras/mostrarComprasPorUsuario",
    async(usuario_id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`compras/mostrar_compras_por_usuario/${usuario_id}`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const mostrarComprasPorCurso = createAsyncThunk(
    "compras/mostrarComprasPorCurso",
    async(curso_id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`compras/mostrar_compras_por_curso/${curso_id}`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)