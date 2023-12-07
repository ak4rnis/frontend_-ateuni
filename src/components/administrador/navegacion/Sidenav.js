import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import KitchenIcon from '@mui/icons-material/Kitchen';
import Toolbar from '@mui/material/Toolbar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../../appStore';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InventoryIcon from '@mui/icons-material/Inventory';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import StoreIcon from '@mui/icons-material/Store';
import GroupIcon from '@mui/icons-material/Group';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import ScaleIcon from '@mui/icons-material/Scale';
import InfoIcon from '@mui/icons-material/Info';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideNav() {
  const theme = useTheme();
  //const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const updateOpen = useAppStore((state) => state.updateOpen);
  const open = useAppStore((store) => store.dopen);

  

  return (
    <Box sx={{ display: 'flex', backgroundColor: "#ffffff" }}>
      <CssBaseline />
      <Box height={30} />
      <Drawer variant="permanent" open={open} sx={{backgroundColor: '#ffffff'}}>
        <DrawerHeader>
          <IconButton >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
    </DrawerHeader>
        
        <Divider />
        <List sx={{bgcolor: '#ffffff'}} >
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {navigate("/adminglobal")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#012c56'
                  }}
                >
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Inicio" sx={{ opacity: open ? 1 : 0, color: '#012c56' }} />
              </ListItemButton>
        </ListItem>
       
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {navigate("/adminglobal/products")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#012c56'
                  }}
                >
                  <InventoryIcon />
                </ListItemIcon>
                <ListItemText primary="Productos" sx={{ opacity: open ? 1 : 0, color: '#012c56' }} />
              </ListItemButton>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {navigate("/adminglobal/areas")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#012c56'
                  }}
                >
                  <HdrAutoIcon />
                </ListItemIcon>
                <ListItemText primary="Areas" sx={{ opacity: open ? 1 : 0 , color: '#012c56'}} />
              </ListItemButton>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {navigate("/adminglobal/cantidades")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#012c56'
                  }}
                >
                  <StoreIcon />
                </ListItemIcon>
                <ListItemText primary="Cantidades" sx={{ opacity: open ? 1 : 0, color: '#012c56' }} />
              </ListItemButton>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {navigate("/adminglobal/clientes")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#012c56'
                  }}
                >
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Clientes" sx={{ opacity: open ? 1 : 0 , color: '#012c56'}} />
              </ListItemButton>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {navigate("/adminglobal/escuelas")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#012c56'
                  }}
                >
                  <ReduceCapacityIcon />
                </ListItemIcon>
                <ListItemText primary="Escuelas" sx={{ opacity: open ? 1 : 0, color: '#012c56' }} />
              </ListItemButton>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {navigate("/adminglobal/estadosolicitudes")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#012c56'
                  }}
                >
                  <ScaleIcon />
                </ListItemIcon>
                <ListItemText primary="Estado de Solicitudes" sx={{ opacity: open ? 1 : 0 , color: '#012c56'}} />
              </ListItemButton>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {navigate("/adminglobal/fuerastocks")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#012c56'
                  }}
                >
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Fuera de Stock" sx={{ opacity: open ? 1 : 0, color: '#012c56' }} />
              </ListItemButton>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {navigate("/adminglobal/lugares")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#012c56'
                  }}
                >
                  <HomeWorkIcon />
                </ListItemIcon>
                <ListItemText primary="Lugares" sx={{ opacity: open ? 1 : 0, color: '#012c56' }} />
              </ListItemButton>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {navigate("/adminglobal/perfiles")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#012c56'
                  }}
                >
                  <CoPresentIcon />
                </ListItemIcon>
                <ListItemText primary="Perfiles" sx={{ opacity: open ? 1 : 0 , color: '#012c56'}} />
              </ListItemButton>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {navigate("/adminglobal/sapstocks")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#012c56'
                  }}
                >
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Sap Stocks" sx={{ opacity: open ? 1 : 0, color: '#012c56' }} />
              </ListItemButton>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {navigate("/adminglobal/solicitudes")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#012c56'
                  }}
                >
                  <AssignmentTurnedInIcon />
                </ListItemIcon>
                <ListItemText primary="Solicitudes" sx={{ opacity: open ? 1 : 0, color: '#012c56' }} />
              </ListItemButton>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {navigate("/adminglobal/solicitudesproductos")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#012c56'
                  }}
                >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Solicitudes de Productos" sx={{ opacity: open ? 1 : 0, color: '#012c56' }} />
              </ListItemButton>
                </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {navigate("/adminglobal/stocks")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#012c56'
                  }}
                >
                  <KitchenIcon />
                </ListItemIcon>
                <ListItemText primary="Stocks" sx={{ opacity: open ? 1 : 0 , color: '#012c56'}} />
              </ListItemButton>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {navigate("/adminglobal/usuarios")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#012c56'
                  }}
                >
                  <PeopleAltIcon />
                </ListItemIcon>
                <ListItemText primary="Usuarios" sx={{ opacity: open ? 1 : 0 , color: '#012c56'}} />
              </ListItemButton>
        </ListItem>
        
          
        </List>
      </Drawer>
      
    </Box>
  );
}