import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from 'react';
import { mostrarUsuarios } from './actions/usuariosAction';
import { mostrarComentarios } from './actions/comentariosAction';
import Usuarios from './components/administrador/dashboard/Usuarios';
import UsuarioList from './components/administrador/modulos/usuarios/UsuarioList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Instructores from './components/administrador/dashboard/Instructores';
import Categorias from './components/administrador/dashboard/Categorias';
import Cursos from './components/administrador/dashboard/Cursos';
import Login from './components/seguridad/Login';
import Secciones from './components/administrador/dashboard/Secciones';
function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/administrador/usuarios' exact element={<Usuarios />} />
          <Route path="/administrador/instructores" exact element={<Instructores />} />
          <Route path="/administrador/categorias" exact element={<Categorias />} />
          <Route path='/administrador/cursos' exact element={<Cursos />} />
          <Route path='/administrador/secciones' exact element={<Secciones />} />
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
