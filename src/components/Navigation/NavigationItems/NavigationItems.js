import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.scss'

const NavigationItems = (props) => (
  <ul className={classes.navigationItems}>
    <NavigationItem link="/" exact>Home</NavigationItem>
    <NavigationItem link="/">Category</NavigationItem>
    <NavigationItem link="/">Daily Updates</NavigationItem>
    <NavigationItem link="/">Dark Theme</NavigationItem>
  </ul>
)

export default NavigationItems
