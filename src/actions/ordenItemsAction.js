import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../utilities/axios";
import { delayedTimeout } from "../utilities/delayedTimeout";


export const crearOrdenItem = createAsyncThunk(
    "ordenItems/crearOrdenItem",
    async({orden_id, curso_id, cantidad, precio_unitario}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.post(`ordenitems/crear_ordenitem`, {orden_id, curso_id, cantidad, precio_unitario}, requestConfig);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const verOrdenItemPorId = createAsyncThunk(
    "ordenItems/verOrdenItemPorId",
    async(id, {rejectWithValue}) => {
        try{
            delayedTimeout(1000);
            return await axios.get(`ordenitems/ver_ordenitem/${id}`);
            
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const actualizarOrdenItem = createAsyncThunk(
    "ordenItems/actualizarOrdenItem",
    async({id, orden_id, curso_id, cantidad, precio_unitario}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.put(`ordenitems/actualizar_ordenitem/${id}`, {orden_id, curso_id, cantidad, precio_unitario}, requestConfig);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const mostrarOrdenItems = createAsyncThunk(
    "ordenItems/mostrarOrdenItems",
    async(ThunkApi, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`ordenitems/mostrar_ordenitems`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const mostrarOrdenItemsPorOrden = createAsyncThunk(
    "ordenItems/mostrarOrdenItemsPorOrden",
    async(orden_id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`ordenitems/mostrar_ordenitems_por_orden/${orden_id}`);
        }catch(error)
        {   
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const mostrarOrdenItemsPorCurso = createAsyncThunk(
    "ordenItems/mostrarOrdenItemsPorCurso",
    async(curso_id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`ordenitems/mostrar_ordenitems_por_curso/${curso_id}`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)