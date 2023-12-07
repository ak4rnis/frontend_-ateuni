
import { createSlice } from "@reduxjs/toolkit";
import {
  crearInstructor,
  verInstructorPorId,
  actualizarInstructorPorId,
  mostrarInstructores,
} from "../actions/instructoresAction";

export const initialState = {
  instructores: [],
  loading: false,
  error: null,
  instructor: null,
};

export const instructoresSlice = createSlice({
  name: "instructores",
  initialState,
  reducers: {},
  extraReducers: {
    [crearInstructor.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.instructor = null;
    },
    [crearInstructor.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.instructor = payload;
    },
    [crearInstructor.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.instructor = null;
    },
    [verInstructorPorId.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.instructor = null;
    },
    [verInstructorPorId.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.instructor = payload;
    },
    [verInstructorPorId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.instructor = null;
    },
    [actualizarInstructorPorId.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.instructor = null;
    },
    [actualizarInstructorPorId.fulfilled]: (state, payload) => {
      state.loading = false;
      state.error = null;
      state.instructor = payload;
    },
    [actualizarInstructorPorId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.instructor = null;
    },
    [mostrarInstructores.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.instructores = null;
    },
    [mostrarInstructores.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.instructores = payload.data;
      state.error = null;
    },
    [mostrarInstructores.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.instructores = null;
    },
  },
});

export const instructoresReducer = instructoresSlice.reducer;