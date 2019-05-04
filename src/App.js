import React from 'react';
import './App.css';
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Email from './views/Email'
import Works from './views/Works'
import SideNav from './components/SideNav'
import Links from './components/Links'
import { Route, Switch } from 'react-router-dom'
import { Grid, Segment } from 'semantic-ui-react'


function App() {
  return (
    <>
      <Segment placeholder style={{position: 'fixed', background: 'transparent', width: '100%', height: '100%'}}>
        <Grid columns={2} textAlign='center'>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Links />
            </Grid.Column>

            <Grid.Column>
              <SideNav />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/Email' component={Email} />
        <Route exact path='/Works' component={Works} />
      </Switch>
    </>
  );
}

export default App;
