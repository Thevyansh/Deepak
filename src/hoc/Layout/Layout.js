import React, { Component } from 'react'
import classes from './Layout.module.scss'
import Navigation from '../../containers/Navigation/Navigation'

class Layout extends Component {

  render() {
    return (
      <>
        <Navigation/>
        <main>{this.props.children}</main>
      </>
    )
  }
}

export default Layout
