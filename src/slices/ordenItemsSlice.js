import { createSlice } from "@reduxjs/toolkit";
import {
  crearOrdenItem,
  verOrdenItemPorId,
  actualizarOrdenItem,
  mostrarOrdenItems,
  mostrarOrdenItemsPorOrden,
  mostrarOrdenItemsPorCurso,
} from "../actions/ordenItemsAction";

export const initialState = {
  ordenItems: [],
  loading: false,
  error: null,
  ordenItem: null,
};

export const ordenItemsSlice = createSlice({
  name: "ordenItems",
  initialState,
  reducers: {},
  extraReducers: {
    [crearOrdenItem.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.ordenItem = null;
    },
    [crearOrdenItem.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.ordenItem = payload;
    },
    [crearOrdenItem.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.ordenItem = null;
    },
    [verOrdenItemPorId.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.ordenItem = null;
    },
    [verOrdenItemPorId.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.ordenItem = payload;
    },
    [verOrdenItemPorId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.ordenItem = null;
    },
    [actualizarOrdenItem.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.ordenItem = null;
    },
    [actualizarOrdenItem.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.ordenItem = payload;
    },
    [actualizarOrdenItem.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.ordenItem = null;
    },
    [mostrarOrdenItems.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.ordenItems = null;
    },
    [mostrarOrdenItems.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.ordenItems = payload.data;
      state.error = null;
    },
    [mostrarOrdenItems.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.ordenItems = null;
    },
    [mostrarOrdenItemsPorOrden.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.ordenItems = null;
    },
    [mostrarOrdenItemsPorOrden.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.ordenItems = payload.data;
      state.error = null;
    },
    [mostrarOrdenItemsPorOrden.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.ordenItems = null;
    },
    [mostrarOrdenItemsPorCurso.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.ordenItems = null;
    },
    [mostrarOrdenItemsPorCurso.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.ordenItems = payload.data;
      state.error = null;
    },
    [mostrarOrdenItemsPorCurso.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.ordenItems = null;
    },
  },
});

export const ordenItemsReducer = ordenItemsSlice.reducer;