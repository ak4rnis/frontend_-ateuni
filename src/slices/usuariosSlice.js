import { createSlice } from "@reduxjs/toolkit";
import { actualizarUsuario, crearUsuario, mostrarUsuarios, verUsuarioPorId } from "../actions/usuariosAction";


export const initialState = {
    usuarios: [],
    loading: false,
    error: null,
    usuario: null,
}




export const usuariosSlice = createSlice({
    name: "usuarios",
    initialState,
    reducers: {

    },
    extraReducers:  {
        [mostrarUsuarios.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.usuarios = null;
        },
        [mostrarUsuarios.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.usuarios = payload.data;
            state.error = null;
        },
        [mostrarUsuarios.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.usuarios = null;
        },
        [crearUsuario.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.usuario = null;
        },
        [crearUsuario.fulfilled]: (state, payload) => {
            state.loading = false;
            state.error = null;
            state.usuario = payload;
        },
        [crearUsuario.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.usuario = null;
        },
        [verUsuarioPorId.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.usuario = null;
        },
        [verUsuarioPorId.fulfilled]: (state, payload) => {
            state.loading = false;
            state.error = null;
            state.usuario = payload;
        },
        [verUsuarioPorId.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.usuario = null;
        },
        [actualizarUsuario.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.usuario = null;
        },
        [actualizarUsuario.fulfilled]: (state, payload) => {
            state.loading = false;
            state.error = null;
            state.usuario = payload;
        },
        [actualizarUsuario.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.usuario = null;
        },
    }
});

export const usuariosReducer = usuariosSlice.reducer;