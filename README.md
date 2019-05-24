# React + babel + bootstrap + Webpack4 + axios
A ready to use simple boilerplate crud demonstration using babel, bootstrap, webpack4 and axios.

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
  - list-page.png
db/
  - server.sql
api/
  - connect.php
  - display.php
  - insert.php
src/
  components/
    - Axios.js
    - Create.js
    - List.js
    - TableRow.js
  App.js
  index.html
  index.js
.babelrc
.gitignore
package.json
webpack.config.js
REFERENCES.md
```
## Instructions

1.  Clone this repo and put inside `htdocs`
2.  Run `sudo npm install`
3.  Run `sudo npm start`, **localhost:8080** will open up in your default browser
4.  Start xampp server and create database with name **server** and import `server.sql`
5.  Install **Allow-Control-Allow-Origin:** chrome plugin and enable resource sharing
6.  Run `sudo npm build`, it will create **dist** for your production deployment

**If you prefer to install things yourself you can follow the instructions below**

1. Create folder **react-boiler-plate**
2.  Run `sudo npm init` and type your answers to the questions or you can run `sudo npm init -y` to say yes to every question - you will get default settings
3.  Install the following dependencies:
```
sudo npm i react react-dom -S
```
4.  Install the following dev dependencies:
```
1. sudo npm i babel-core babel-loader babel-preset-env babel-preset-react css-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server -D

2. sudo npm install bootstrap react-router-dom axios --save 
```
5. Update your **package.json** `scripts` with the following:
```
"start": "webpack-dev-server --mode development --open",
"build": "webpack --mode production"
```
6. Create **.babelrc** file with the following configurations:
```
{
  "presets": ["env", "react"]
}
```
7. Create **webpack.config.js** file with the following configurations:
```
const HtmlWebPackPlugin = require("html-webpack-plugin");

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
  plugins: [htmlWebpackPlugin]
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

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './components/Create';
import List from './components/List';

class App extends Component {
  render() { 
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Simple Boilerplate(React+webpack+babel+axios+bootstrap)</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link to={'/create'} className="nav-link">Create</Link></li>
                <li className="nav-item"><Link to={'/list'} className="nav-link">List</Link></li>
              </ul>
              <hr />
            </div>
          </nav> <br />
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/list' component={ List } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
```
12. Create **components** folder with **Axios.js** **Create.js** **List.js** **TableRow.js** files.

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
// Index.js

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
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Port</td>
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

16. **TableRow.js** should have:
```
// TableRow.js

import React, { Component } from 'react';

class TableRow extends Component {
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
        </tr>
    );
  }
}

export default TableRow;
```
17. Create **api** folder with **connect.php** **display.php** **insert.php** files.
18. **connect.php** should have:
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

19. **display.php** should have:
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
20. **insert.php** should have:
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

21. Create **.gitignore** file and input **/node_modules/** and **/dist**.

22. Create database **reactdb** and table **server** then import
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

3. Allow-Control-Allow-Origin chrome plugin <br />
![Alt text](/screenshots/cors-policy-plugin-enabled.png "Optional Title")
