import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../utilities/axios";
import { delayedTimeout } from "../utilities/delayedTimeout";

export const crearCarrito = createAsyncThunk(
    "carritos/crearCarrito",
    async({total}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.post(`carritos/crear_carrito`, {total}, requestConfig);
            return data;
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
);

export const verCarritoPorId = createAsyncThunk(
    "carritos/verCarritoPorId",
    async(id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`carritos/ver_carrito_por_id/${id}`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const actualizarCarrito = createAsyncThunk(
    "carritos/actualizarCarrito",
    async({id, total}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.get(`carritos/actualizar_carrito/${id}`, {total}, requestConfig);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const eliminar_carrito = createAsyncThunk(
    "carritos/eliminarCarrito",
    async(id, {rejectWithValue}) => {
        try{    
            const {data} = await axios.delete(`carritos/eliminar_carrito/${id}`);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");  
        }
    }
)

export const agregarCarritoItem = createAsyncThunk(
    "carritos/agregarCarritoItem",
    async({carrito_id, curso_id}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.post(`carritos/crear_carritoitem`, {carrito_id, curso_id}, requestConfig);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const eliminarCarritoItem = createAsyncThunk(
    "carritos/eliminarCarritoItem",
    async(id, {rejectWithValue}) => {
        try{
            const {data} = await axios.delete(`carritos/eliminar_carritoitem/${id}`);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const mostrarCarritosPorUsuario = createAsyncThunk(
    "carritos/mostrarCarritosPorUsuario",
    async(id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`carritos/mostrar_carrito_por_usuario/${id}`);
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const mostrarCarritoItemsCarrito = createAsyncThunk(
    "carritos/mostrarCarritoItemsPorCarrito",
    async(id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`carritos/mostrar_carritositems_por_carrito/${id}`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

