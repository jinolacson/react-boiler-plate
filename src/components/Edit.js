// Create.js

import React, { Component } from 'react';
import Axios from './Axios';

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.onChangeHostName = this.onChangeHostName.bind(this);
        this.onChangePort = this.onChangePort.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            port: ''
        }
    }
    componentDidMount() {
      Axios.get('edit.php?id='+this.props.match.params.id)
          .then(response => {
            console.log(response.data)
              this.setState({ 
                name: response.data.name, 
                port: response.data.port
              });
              console.log(response)
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onChangeHostName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangePort(e) {
        this.setState({
            port: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

         const serverport = {
            name: this.state.name,
            port: this.state.port
        }

        Axios.post('update.php?id='+this.props.match.params.id, serverport)
        .then(res => console.log(res.data.msg));

        this.props.history.push('/list');
        console.log(this.props.match.params.id, serverport)
        
    }

    render() {
       return (
            <div style={{marginTop: 50}}>
                <h3>Edit Server</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Host Name:  </label>
                        <input type="text" className="form-control" value={this.state.name || ''}  onChange={this.onChangeHostName}/>
                    </div>
                    <div className="form-group">
                        <label>Add Server Port: </label>
                        <input type="text" className="form-control" value={this.state.port || ''}  onChange={this.onChangePort}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Node server" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}