import { createSlice } from "@reduxjs/toolkit";
import {
  crearCurso,
  verCursoPorId,
  actualizarCurso,
  mostrarCursos,
  mostrarCursosPorIntructor,
  mostrarCursosPorCategoria,
} from "../actions/cursosAction";

export const initialState = {
  cursos: [],
  loading: false,
  error: null,
  curso: null,
};

export const cursosSlice = createSlice({
  name: "cursos",
  initialState,
  reducers: {},
  extraReducers: {
    [crearCurso.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.curso = null;
    },
    [crearCurso.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.curso = payload;
    },
    [crearCurso.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.curso = null;
    },
    [verCursoPorId.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.curso = null;
    },
    [verCursoPorId.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.curso = payload;
    },
    [verCursoPorId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.curso = null;
    },
    [actualizarCurso.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.curso = null;
    },
    [actualizarCurso.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.curso = payload;
    },
    [actualizarCurso.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.curso = null;
    },
    [mostrarCursos.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.cursos = null;
    },
    [mostrarCursos.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cursos = payload.data;
      state.error = null;
    },
    [mostrarCursos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.cursos = null;
    },
    [mostrarCursosPorIntructor.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.cursos = null;
    },
    [mostrarCursosPorIntructor.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cursos = payload.data;
      state.error = null;
    },
    [mostrarCursosPorIntructor.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.cursos = null;
    },
    [mostrarCursosPorCategoria.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.cursos = null;
    },
    [mostrarCursosPorCategoria.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cursos = payload.data;
      state.error = null;
    },
    [mostrarCursosPorCategoria.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.cursos = null;
    },
  },
});

export const cursosReducer = cursosSlice.reducer;