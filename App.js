import React from 'react';
import './App.css';
import { MuiThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import  {ContextProvider}  from './Context';
import { Switch, Route } from 'react-router-dom';
import Home  from './Home'; 
import Nav from './Nav'
import Order from './Oreder'
import Posts from './Posts'
import Table from './Table'
import TitlebarGridList from './TitleBar'

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      contained: {
        borderRadius: "8px",
        boxShadow: "none",
        backgroundColor: "#039be5",
        color: "#ffffff", 
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#0a6796",
        }
      }
    },
    MuiBox: {
      borderColor: "red"
    }
  }
})

function App() {
  return (
    <ContextProvider>
      <CssBaseline />
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <div >
            <Nav />
              <main>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/order" component={Order} />
                  <Route path="/posts" component={Posts} />
                  <Route path="/table" component={Table} />
                  <Route path="/titlebar" component={TitlebarGridList} />
                </Switch>
              </main>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
  </ContextProvider>
  );
}

export default App;
