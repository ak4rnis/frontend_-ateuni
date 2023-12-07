import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../utilities/axios";
import { delayedTimeout } from "../utilities/delayedTimeout";

export const crearOrden = createAsyncThunk(
    "ordenes/crearOrden",
    async({usuario_id, total}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.post(`ordenes/crear_orden`, {usuario_id, total}, requestConfig);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const verOrdenPorId = createAsyncThunk(
    "ordenes/verOrdenPorId",
    async(id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`ordenes/ver_orden_por_id/${id}`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
);

export const actualizarOrden = createAsyncThunk(
    "ordenes/actualizarOrden",
    async({id, usuario_id, total},{rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                }
            }
            const {data} = await axios.put(`ordenes/actualizar_orden/${id}`, {usuario_id, total}, requestConfig);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const mostrarOrdenes = createAsyncThunk(
    "ordenes/mostrarOrdenes",
    async(ThunkApi, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`ordenes/mostrar_ordenes`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const mostrarOrdenesPorUsuario = createAsyncThunk(
    "ordenes/mostrarOrdenesPorUsuario",
    async(usuario_id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`ordenes/mostrar_ordenes_por_usuario/${usuario_id}`);
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)



