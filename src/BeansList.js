import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";
import { GridList } from "material-ui/GridList";
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import "./App.css";

const currentBrands = JSON.parse(localStorage.getItem("brands")) || [];

export default class BeansList extends Component {
  state = {
    modalOpen: false,
    openedBeanDialog: null,
    ammount: 0,
    finalPrice: 0
  };

  handleOpen = brandName => {
    this.setState({ modalOpen: true, openedBeanDialog: brandName });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  handleSale = () => {
    const ammount = this.state.ammount;
    const product = this.state.openedBeanDialog;
    const finalPrice = this.state.finalPrice;

    const sale = {
      productSold: product,
      ammountSold: ammount,
      salePrice: finalPrice
    };

    const currentSales = JSON.parse(localStorage.getItem("sales")) || [];
    localStorage.setItem("sales", JSON.stringify(currentSales.concat(sale)));

    this.handleClose();
  };

  setFinalPrice = (beanPrice, e) => {
    const ammount = e.target.value;
    const finalPrice = ammount * beanPrice;

    this.setState({ ammount, finalPrice });
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
            {currentBrands.length === 0 && (
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
              <div key={bean.name}>
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
                      <br />
                      <p style={{ margin: 0 }}>
                        <strong>Bale Price: </strong>
                        {bean.price},00
                      </p>
                    </div>
                  }
                  onClick={() => this.handleOpen(bean.name)}
                />
                <Divider />
                <Dialog
                  title="Sell Product"
                  actions={[
                    <FlatButton
                      label="Cancel"
                      primary
                      onClick={this.handleClose}
                    />,
                    <FlatButton
                      label="Sell"
                      primary
                      onClick={this.handleSale}
                    />
                  ]}
                  modal
                  open={this.state.modalOpen}
                  onRequestClose={this.handleClose}
                >
                  <TextField
                    floatingLabelText="Bales"
                    hintText="30kg bales"
                    id="bales-sales"
                    type="number"
                    onChange={e => this.setFinalPrice(bean.price, e)}
                  />
                  <br />
                  <p>
                    <strong>Final Price: </strong>
                    {bean.price * this.state.ammount},00
                  </p>
                </Dialog>
              </div>
            ))}
          </List>
        </GridList>
      </div>
    );
  }
}

