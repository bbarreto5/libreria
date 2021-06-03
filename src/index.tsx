import * as React from 'react'
import styles from './styles.module.css'

import MyNavBar from './components/Navbar'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}> hola : {text}</div>
}

export const NavBar = MyNavBar

export const Hello = () =>{
  return (
    <div>hola mundo</div>
  )
}
