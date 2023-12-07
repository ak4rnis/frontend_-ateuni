import { createSlice } from "@reduxjs/toolkit";
import { loginUsuario, registrarUsuario, verUsuarioLogueado } from "../actions/authAction";

const initialState = {
    loading: false,
    errores: [],
    isAuthenticated: false,
    usuario: null,
    isUpdated: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        logout: (state, action) => {
            localStorage.removeItem("token");
            state.isAuthenticated = false;
            state.usuario = null;
            state.loading = false;
        }
    },
    extraReducers: {
        [loginUsuario.pending]: (state) => {
            state.loading = true;
            state.errores = [];
        },
        [loginUsuario.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.usuario = payload.usuario;
            state.errores = [];
            state.isAuthenticated = true;
        },
        [loginUsuario.rejected]: (state, action) => {
            state.loading = false;
            state.errores = action.payload;
            state.isAuthenticated = false;
            state.usuario = null;
        },
        [registrarUsuario.pending]:(state) => {
            state.loading = true;
            state.errores = [];

        },
        [registrarUsuario.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.usuario = null;
            state.errores = [];
            state.isAuthenticated = false;
        },
        [registrarUsuario.rejected]: (state, action) => {
            state.loading = false;
            state.usuario = null;
            state.errores = action.payload;
            state.isAuthenticated = false;
        },
        [verUsuarioLogueado.pending]: (state) => {
            state.loading = true;
            state.usuario = null;
            state.errores = [];
            state.isAuthenticated = false;
        },
        [verUsuarioLogueado.fulfilled]: (state, payload) => {
            state.loading = false;
            state.usuario = payload;
            state.errores = [];
            state.isAuthenticated = false;
        },
        [verUsuarioLogueado.rejected]: (state, action) => {
            state.loading = false;
            state.usuario = null;
            state.errores = action.payload;
            state.isAuthenticated = false;
        }
    }
});

export const {logout} = authSlice.actions;
export const authReducer = authSlice.reducer;

