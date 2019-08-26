import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import '../styles/global.css'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>

        <Route exact path="/" component={} />
        <Route exact path="/mascota/:id" component={} />
        <Route exact path="/login" component={} />
        <Route exact path="/panel" component={} />

      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App