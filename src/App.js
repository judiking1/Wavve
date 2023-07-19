import React from 'react'
import {HashRouter} from 'react-router-dom'
import { Route, Switch } from 'react-router'
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact = {true} component = { Home } />
        <Route path="/movie/:id" component = { Detail } />
      </Switch>
    </HashRouter>
  )
}

export default App
