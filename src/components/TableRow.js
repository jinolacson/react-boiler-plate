// TableRow.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from './Axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class TableRow extends Component {
  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.toggle = this.toggle.bind(this);
        
        //set default modal state to false
        this.state = {
          modal: false
        };
    }

    toggle() {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }

    delete() {
        Axios.get('delete.php?id='+this.props.obj.id)
        .then(res => console.log(res.data.msg));

        //reload current page
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

             <div>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Delete confirmation</ModalHeader>
                <ModalBody>
                  Are you sure you want to delete {this.props.obj.name}
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.delete}>Confirm</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
             </div>
  
          </td>
          <td><Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link></td>
          <td><Button color="danger" className="btn btn-primary" onClick={this.toggle}>Delete</Button></td>
        </tr>
    );
  }
}

export default TableRow;