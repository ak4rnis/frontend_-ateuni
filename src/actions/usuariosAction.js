import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../utilities/axios";
import { delayedTimeout } from "../utilities/delayedTimeout";

export const crearUsuario = createAsyncThunk(
    "usuarios/crearUsuario",
    async ({nombre, correo, contrasena, avatar, rol_usuario}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.post(`usuarios/crear_usuario`, {nombre, correo, contrasena, avatar, rol_usuario}, requestConfig);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const verUsuarioPorId = createAsyncThunk(
    "usuarios/verUsuarioPorId",
    async(id, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`usuarios/ver_usuario/${id}`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const actualizarUsuario = createAsyncThunk(
    "usuarios/actualizarUsuario",
    async( {id, nombre, correo, contrasena, avatar, rol_usuario}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                }
            }
            const {data} = await axios.put(`usuarios/actualizar_usuario/${id}`, {nombre, correo, contrasena, avatar, rol_usuario}, requestConfig);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
)

export const mostrarUsuarios = createAsyncThunk(
    "usuarios/mostrarUsuarios",
    async(ThunkApi, {rejectWithValue}) => {
        try{
            await delayedTimeout(1000);
            return await axios.get(`usuarios/mostrar_usuarios`);
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido")
        }
    }
);