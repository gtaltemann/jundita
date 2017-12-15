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

  handleMenuToggle = () => {
    this.setState(({ menuOpen }) => ({ menuOpen: !menuOpen }));
  };

  render() {
    const { menuOpen } = this.state;

    return (
      <MuiThemeProvider>
        <div>
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
