// valoracionesSlice.js

import { createSlice } from "@reduxjs/toolkit";
import {
  crearValoracion,
  verValoracionPorId,
  actualizarValoracion,
  mostrarValoraciones,
  mostrarValoracionesPorCurso,
  mostrarValoracionesPorUsuario,
} from "../actions/valoracionesAction";

export const initialState = {
  valoraciones: [],
  loading: false,
  error: null,
  valoracion: null,
};

export const valoracionesSlice = createSlice({
  name: "valoraciones",
  initialState,
  reducers: {},
  extraReducers: {
    [crearValoracion.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.valoracion = null;
    },
    [crearValoracion.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.valoracion = payload;
    },
    [crearValoracion.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.valoracion = null;
    },
    [verValoracionPorId.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.valoracion = null;
    },
    [verValoracionPorId.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.valoracion = payload;
    },
    [verValoracionPorId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.valoracion = null;
    },
    [actualizarValoracion.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.valoracion = null;
    },
    [actualizarValoracion.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.valoracion = payload;
    },
    [actualizarValoracion.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.valoracion = null;
    },
    [mostrarValoraciones.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.valoraciones = null;
    },
    [mostrarValoraciones.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.valoraciones = payload.data;
      state.error = null;
    },
    [mostrarValoraciones.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.valoraciones = null;
    },
    [mostrarValoracionesPorCurso.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.valoraciones = null;
    },
    [mostrarValoracionesPorCurso.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.valoraciones = payload.data;
      state.error = null;
    },
    [mostrarValoracionesPorCurso.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.valoraciones = null;
    },
    [mostrarValoracionesPorUsuario.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.valoraciones = null;
    },
    [mostrarValoracionesPorUsuario.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.valoraciones = payload.data;
      state.error = null;
    },
    [mostrarValoracionesPorUsuario.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.valoraciones = null;
    },
  },
});

export const valoracionesReducer = valoracionesSlice.reducer;
