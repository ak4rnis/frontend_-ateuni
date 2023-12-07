import { createSlice } from "@reduxjs/toolkit";
import {
  crearCarrito,
  verCarritoPorId,
  actualizarCarrito,
  eliminar_carrito,
  agregarCarritoItem,
  eliminarCarritoItem,
  mostrarCarritosPorUsuario,
  mostrarCarritoItemsCarrito,
} from "../actions/carritosAction";

export const initialState = {
  carritos: [],
  carrito: null,
  carritoItems: [],
  loading: false,
  error: null,
};

export const carritosSlice = createSlice({
  name: "carritos",
  initialState,
  reducers: {},
  extraReducers: {
    [crearCarrito.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.carrito = null;
    },
    [crearCarrito.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.carrito = payload;
    },
    [crearCarrito.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.carrito = null;
    },
    [verCarritoPorId.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.carrito = null;
    },
    [verCarritoPorId.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.carrito = payload;
    },
    [verCarritoPorId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.carrito = null;
    },
    [actualizarCarrito.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.carrito = null;
    },
    [actualizarCarrito.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.carrito = payload;
    },
    [actualizarCarrito.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.carrito = null;
    },
    [eliminar_carrito.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.carrito = null;
    },
    [eliminar_carrito.fulfilled]: (state) => {
      state.loading = false;
      state.error = null;
      state.carrito = null;
    },
    [eliminar_carrito.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.carrito = null;
    },
    [agregarCarritoItem.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [agregarCarritoItem.fulfilled]: (state) => {
      state.loading = false;
      state.error = null;
    },
    [agregarCarritoItem.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [eliminarCarritoItem.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [eliminarCarritoItem.fulfilled]: (state) => {
      state.loading = false;
      state.error = null;
    },
    [eliminarCarritoItem.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [mostrarCarritosPorUsuario.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.carritos = null;
    },
    [mostrarCarritosPorUsuario.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.carritos = payload.data;
    },
    [mostrarCarritosPorUsuario.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.carritos = null;
    },
    [mostrarCarritoItemsCarrito.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.carritoItems = null;
    },
    [mostrarCarritoItemsCarrito.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.carritoItems = payload.data;
    },
    [mostrarCarritoItemsCarrito.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.carritoItems = null;
    },
  },
});

export const carritosReducer = carritosSlice.reducer;