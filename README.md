# React + babel + bootstrap + Webpack + axios
A ready to use simple boilerplate crud demonstration using babel, bootstrap, webpack and axios.

## Basic setup
```
OS version     : Ubuntu 18.04.2 LTS
npm --version  : 6.9.0
npx --version  : 10.2.0(optional)
yarn --version : 1.15.2(optional)
```

### Initial folder structure

```
react-boiler-plate
screenshots/
  - cors-policy-plugin-enabled.png
  - create-page.png
  - edit-page.png
  - list-page.png
db/
  - server.sql
api/
  - connect.php
  - delete.php
  - display.php
  - edit.php
  - insert.php
  - update.php
src/
  components/
    - Axios.js
    - Create.js
    - edit.js
    - List.js
    - TableRow.js
  App.js
  index.html
  index.js
.babelrc
.env
.gitignore
package.json
README.md
REFERENCES.md
webpack.config.js
```
## Instructions

1.  Clone this repo and put inside `htdocs`
2.  Run `sudo npm install`
3.  Run `sudo npm start`, **localhost:8080** will open up in your default browser
4.  Start xampp server and create database with name **reactdb** and import `server.sql`
5.  Install **Allow-Control-Allow-Origin:** chrome plugin and enable resource sharing
6.  For production deployment edit **.env** environment variables point **BASE_DIR='react-boiler-plate/dist/'** and run `sudo npm run build`  it will create **dist** folder

**If you prefer to install things yourself you can follow the instructions below**

1. Create folder **react-boiler-plate**
2.  Run `sudo npm init` and type your answers to the questions or you can run `sudo npm init -y` to say yes to every question - you will get default settings
3.  Install the following dependencies:
```
sudo npm install --save react react-dom bootstrap reactstrap react-router-dom axios dotenv-webpack
```
4.  Install the following dev dependencies:
```
sudo npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react css-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server 
```
5. Update your generated **package.json** with the following:
```
1. 
"main": "src/index.js",
  
2. 
"scripts": {
    "start": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production"
},

3.
"author": "jinolacson",

```
6. Create **.babelrc** file with the following configurations:
```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
7. Create **webpack.config.js** file with the following configurations:
```

/**
 * Require necessary plugins
 */
const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

/**
 * Instantiate plugins
 */
const dotenv = new Dotenv();
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin,dotenv]
};
```
8. Create **src** folder with **index.js** **index.html** **App.js** files.

9. **index.js** should have:
```
//index.js

import React from "react";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ReactDOM from "react-dom";

