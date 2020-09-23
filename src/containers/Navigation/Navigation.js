import React from 'react'
import Brand from '../../components/Navigation/Brand/Brand'
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems'
import classes from './Navigation.module.scss'

const Navigation = () => {
  return (
    <div className={classes.container}>
      <Brand />
      <NavigationItems />
    </div>
  )
}

export default Navigation
