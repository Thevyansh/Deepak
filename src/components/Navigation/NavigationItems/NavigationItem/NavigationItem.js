import classes from './NavigationItem.module.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationItem = (props) => (

  <li className={classes.navigationItem}>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName="active"
    >
      {props.children}
    </NavLink>
  </li>
)

export default NavigationItem
