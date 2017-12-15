import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import './App.css';

export default class App extends Component {
  state = {
    menuOpen: false,
  };

  componentDidMount() {
    localStorage.setItem('counter', 0);

    // setInterval(() => {
    //   const count = localStorage.getItem('counter');
    //   localStorage.setItem('counter', Number(count) + 1);
    //
    //   this.forceUpdate();
    // }, 1);
  }

  handleMenuToggle = () => {
    this.setState(({ menuOpen }) => ({ menuOpen: !menuOpen }));
  };

  render() {
    const { menuOpen } = this.state;

    return (
      <MuiThemeProvider>
        <div>
          <h1>{localStorage.getItem('counter')}</h1>
          <AppBar title="Jundita" onLeftIconButtonClick={this.handleMenuToggle} />
          {menuOpen && (
            <Paper style={{ display: 'inline-block', minWidth: 150, position: 'absolute' }}>
              <Menu>
                <MenuItem
                  primaryText="Beans"
                  onClick={this.handleMenuToggle}
                  containerElement={<Link to="/" />}
                />
                <MenuItem
                  primaryText="Add bean"
                  onClick={this.handleMenuToggle}
                  containerElement={<Link to="/beans" />}
                />
              </Menu>
            </Paper>
          )}
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
