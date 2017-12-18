import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";
import { GridList } from "material-ui/GridList";
import Dialog from "material-ui/Dialog";
import { Router, IndexRoute, Route, browserHistory } from "react-router";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import IconButton from "material-ui/IconButton";
import Brands from "./Brands";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import "./App.css";

const currentBrands = JSON.parse(localStorage.getItem("brands")) || [];

export default class BeansList extends Component {
  state = {
    modalOpen: false,
    openedBeanDialog: null
  };

  handleOpen = brandName => {
    this.setState({ modalOpen: true, openedBeanDialog: brandName });
    alert(this.state.openedBeanDialog);
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
    alert(this.state.openedBeanDialog);
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        <GridList
          cols={1}
          style={{
            width: "100%",
            height: "auto",
            textAlign: "center"
          }}
        >
          <h1 style={{ marginBottom: 0 }}>Sales</h1>
          <List>
            {currentBrands.length == 0 && (
              <RaisedButton
                type="submit"
                label="Register new Product"
                onClick={() => this.props.router.push("/brands")}
                primary={true}
                style={{
                  marginTop: 30,
                  minWidth: 300
                }}
              />
            )}
            {currentBrands.map(bean => (
              <div key={bean.id}>
                <ListItem
                  primaryText={bean.name}
                  secondaryText={
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "auto"
                      }}
                    >
                      <p style={{ margin: 0 }}>{bean.description}</p>
                    </div>
                  }
                  onClick={() => this.handleOpen(bean.name)}
                />
                <Divider />
              </div>
            ))}
            <Dialog
              title="Sell Product"
              actions={[
                <FlatButton
                  label="Cancel"
                  primary
                  onClick={this.handleClose}
                />,
                <FlatButton
                  label="Submit"
                  primary
                  disabled
                  onClick={this.handleClose}
                />
              ]}
              modal
              open={this.state.modalOpen}
              onRequestClose={this.handleClose}
            />
          </List>
        </GridList>
      </div>
    );
  }
}

