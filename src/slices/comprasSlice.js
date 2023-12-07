import { createSlice } from "@reduxjs/toolkit";
import {
  crearCompra,
  verCompraPorId,
  actualizarCompra,
  mostrarCompras,
  mostrarComprasPorUsuario,
  mostrarComprasPorCurso,
} from "../actions/comprasAction";

export const initialState = {
  compras: [],
  loading: false,
  error: null,
  compra: null,
};

export const comprasSlice = createSlice({
  name: "compras",
  initialState,
  reducers: {},
  extraReducers: {
    [crearCompra.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.compra = null;
    },
    [crearCompra.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.compra = payload;
    },
    [crearCompra.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.compra = null;
    },
    [verCompraPorId.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.compra = null;
    },
    [verCompraPorId.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.compra = payload;
    },
    [verCompraPorId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.compra = null;
    },
    [actualizarCompra.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.compra = null;
    },
    [actualizarCompra.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.compra = payload;
    },
    [actualizarCompra.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.compra = null;
    },
    [mostrarCompras.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.compras = null;
    },
    [mostrarCompras.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.compras = payload.data;
      state.error = null;
    },
    [mostrarCompras.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.compras = null;
    },
    [mostrarComprasPorUsuario.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.compras = null;
    },
    [mostrarComprasPorUsuario.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.compras = payload.data;
      state.error = null;
    },
    [mostrarComprasPorUsuario.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.compras = null;
    },
    [mostrarComprasPorCurso.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.compras = null;
    },
    [mostrarComprasPorCurso.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.compras = payload.data;
      state.error = null;
    },
    [mostrarComprasPorCurso.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.compras = null;
    },
  },
});

export const comprasReducer = comprasSlice.reducer;