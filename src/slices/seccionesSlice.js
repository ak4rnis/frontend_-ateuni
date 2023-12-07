import { createSlice } from "@reduxjs/toolkit";
import {
  crearSeccion,
  verSeccionPorId,
  actualizarSeccion,
  mostrarSecciones,
  mostrarSeccionesPorCurso,
} from "../actions/seccionesAction";

export const initialState = {
  secciones: [],
  loading: false,
  error: null,
  seccion: null,
};

export const seccionesSlice = createSlice({
  name: "secciones",
  initialState,
  reducers: {},
  extraReducers: {
    [crearSeccion.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.seccion = null;
    },
    [crearSeccion.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.seccion = payload;
    },
    [crearSeccion.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.seccion = null;
    },
    [verSeccionPorId.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.seccion = null;
    },
    [verSeccionPorId.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.seccion = payload;
    },
    [verSeccionPorId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.seccion = null;
    },
    [actualizarSeccion.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.seccion = null;
    },
    [actualizarSeccion.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.seccion = payload;
    },
    [actualizarSeccion.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.seccion = null;
    },
    [mostrarSecciones.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.secciones = null;
    },
    [mostrarSecciones.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.secciones = payload.data;
      state.error = null;
    },
    [mostrarSecciones.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.secciones = null;
    },
    [mostrarSeccionesPorCurso.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.secciones = null;
    },
    [mostrarSeccionesPorCurso.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.secciones = payload.data;
      state.error = null;
    },
    [mostrarSeccionesPorCurso.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.secciones = null;
    },
  },
});

export const seccionesReducer = seccionesSlice.reducer;