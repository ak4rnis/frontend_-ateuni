import { createSlice } from "@reduxjs/toolkit";
import {
  crearComentario,
  verComentarioPorId,
  actualizarComentario,
  mostrarComentarios,
  mostrarComentariosPorUsuario,
  mostrarComentariosPorCurso,
} from "../actions/comentariosAction";

export const initialState = {
  comentarios: [],
  loading: false,
  error: null,
  comentario: null,
};

export const comentariosSlice = createSlice({
  name: "comentarios",
  initialState,
  reducers: {},
  extraReducers: {
    [crearComentario.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.comentario = null;
    },
    [crearComentario.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.comentario = payload;
    },
    [crearComentario.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.comentario = null;
    },
    [verComentarioPorId.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.comentario = null;
    },
    [verComentarioPorId.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.comentario = payload;
    },
    [verComentarioPorId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.comentario = null;
    },
    [actualizarComentario.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.comentario = null;
    },
    [actualizarComentario.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.comentario = payload;
    },
    [actualizarComentario.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.comentario = null;
    },
    [mostrarComentarios.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.comentarios = null;
    },
    [mostrarComentarios.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.comentarios = payload.data;
      state.error = null;
    },
    [mostrarComentarios.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.comentarios = null;
    },
    [mostrarComentariosPorUsuario.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.comentarios = null;
    },
    [mostrarComentariosPorUsuario.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.comentarios = payload.data;
      state.error = null;
    },
    [mostrarComentariosPorUsuario.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.comentarios = null;
    },
    [mostrarComentariosPorCurso.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.comentarios = null;
    },
    [mostrarComentariosPorCurso.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.comentarios = payload.data;
      state.error = null;
    },
    [mostrarComentariosPorCurso.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.comentarios = null;
    },
  },
});

export const comentariosReducer = comentariosSlice.reducer;