const Index = () => {
  return <BrowserRouter> <App /></BrowserRouter>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
```
10. **index.html** should have:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>React + bootstrap + Webpack4 + axios</title>
  
  <!-- Include boostrap css-->
  <link rel="stylesheet" type="text/css" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
</head>
<body>
  <section id="index"></section>
</body>
</html>
```

11. **App.js** should have:
```
// App.js
// 
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

/**
 * Load components
 */
import Create from './components/Create';
import Edit   from './components/Edit';
import List   from './components/List';

class App extends Component {
  render() { 
    return (
      <Router basename={process.env.BASE_DIR}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'}  className="navbar-brand">Simple Boilerplate(React+webpack+babel+axios+bootstrap)</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link to={'/'} className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to={'/create'} className="nav-link">Create</Link></li>
                <li className="nav-item"><Link to={'/list'} className="nav-link">List</Link></li>
              </ul>
              <hr />
            </div>
          </nav> <br />
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/list' component={ List } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
```
12. Create **components** folder with **Axios.js** **Create.js** **List.js** **Edit.js** **TableRow.js** files.

13. **Axios.js** should have:
```
//Axios.js

import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost/simple_webpack_boilerplate-master/api/`
});
```
14. **Create.js** should have:
```
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

        Axios.post('insert.php', serverport)
        .then(res => console.log(res.data.msg));
        //console.log(`name is ${this.state.name} and port is ${this.state.port}`);
        
        this.setState({
            name: '',
            port: ''
        });
    }

    render() {
       return (
            <div style={{marginTop: 50}}>
                <h3>Add New Server</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Host Name:  </label>
                        <input type="text" className="form-control" value={this.state.name}  onChange={this.onChangeHostName}/>
                    </div>
                    <div className="form-group">
                        <label>Add Server Port: </label>
                        <input type="text" className="form-control" value={this.state.port}  onChange={this.onChangePort}/>
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

15. **List.js** should have:
```
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
```

16. **Edit.js** should have:
```
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
```

17. **TableRow.js** should have:
```
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
```
18. Create **api** folder with **connect.php** **display.php** **insert.php** **delete.php** **edit.php** **update.php**files.
19. **connect.php** should have:
```
<?php
$con = mysqli_connect("localhost","root","","reactdb");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
?>
```

20. **display.php** should have:
```
<?php 
include 'connect.php';
$myArray = array();
if ($result = mysqli_query($con,"SELECT * FROM server")) {

    while($row = mysqli_fetch_assoc($result)) {
            $myArray[] = $row;
    }
    echo json_encode($myArray);
}

$result->close();
$con->close();
?>
```
21. **insert.php** should have:
```
<?php 
include 'connect.php';

$_POST = json_decode(file_get_contents("php://input"),true);

if(isset($_POST["name"]) && isset($_POST["port"])){
    $sql = "INSERT INTO server(name,port)VALUES ('".$_POST["name"]."','".$_POST["port"]."')";

  if (mysqli_query($con, $sql)) {
     echo json_encode([
      "msg" => "New record created successfully"
     ]);
  } else {
      echo json_encode([
      "msg" => "Error inserting record"
     ]);
  }
  $con->close();
}
?>
```
22. **delete.php** should have:
```
<?php 
include 'connect.php';

if(isset($_GET["id"])){
    $sql = "DELETE FROM server WHERE id='".$_GET['id']."'";

  if (mysqli_query($con, $sql)) {
     echo json_encode([
      "msg" => "record successfully delted"
     ]);
  } else {
      echo json_encode([
      "msg" => "Error deleting record"
     ]);
  }
  $con->close();
}
?>
```
23. **edit.php** should have:
```
<?php 
include 'connect.php';
if ($result = mysqli_query($con,"SELECT * FROM server WHERE id='".$_GET['id']."'")) {

    $row =  mysqli_fetch_object($result);
    echo json_encode($row);
}

$result->close();
$con->close();
?>
```
24. **update.php** should have:
```
<?php 
include 'connect.php';

$_POST = json_decode(file_get_contents("php://input"),true);

if(isset($_GET["id"]) && isset($_POST["name"]) && isset($_POST["port"])){
    $sql = "UPDATE server SET name='".$_POST['name']."', port='".$_POST['port']."' WHERE id='".$_GET['id']."'";

  if (mysqli_query($con, $sql)) {
     echo json_encode([
      "msg" => "Record updated successfully"
     ]);
  } else {
      echo json_encode([
      "msg" => "Error updating record"
     ]);
  }
  $con->close();
}
?>
```

25. Create **.gitignore** file and input **/node_modules/** and **/dist**.

26. Create **.env** file, for development base folder add **BASE_DIR='react-boiler-plate/'** , for production folder change to **BASE_DIR='react-boiler-plate/dist/'**

27. Create database **reactdb** and table **server** then import
```
-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 24, 2019 at 04:20 AM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `server`
--

CREATE TABLE `server` (
  `id` int(10) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `port` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `server`
--
ALTER TABLE `server`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `server`
--
ALTER TABLE `server`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
```

# Screenshots
1. Create page <br />
![Alt text](/screenshots/create-page.png "Optional Title")

2. List Page <br />
![Alt text](/screenshots/list-page.png "Optional Title")

3. Edit page <br />
![Alt text](/screenshots/edit-page.png "Optional Title")

4. Allow-Control-Allow-Origin chrome plugin <br />
![Alt text](/screenshots/cors-policy-plugin-enabled.png "Optional Title")
