import { createSlice } from "@reduxjs/toolkit";
import {
  crearCategoria,
  verCategoriaPorId,
  actualizarCategoria,
  mostrarCategorias,
} from "../actions/categoriasAction";

export const initialState = {
  categorias: [],
  loading: false,
  error: null,
  categoria: null,
};

export const categoriasSlice = createSlice({
  name: "categorias",
  initialState,
  reducers: {},
  extraReducers: {
    [crearCategoria.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.categoria = null;
    },
    [crearCategoria.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.categoria = payload;
    },
    [crearCategoria.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.categoria = null;
    },
    [verCategoriaPorId.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.categoria = null;
    },
    [verCategoriaPorId.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.categoria = payload;
    },
    [verCategoriaPorId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.categoria = null;
    },
    [actualizarCategoria.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.categoria = null;
    },
    [actualizarCategoria.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.categoria = payload;
    },
    [actualizarCategoria.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.categoria = null;
    },
    [mostrarCategorias.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.categorias = null;
    },
    [mostrarCategorias.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.categorias = payload.data;
      state.error = null;
    },
    [mostrarCategorias.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.categorias = null;
    },
  },
});

export const categoriasReducer = categoriasSlice.reducer;