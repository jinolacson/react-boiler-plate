// List.js

import React, { Component } from 'react';
import Axios from './Axios';
import TableRow from './TableRow';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {serverports: []};
    }
    componentDidMount(){
      Axios.get('display.php')
      .then(response => {
        this.setState({ serverports: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
        return this.state.serverports.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }
    render() {
      return (
        <div className="container">
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Port</td>
                  <td colSpan='2'>Action</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      );
    }
  }