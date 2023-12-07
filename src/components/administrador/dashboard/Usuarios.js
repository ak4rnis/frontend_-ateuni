import React from 'react'
import Navbar from '../navegacion/Navbar'
import { Box } from '@mui/material'
import SideNav from '../navegacion/Sidenav'

import UsuarioList from '../modulos/usuarios/UsuarioList'


const Usuarios = () => {
  return (
    <>
        <div className='bgcolor'>
            <Navbar />
            <Box height={70} />
            <Box sx={{display: "flex"}}>
                <SideNav />
                <Box component="main" sx={{flexGrow: 1, p: 3}}>
                    <UsuarioList />
                </Box>
            </Box>
        </div>
    </>
  )
}

export default Usuarios;