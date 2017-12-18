import React, { Component } from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import Slider from "material-ui/Slider";
import Dialog from "material-ui/Dialog";
import { GridList } from "material-ui/GridList";
import "./App.css";

export default class Brands extends Component {
  state = {
    brandName: "",
    brandDescription: ""
  };

  changeBrandName = e => {
    const brandName = e.target.value;
    this.setState({ brandName });
  };

  changeBrandDesc = e => {
    const brandDescription = e.target.value;
    this.setState({ brandDescription });
  };

  handleSubmit = () => {
    const { brandName, brandDescription, brandId } = this.state;

    const brand = {
      name: brandName,
      description: brandDescription
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
          cols={2}
          cellHeight={200}
          padding={1}
          style={{
            width: 500,
            height: 450,
            overflowY: "auto",
            overflowX: "auto"
          }}
        >
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

