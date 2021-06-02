import React from 'react';
import {
    createStyles,
    makeStyles,
  } from "@material-ui/core";

  // componente navbar

  import AppBar from '@material-ui/core/AppBar';
  import Toolbar from '@material-ui/core/Toolbar';
  import Typography from '@material-ui/core/Typography';
  import IconButton from '@material-ui/core/IconButton';
  import MenuIcon from '@material-ui/icons/Menu'; 
  import AccountCircle from '@material-ui/icons/AccountCircle';
  import Apps from '@material-ui/icons/Apps';
  import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
  import Badge from '@material-ui/core/Badge';
  import NotificationsIcon from '@material-ui/icons/Notifications';
  import Fab from '@material-ui/core/Fab';

  const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: "100%",
            height: 64,
            background: "#ffffff",
            color: "#4fbc39",
            borderRadius: 4
        },
        menuButton: {
            marginRight: 10,
        },
        title: {
            fontSize: 28, 
            flexGrow: 1,
            fontWeight: 700
        },
        colorIcons:{
            color:"#999999"
        },
        nameUser:{
            color:"#999999",
            margin: "0px 15px"
        },
        idiomaText:{
            color:"#999999",
            marginRight: 10
        },
        powerRotation:{
            transform: "rotate(90deg)",
        }
    })
  );
  
  const NavBar = ( props: { openMenu?:( x: void) => void }) => {  
    const { openMenu }=props;
    const classes = useStyles();
    
    return (
        <AppBar className={classes.root} position="static">
            <Toolbar >
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => openMenu?openMenu():null}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Ofesauto
                </Typography>
                
                <span className={classes.idiomaText}>
                    Idioma
                </span>
                
                <Fab size="small" color="primary" aria-label="idioma">
                    ES
                </Fab>

                <span className={classes.nameUser}>
                    brandon barreto
                </span>
                
                
                <IconButton edge="start" className={classes.colorIcons} aria-label="menu">
                    <AccountCircle />
                </IconButton>
                
                <IconButton edge="start" className={classes.colorIcons + " " + classes.powerRotation} aria-label="menu">
                    <PowerSettingsNew />
                </IconButton>
                
                <IconButton edge="start" className={classes.colorIcons} aria-label="show 17 new notifications" >
                    <Badge badgeContent={1} color="secondary">
                        <NotificationsIcon /> 
                    </Badge>
                </IconButton>

                <IconButton edge="start" className={classes.colorIcons} aria-label="menu">
                    <Apps />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
  };
  
  export default NavBar;