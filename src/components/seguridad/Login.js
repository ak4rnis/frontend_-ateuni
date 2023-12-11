import React, { useState } from 'react';
import { Card, CardContent, Grid, TextField, Button, Typography, Avatar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import {useNavigate} from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí deberías realizar la autenticación. Puedes comparar username y password con los valores de superusuario.

    // Ejemplo de autenticación básica (no recomendada para producción):
    if (username === 'admin@admin.com' && password === 'superadmin') {
      navigate("/administrador/usuarios")
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <Grid sx={{bgcolor: "#ADDDFF"}} container justifyContent="center" alignItems="center" height="100vh">
      <Grid sx={{color: "red"}} item xs={12} sm={8} md={6} lg={4}>
        <Card sx={{bgcolor: "#CEF786 "}}>
          <CardContent>
            <Avatar sx={{ marginLeft: "250px", width: 56, height: 56, marginBottom: 2, bgcolor: "red" }}>
              <AdminPanelSettingsIcon sx={{color: "white"}}  fontSize="large" /> 
            </Avatar>
            <Typography variant="h5" sx={{marginLeft: "230px"}}>
                Administrador
            </Typography>
            <TextField
              label="Usuario"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Contraseña"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
              Iniciar sesión
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;