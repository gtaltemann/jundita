import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { GridList } from "material-ui/GridList";
import "./App.css";

export default class Brands extends Component {
  state = {
    brandName: "",
    brandDescription: "",
    brandPrice: 0
  };

  changeBrandName = e => {
    const brandName = e.target.value;
    this.setState({ brandName });
  };

  changeBrandDesc = e => {
    const brandDescription = e.target.value;
    this.setState({ brandDescription });
  };

  changeBrandPrice = e => {
    const brandPrice = e.target.value;
    this.setState({ brandPrice });
  };

  handleSubmit = () => {
    const { brandName, brandDescription, brandPrice } = this.state;

    const brand = {
      name: brandName,
      description: brandDescription,
      price: brandPrice
    };

    const currentBrands = JSON.parse(localStorage.getItem("brands")) || [];
    localStorage.setItem("brands", JSON.stringify(currentBrands.concat(brand)));
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
          cellHeight={200}
          padding={1}
          style={{
            width: "100%",
            height: "auto",
            textAlign: "center"
          }}
        >
          <h1 style={{ marginBottom: 0 }}>Brand Registration</h1>
          <form onSubmit={this.handleSubmit}>
            <TextField
              floatingLabelText="Brand Name"
              hintText="Brand Name"
              onChange={this.changeBrandName}
              id="brand-name"
            />
            <br />
            <TextField
              floatingLabelText="Product Description"
              hintText="Product Description"
              onChange={this.changeBrandDesc}
              id="product-description"
            />
            <br />
            <TextField
              floatingLabelText="Bale Price (in R$)"
              hintText="30kg bale price"
              type="number"
              onChange={this.changeBrandPrice}
              id="bale-price"
            />
            <br />
            <RaisedButton
              type="submit"
              label="OK"
              primary={true}
              style={{ marginTop: 30 }}
            />
          </form>
        </GridList>
      </div>
    );
  }
}
