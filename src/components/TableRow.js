// TableRow.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from './Axios';

class TableRow extends Component {
  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        Axios.get('delete.php?id='+this.props.obj.id)
        .then(res => console.log(res.data.msg));

        window.location.reload();
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.port}
          </td>
          <td><Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link></td>
          <td><button onClick={this.delete} className="btn btn-primary">Delete</button></td>
        </tr>
    );
  }
}

export default TableRow;