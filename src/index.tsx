import * as React from 'react'
import styles from './styles.module.css'

import MyNavBar from './components/Navbar'

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import moment from 'moment';

import MyTextField from './TextField';

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Hello = () =>{
  return (
    <MyNavBar/>
  )
}

export const Hello2 = () =>{
  return (
    <div>hola mundo</div>
  )
}

export const TextField = MyTextField;