import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../utilities/axios";
import { delayedTimeout } from "../utilities/delayedTimeout";


export const registrarUsuario = createAsyncThunk(
    "auth/registrarUsuario",
    async({nombre, correo, contrasena}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.post(`auth/registrarusuario`, {nombre, correo, contrasena}, requestConfig);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const loginUsuario = createAsyncThunk(
    "auth/loginUsuario",
    async({correo, contrasena}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.post(`auth/loginusuario`, {correo, contrasena}, requestConfig);
            localStorage.setItem("token", data.token);
            await delayedTimeout(1000);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)

export const verUsuarioLogueado = createAsyncThunk(
    "auth/verUsuarioLogueado",
    async({rejectWithValue}) => {
        try{
            const {data} = await axios.get(`auth/verusuarioautenticado`);
            localStorage.setItem("token", data.token);
            await delayedTimeout(1000);
            return data;
        }catch(error){
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
)