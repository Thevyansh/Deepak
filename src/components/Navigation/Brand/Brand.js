import React from 'react'
import classes from './Brand.module.scss'
import { NavLink } from 'react-router-dom'

const Brand = (props) => {
  return (
    <div className={classes.container}>
    <NavLink to="/" exact={props.exact}>Dr. Deepak Acharya</NavLink>
    </div>
  )
}

export default Brand
