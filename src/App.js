import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import Login from './components/Login'
import About from './components/About'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
)

export default App
