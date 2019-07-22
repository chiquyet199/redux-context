import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import NavBar from './components/NavBar'
import Products from './pages/Products'
import Footer from './components/Footer'
import About from './pages/About'
import Checkout from './pages/Checkout'
import actions from './actions/redux-context-actions'
import store from './store'
import AppContext from './context'
import './App.css'

class App extends React.Component {
  state = {state: store.getState(), actions}

  componentDidMount() {
    actions.getProducts()
    this.unsubribe = store.subscribe(() => {
      this.setState({state: store.getState()})
    })
  }

  componentWillUnmount() {
    this.unsubribe()
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <Router>
            <div className="wrapper">
              <NavBar />
              <div className="container">
                <div className="content">
                  <aside />
                  <main>
                    <Switch>
                      <Route exact path="/" component={Products} />
                      <Route path="/shop" component={About} />
                      <Route path="/sale" component={About} />
                      <Route path="/feature" component={About} />
                      <Route path="/blog" component={About} />
                      <Route path="/about" component={About} />
                      <Route path="/contact" component={About} />
                      <Route path="/products" component={Products} />
                      <Route path="/checkout" component={Checkout} />
                      <Redirect to="/" />
                    </Switch>
                  </main>
                </div>
                <Footer />
              </div>
            </div>
          </Router>
        </div>
      </AppContext.Provider>
    )
  }
}

export default App
