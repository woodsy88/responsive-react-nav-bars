import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'


class App extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      }
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }

    return (
        <>
        <div style={{ height: '100%' }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main style={{ marginTop: '66px', backgroundColor: 'beige' }}>
            <p>Ut in proident cupidatat culpa velit ad do qui non nulla sit consequat nulla. Culpa ipsum eu ad fugiat mollit mollit. Proident consectetur culpa minim aute culpa anim ullamco eu adipisicing aliqua laborum cillum. Veniam adipisicing sunt reprehenderit duis in elit exercitation officia duis commodo non esse anim. Commodo tempor quis cupidatat qui mollit.</p>
            <p>Occaecat mollit laborum cupidatat consectetur nostrud aute excepteur fugiat officia. Laborum consequat irure nulla veniam sunt consequat id enim et eiusmod dolor tempor exercitation. Culpa excepteur qui ullamco irure magna culpa aliquip enim commodo enim. Ut culpa minim consectetur officia Lorem proident aliquip fugiat nulla voluptate magna eu voluptate irure.</p>
            <p>Ut eu nulla aliquip fugiat veniam ipsum. Pariatur anim aliquip cillum sit irure et ut. Ipsum culpa fugiat reprehenderit ullamco sit. Aute minim fugiat esse aliqua pariatur.</p>
            <p>Ut in proident cupidatat culpa velit ad do qui non nulla sit consequat nulla. Culpa ipsum eu ad fugiat mollit mollit. Proident consectetur culpa minim aute culpa anim ullamco eu adipisicing aliqua laborum cillum. Veniam adipisicing sunt reprehenderit duis in elit exercitation officia duis commodo non esse anim. Commodo tempor quis cupidatat qui mollit.</p>
            <p>Occaecat mollit laborum cupidatat consectetur nostrud aute excepteur fugiat officia. Laborum consequat irure nulla veniam sunt consequat id enim et eiusmod dolor tempor exercitation. Culpa excepteur qui ullamco irure magna culpa aliquip enim commodo enim. Ut culpa minim consectetur officia Lorem proident aliquip fugiat nulla voluptate magna eu voluptate irure.</p>
            <p>Ut eu nulla aliquip fugiat veniam ipsum. Pariatur anim aliquip cillum sit irure et ut. Ipsum culpa fugiat reprehenderit ullamco sit. Aute minim fugiat esse aliqua pariatur.</p>
            <p>Ut in proident cupidatat culpa velit ad do qui non nulla sit consequat nulla. Culpa ipsum eu ad fugiat mollit mollit. Proident consectetur culpa minim aute culpa anim ullamco eu adipisicing aliqua laborum cillum. Veniam adipisicing sunt reprehenderit duis in elit exercitation officia duis commodo non esse anim. Commodo tempor quis cupidatat qui mollit.</p>
            <p>Occaecat mollit laborum cupidatat consectetur nostrud aute excepteur fugiat officia. Laborum consequat irure nulla veniam sunt consequat id enim et eiusmod dolor tempor exercitation. Culpa excepteur qui ullamco irure magna culpa aliquip enim commodo enim. Ut culpa minim consectetur officia Lorem proident aliquip fugiat nulla voluptate magna eu voluptate irure.</p>
            <p>Ut eu nulla aliquip fugiat veniam ipsum. Pariatur anim aliquip cillum sit irure et ut. Ipsum culpa fugiat reprehenderit ullamco sit. Aute minim fugiat esse aliqua pariatur.</p>
            <p>Ut in proident cupidatat culpa velit ad do qui non nulla sit consequat nulla. Culpa ipsum eu ad fugiat mollit mollit. Proident consectetur culpa minim aute culpa anim ullamco eu adipisicing aliqua laborum cillum. Veniam adipisicing sunt reprehenderit duis in elit exercitation officia duis commodo non esse anim. Commodo tempor quis cupidatat qui mollit.</p>
            <p>Occaecat mollit laborum cupidatat consectetur nostrud aute excepteur fugiat officia. Laborum consequat irure nulla veniam sunt consequat id enim et eiusmod dolor tempor exercitation. Culpa excepteur qui ullamco irure magna culpa aliquip enim commodo enim. Ut culpa minim consectetur officia Lorem proident aliquip fugiat nulla voluptate magna eu voluptate irure.</p>
            <p>Ut eu nulla aliquip fugiat veniam ipsum. Pariatur anim aliquip cillum sit irure et ut. Ipsum culpa fugiat reprehenderit ullamco sit. Aute minim fugiat esse aliqua pariatur.</p>
            <p>Ut in proident cupidatat culpa velit ad do qui non nulla sit consequat nulla. Culpa ipsum eu ad fugiat mollit mollit. Proident consectetur culpa minim aute culpa anim ullamco eu adipisicing aliqua laborum cillum. Veniam adipisicing sunt reprehenderit duis in elit exercitation officia duis commodo non esse anim. Commodo tempor quis cupidatat qui mollit.</p>
            <p>Occaecat mollit laborum cupidatat consectetur nostrud aute excepteur fugiat officia. Laborum consequat irure nulla veniam sunt consequat id enim et eiusmod dolor tempor exercitation. Culpa excepteur qui ullamco irure magna culpa aliquip enim commodo enim. Ut culpa minim consectetur officia Lorem proident aliquip fugiat nulla voluptate magna eu voluptate irure.</p>
            <p>Ut eu nulla aliquip fugiat veniam ipsum. Pariatur anim aliquip cillum sit irure et ut. Ipsum culpa fugiat reprehenderit ullamco sit. Aute minim fugiat esse aliqua pariatur.</p>
            <p>Ut in proident cupidatat culpa velit ad do qui non nulla sit consequat nulla. Culpa ipsum eu ad fugiat mollit mollit. Proident consectetur culpa minim aute culpa anim ullamco eu adipisicing aliqua laborum cillum. Veniam adipisicing sunt reprehenderit duis in elit exercitation officia duis commodo non esse anim. Commodo tempor quis cupidatat qui mollit.</p>
            <p>Occaecat mollit laborum cupidatat consectetur nostrud aute excepteur fugiat officia. Laborum consequat irure nulla veniam sunt consequat id enim et eiusmod dolor tempor exercitation. Culpa excepteur qui ullamco irure magna culpa aliquip enim commodo enim. Ut culpa minim consectetur officia Lorem proident aliquip fugiat nulla voluptate magna eu voluptate irure.</p>
            <p>Ut eu nulla aliquip fugiat veniam ipsum. Pariatur anim aliquip cillum sit irure et ut. Ipsum culpa fugiat reprehenderit ullamco sit. Aute minim fugiat esse aliqua pariatur.</p>
            <p>Ut in proident cupidatat culpa velit ad do qui non nulla sit consequat nulla. Culpa ipsum eu ad fugiat mollit mollit. Proident consectetur culpa minim aute culpa anim ullamco eu adipisicing aliqua laborum cillum. Veniam adipisicing sunt reprehenderit duis in elit exercitation officia duis commodo non esse anim. Commodo tempor quis cupidatat qui mollit.</p>
            <p>Occaecat mollit laborum cupidatat consectetur nostrud aute excepteur fugiat officia. Laborum consequat irure nulla veniam sunt consequat id enim et eiusmod dolor tempor exercitation. Culpa excepteur qui ullamco irure magna culpa aliquip enim commodo enim. Ut culpa minim consectetur officia Lorem proident aliquip fugiat nulla voluptate magna eu voluptate irure.</p>
            <p>Ut eu nulla aliquip fugiat veniam ipsum. Pariatur anim aliquip cillum sit irure et ut. Ipsum culpa fugiat reprehenderit ullamco sit. Aute minim fugiat esse aliqua pariatur.</p>
            <p>Ut in proident cupidatat culpa velit ad do qui non nulla sit consequat nulla. Culpa ipsum eu ad fugiat mollit mollit. Proident consectetur culpa minim aute culpa anim ullamco eu adipisicing aliqua laborum cillum. Veniam adipisicing sunt reprehenderit duis in elit exercitation officia duis commodo non esse anim. Commodo tempor quis cupidatat qui mollit.</p>
            <p>Occaecat mollit laborum cupidatat consectetur nostrud aute excepteur fugiat officia. Laborum consequat irure nulla veniam sunt consequat id enim et eiusmod dolor tempor exercitation. Culpa excepteur qui ullamco irure magna culpa aliquip enim commodo enim. Ut culpa minim consectetur officia Lorem proident aliquip fugiat nulla voluptate magna eu voluptate irure.</p>
            <p>Ut eu nulla aliquip fugiat veniam ipsum. Pariatur anim aliquip cillum sit irure et ut. Ipsum culpa fugiat reprehenderit ullamco sit. Aute minim fugiat esse aliqua pariatur.</p>
            <p>Ut in proident cupidatat culpa velit ad do qui non nulla sit consequat nulla. Culpa ipsum eu ad fugiat mollit mollit. Proident consectetur culpa minim aute culpa anim ullamco eu adipisicing aliqua laborum cillum. Veniam adipisicing sunt reprehenderit duis in elit exercitation officia duis commodo non esse anim. Commodo tempor quis cupidatat qui mollit.</p>
            <p>Occaecat mollit laborum cupidatat consectetur nostrud aute excepteur fugiat officia. Laborum consequat irure nulla veniam sunt consequat id enim et eiusmod dolor tempor exercitation. Culpa excepteur qui ullamco irure magna culpa aliquip enim commodo enim. Ut culpa minim consectetur officia Lorem proident aliquip fugiat nulla voluptate magna eu voluptate irure.</p>
            <p>Ut eu nulla aliquip fugiat veniam ipsum. Pariatur anim aliquip cillum sit irure et ut. Ipsum culpa fugiat reprehenderit ullamco sit. Aute minim fugiat esse aliqua pariatur.</p>
            <p>Ut in proident cupidatat culpa velit ad do qui non nulla sit consequat nulla. Culpa ipsum eu ad fugiat mollit mollit. Proident consectetur culpa minim aute culpa anim ullamco eu adipisicing aliqua laborum cillum. Veniam adipisicing sunt reprehenderit duis in elit exercitation officia duis commodo non esse anim. Commodo tempor quis cupidatat qui mollit.</p>
            <p>Occaecat mollit laborum cupidatat consectetur nostrud aute excepteur fugiat officia. Laborum consequat irure nulla veniam sunt consequat id enim et eiusmod dolor tempor exercitation. Culpa excepteur qui ullamco irure magna culpa aliquip enim commodo enim. Ut culpa minim consectetur officia Lorem proident aliquip fugiat nulla voluptate magna eu voluptate irure.</p>
            <p>Ut eu nulla aliquip fugiat veniam ipsum. Pariatur anim aliquip cillum sit irure et ut. Ipsum culpa fugiat reprehenderit ullamco sit. Aute minim fugiat esse aliqua pariatur.</p>
            <p>Ut in proident cupidatat culpa velit ad do qui non nulla sit consequat nulla. Culpa ipsum eu ad fugiat mollit mollit. Proident consectetur culpa minim aute culpa anim ullamco eu adipisicing aliqua laborum cillum. Veniam adipisicing sunt reprehenderit duis in elit exercitation officia duis commodo non esse anim. Commodo tempor quis cupidatat qui mollit.</p>
            <p>Occaecat mollit laborum cupidatat consectetur nostrud aute excepteur fugiat officia. Laborum consequat irure nulla veniam sunt consequat id enim et eiusmod dolor tempor exercitation. Culpa excepteur qui ullamco irure magna culpa aliquip enim commodo enim. Ut culpa minim consectetur officia Lorem proident aliquip fugiat nulla voluptate magna eu voluptate irure.</p>
            <p>Ut eu nulla aliquip fugiat veniam ipsum. Pariatur anim aliquip cillum sit irure et ut. Ipsum culpa fugiat reprehenderit ullamco sit. Aute minim fugiat esse aliqua pariatur.</p>
          </main>
        </div>
        </>
    )
  }
}

export default App;
