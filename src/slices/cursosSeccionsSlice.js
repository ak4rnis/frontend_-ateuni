import { createSlice } from "@reduxjs/toolkit";
import {
  crearCursoSeccion,
  verCursoSeccionPorId,
  actualizarCursoSeccion,
  mostrarCursoSecciones,
  mostrarCursoSeccionesPorCurso,
  mostrarCursoSeccionesPorSeccion,
} from "../actions/cursoseccionsAction";

export const initialState = {
  cursoSecciones: [],
  loading: false,
  error: null,
  cursoSeccion: null,
};

export const cursoSeccionesSlice = createSlice({
  name: "cursoSecciones",
  initialState,
  reducers: {},
  extraReducers: {
    [crearCursoSeccion.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.cursoSeccion = null;
    },
    [crearCursoSeccion.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.cursoSeccion = payload;
    },
    [crearCursoSeccion.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.cursoSeccion = null;
    },
    [verCursoSeccionPorId.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.cursoSeccion = null;
    },
    [verCursoSeccionPorId.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.cursoSeccion = payload;
    },
    [verCursoSeccionPorId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.cursoSeccion = null;
    },
    [actualizarCursoSeccion.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.cursoSeccion = null;
    },
    [actualizarCursoSeccion.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.cursoSeccion = payload;
    },
    [actualizarCursoSeccion.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.cursoSeccion = null;
    },
    [mostrarCursoSecciones.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.cursoSecciones = null;
    },
    [mostrarCursoSecciones.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cursoSecciones = payload.data;
      state.error = null;
    },
    [mostrarCursoSecciones.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.cursoSecciones = null;
    },
    [mostrarCursoSeccionesPorCurso.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.cursoSecciones = null;
    },
    [mostrarCursoSeccionesPorCurso.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cursoSecciones = payload.data;
      state.error = null;
    },
    [mostrarCursoSeccionesPorCurso.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.cursoSecciones = null;
    },
    [mostrarCursoSeccionesPorSeccion.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.cursoSecciones = null;
    },
    [mostrarCursoSeccionesPorSeccion.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cursoSecciones = payload.data;
      state.error = null;
    },
    [mostrarCursoSeccionesPorSeccion.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.cursoSecciones = null;
    },
  },
});

export const cursoSeccionesReducer = cursoSeccionesSlice.reducer;