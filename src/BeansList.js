import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { GridList } from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './App.css';

const beans = [
  {
    id: 1,
    name: 'Feijao carioca',
    description: 'Esse feijao eh puta gostoso',
    quality: 50,
    supplier: 'Razer',
  },
  {
    id: 2,
    name: 'Feijao carioca',
    description: 'Esse feijao eh puta gostoso',
    quality: 50,
    supplier: 'Razer',
  },
  {
    id: 3,
    name: 'Feijao preto',
    description: 'Esse feijao eh puta gostoso',
    quality: 50,
    supplier: 'Razer',
  },
  {
    id: 4,
    name: 'Feijao carioca',
    description: 'Esse feijao eh puta gostoso',
    quality: 50,
    supplier: 'Razer',
  },
  {
    id: 5,
    name: 'Feijao carioca',
    description: 'Esse feijao eh puta gostoso',
    quality: 50,
    supplier: 'Razer',
  },
];

export default class BeansList extends Component {
  state = {
    salesModalOpen: false,
    openedBeanDialog: null,
  };

  handleOpen = (beanId) => {
    this.setState({ salesModalOpen: true, openedBeanDialog: beanId });
  };

  handleClose = () => {
    this.setState({ salesModalOpen: false });
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
          cols={1}
          style={{
            width: '100%',
            height: 'auto',
          }}
        >
          <h1 style={{ textAlign: 'center', marginBottom: 0 }}>Beans</h1>
          <List>
            {beans.map(bean => (
              <div key={bean.id}>
                <ListItem
                  primaryText={bean.name}
                  secondaryText={
                    <div style={{ display: 'flex', flexDirection: 'column', height: 'auto' }}>
                      <p style={{ margin: 0 }}>{bean.description}</p>
                      <p style={{ marginTop: 5, marginBottom: 0 }}>
                        <strong>Quality: </strong>
                        {bean.quality}
                      </p>
                      <p style={{ marginTop: 5 }}>
                        <strong>Supplier: </strong>
                        {bean.supplier}
                      </p>
                    </div>
                  }
                  style={{ paddingLeft: 50 }}
                  rightIconButton={
                    <IconButton style={{ right: 150 }} onClick={() => this.handleOpen(bean.id)}>
                      <FloatingActionButton>
                        <ContentAdd />
                      </FloatingActionButton>
                    </IconButton>
                  }
                />
                <Divider />
              </div>
            ))}
            <Dialog
              title="Sell Product"
              actions={[
                <FlatButton label="Cancel" primary onClick={this.handleClose} />,
                <FlatButton label="Submit" primary disabled onClick={this.handleClose} />,
              ]}
              modal
              open={this.state.salesModalOpen}
              onRequestClose={this.handleClose}
            />
          </List>
        </GridList>
      </div>
    );
  }
}
