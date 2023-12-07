import {configureStore } from "@reduxjs/toolkit";
import { usuariosReducer } from "./slices/usuariosSlice";
import { authReducer } from "./slices/authSlice";
import { carritosReducer } from "./slices/carritosSlice";
import { categoriasReducer } from "./slices/categoriasSlice";
import { comentariosReducer } from "./slices/comentariosSlice";
import { comprasReducer } from "./slices/comprasSlice";
import { cursoSeccionesReducer } from "./slices/cursosSeccionsSlice";
import { cursosReducer } from "./slices/cursosSlice";
import { instructoresReducer } from "./slices/instructoresSlice";
import { ordenesReducer } from "./slices/ordenesSlice";
import { ordenItemsReducer } from "./slices/ordenItemsSlice";
import { respuestasComentariosReducer } from "./slices/respuestasComentariosSlice";
import { seccionesReducer } from "./slices/seccionesSlice";
import { valoracionesReducer } from "./slices/valoracionesSlice";

export default configureStore({
    reducer: {
        usuarios: usuariosReducer,
        auth: authReducer,
        carritos: carritosReducer,
        categorias: categoriasReducer,
        comentarios: comentariosReducer,
        compras: comprasReducer,
        cursosecciones: cursoSeccionesReducer,
        cursos: cursosReducer,
        instructores: instructoresReducer,
        ordenes: ordenesReducer,
        ordenitems: ordenItemsReducer,
        respuestascomentarios: respuestasComentariosReducer,
        secciones: seccionesReducer,
        valoraciones: valoracionesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});