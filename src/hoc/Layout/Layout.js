import React, { Component } from 'react'
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
