import { createSlice } from "@reduxjs/toolkit";
import {
  crearRespuestaComentario,
  verRespuestaComentarioPorId,
  actualizarRespuestaComentario,
  mostrarRespuestasComentarios,
  mostrarRespuestasComentariosPorUsuario,
  mostrarRespuestasComentariosPorComentario,
} from "../actions/respuestasComentariosAction";

export const initialState = {
  respuestasComentarios: [],
  loading: false,
  error: null,
  respuestaComentario: null,
};

export const respuestasComentariosSlice = createSlice({
  name: "respuestasComentarios",
  initialState,
  reducers: {},
  extraReducers: {
    [crearRespuestaComentario.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.respuestaComentario = null;
    },
    [crearRespuestaComentario.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.respuestaComentario = payload;
    },
    [crearRespuestaComentario.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.respuestaComentario = null;
    },
    [verRespuestaComentarioPorId.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.respuestaComentario = null;
    },
    [verRespuestaComentarioPorId.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.respuestaComentario = payload;
    },
    [verRespuestaComentarioPorId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.respuestaComentario = null;
    },
    [actualizarRespuestaComentario.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.respuestaComentario = null;
    },
    [actualizarRespuestaComentario.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.respuestaComentario = payload;
    },
    [actualizarRespuestaComentario.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.respuestaComentario = null;
    },
    [mostrarRespuestasComentarios.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.respuestasComentarios = null;
    },
    [mostrarRespuestasComentarios.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.respuestasComentarios = payload.data;
      state.error = null;
    },
    [mostrarRespuestasComentarios.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.respuestasComentarios = null;
    },
    [mostrarRespuestasComentariosPorUsuario.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.respuestasComentarios = null;
    },
    [mostrarRespuestasComentariosPorUsuario.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.respuestasComentarios = payload.data;
      state.error = null;
    },
    [mostrarRespuestasComentariosPorUsuario.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.respuestasComentarios = null;
    },
    [mostrarRespuestasComentariosPorComentario.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.respuestasComentarios = null;
    },
    [mostrarRespuestasComentariosPorComentario.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.respuestasComentarios = payload.data;
      state.error = null;
    },
    [mostrarRespuestasComentariosPorComentario.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.respuestasComentarios = null;
    },
  },
});

export const respuestasComentariosReducer = respuestasComentariosSlice.reducer;