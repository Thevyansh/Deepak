import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import './App.scss'
import PostList from './components/Post/PostList'
require('dotenv').config()

const App = () => {
  console.log(process.env);
  return (
    <Layout>
      <Switch>
          <Route path="/" exact component={PostList} />
      </Switch>
    </Layout>
  )
}
export default App