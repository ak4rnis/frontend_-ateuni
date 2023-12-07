import React from 'react'
import Navbar from '../navegacion/Navbar'
import { Box } from '@mui/material'
import SideNav from '../navegacion/Sidenav'

import UsuarioList from '../modulos/usuarios/UsuarioList'
import InstructorList from '../modulos/instructores/InstructorList'


const Instructores = () => {
  return (
    <>
        <div className='bgcolor'>
            <Navbar />
            <Box height={70} />
            <Box sx={{display: "flex"}}>
                <SideNav />
                <Box component="main" sx={{flexGrow: 1, p: 3}}>
                    <InstructorList />
                </Box>
            </Box>
        </div>
    </>
  )
}

export default Instructores;