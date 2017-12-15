import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import Dialog from 'material-ui/Dialog';
import { GridList } from 'material-ui/GridList';
import './App.css';

export default class Beans extends Component {
  state = {
    open: false,
    slider: 50,
  };

  handleSlider = (event, value) => {
    this.setState({ slider: value });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleMenuToggle = () => {
    this.setState(({ menuOpen }) => ({ menuOpen: !menuOpen }));
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        <GridList
          cols={2}
          cellHeight={200}
          padding={1}
          style={{
            width: 500,
            height: 450,
            overflowY: 'auto',
            overflowX: 'auto',
          }}
        >
          <form>
            <TextField floatingLabelText="Bean Name" hintText="Bean Name" id="bean-name" />
            <br />
            <Slider
              min={0}
              max={100}
              step={1}
              value={this.state.slider}
              onChange={this.handleSlider}
              id="bean-quality"
            />
            <br />
            <RaisedButton label="Additional Information" onClick={this.handleOpen} />
            <Dialog
              title="Additional information about the bean"
              actions={[
                <FlatButton label="Cancel" primary onClick={this.handleClose} />,
                <FlatButton label="Submit" primary disabled onClick={this.handleClose} />,
              ]}
              modal
              open={this.state.open}
            >
              <TextField
                floatingLabelText="Product Description"
                hintText="Description"
                id="product-desc"
              />
              <br />
              <TextField
                floatingLabelText="Distribuitor"
                hintText="Distribuitor/Farm"
                id="distribuitor"
              />
            </Dialog>
          </form>
        </GridList>
      </div>
    );
  }
}
