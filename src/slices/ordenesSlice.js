import { createSlice } from "@reduxjs/toolkit";
import {
  crearOrden,
  verOrdenPorId,
  actualizarOrden,
  mostrarOrdenes,
  mostrarOrdenesPorUsuario,
} from "../actions/ordenesAction";

export const initialState = {
  ordenes: [],
  loading: false,
  error: null,
  orden: null,
};

export const ordenesSlice = createSlice({
  name: "ordenes",
  initialState,
  reducers: {},
  extraReducers: {
    [crearOrden.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.orden = null;
    },
    [crearOrden.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.orden = payload;
    },
    [crearOrden.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.orden = null;
    },
    [verOrdenPorId.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.orden = null;
    },
    [verOrdenPorId.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.orden = payload;
    },
    [verOrdenPorId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.orden = null;
    },
    [actualizarOrden.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.orden = null;
    },
    [actualizarOrden.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.orden = payload;
    },
    [actualizarOrden.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.orden = null;
    },
    [mostrarOrdenes.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.ordenes = null;
    },
    [mostrarOrdenes.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.ordenes = payload.data;
      state.error = null;
    },
    [mostrarOrdenes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.ordenes = null;
    },
    [mostrarOrdenesPorUsuario.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.ordenes = null;
    },
    [mostrarOrdenesPorUsuario.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.ordenes = payload.data;
      state.error = null;
    },
    [mostrarOrdenesPorUsuario.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.ordenes = null;
    },
  },
});

export const ordenesReducer = ordenesSlice.reducer;