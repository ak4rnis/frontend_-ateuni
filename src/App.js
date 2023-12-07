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
function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/administrador/usuarios' exact element={<Usuarios />} />
          <Route path="/administrador/instructores" exact element={<Instructores />} />
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
