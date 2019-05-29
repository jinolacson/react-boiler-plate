# React + babel + bootstrap + Webpack + axios
A ready to use simple boilerplate crud demonstration using babel, bootstrap, webpack and axios.

## Main instructions are in **master** branch **README.md**
```
Resource: 
https://github.com/dockwa/simple-react-validator
```

### Updated **Create.js** with example validation using `simple-react-validator`

```
// Create.js

import React, { Component } from 'react';
import Axios from './Axios';

//include 'simple-react-validator'
import SimpleReactValidator from 'simple-react-validator';

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.onChangeHostName = this.onChangeHostName.bind(this);
        this.onChangePort = this.onChangePort.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //Instantiate new SimpleReactValidator class with custom rules and assign to this.validator variable
        this.validator = new SimpleReactValidator();

        this.state = {
            name: '',
            port: ''
        }
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

         if (this.validator.allValid()) {

            //store input values
            const serverport = {
                name: this.state.name,
                port: this.state.port
            }

            //Submit to server
            Axios.post('insert.php', serverport).then(res => console.log(res.data.msg));
            //console.log(`name is ${this.state.name} and port is ${this.state.port}`);
            
            //clear inputs
            this.setState({
                name: '',
                port: ''
            });

        } else {

            //Show validation message 
            this.validator.showMessages();

            // rerender to show messages for the first time
            this.forceUpdate();
        }
    }

    render() {
       return (
            <div style={{marginTop: 50}}>
                <h3>Add New Server</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Host Name:  </label>
                        <input type="text" className="form-control" value={this.state.name}  onChange={this.onChangeHostName}/>

                        {this.validator.message('theName', this.state.name, 'required|alpha')}

                    </div>
                    <div className="form-group">
                        <label>Add Server Port: </label>
                        <input type="text" className="form-control" value={this.state.port}  onChange={this.onChangePort}/>

                        {this.validator.message('thePort', this.state.port, 'required|integer|min:4|max:4')}

                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Node server" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
```
## Updated **package.json** line was added i installed it using `npm install simple-react-validator --save`

```
"simple-react-validator": "^1.0.7"
```