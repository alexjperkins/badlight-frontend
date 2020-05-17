import React, { Suspense } from 'react';
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Navbar } from './components/Navbar'

import { gqlClient } from './clients'
import { theme } from './theme'

import './App.css'
import { LandingPage } from './pages/LandingPage'


const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
)

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ApolloProvider client={gqlClient}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Route path="/" component={ Navbar } />

              <Switch>
                <Route exact path="/" component={ LandingPage } />
              </Switch>

            </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    </Suspense>
  );
}

export default App;
