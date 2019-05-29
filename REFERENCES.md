# Setup
```
1. OS version     : Ubuntu 18.04.2 LTS

2. npm --version  : 6.8.0

3. npx --version  : 10.2.0

4. yarn --version : 1.15.2
```

# ES6 ECMASCRIPT2015 or javascript6
## BASIC:
	1. https://www.w3schools.com/js/js_es6.asp
	2. https://codeburst.io/es6-tutorial-for-beginners-5f3c4e7960be

## SETUP WITH BABEL:
	1. http://ccoenraets.github.io/es6-tutorial/setup-babel/

# React JS useful resources

## TODO BASIC: 
	1. https://medium.freecodecamp.org/crud-using-react-41d047224e26

## YOUTUBE INTRO: 
	2. https://www.youtube.com/watch?v=S66rHpyU-Eg

## REACT ROUTER:
	1. https://www.sitepoint.com/react-router-v4-complete-guide/
	
## AXIOS BASIC:
	1. https://alligator.io/react/axios-react/
	2. https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/
	3. https://appdividend.com/2018/05/30/react-axios-tutorial-example-from-scratch/

## DEPLOYMENT:
	1. https://facebook.github.io/create-react-app/docs/deployment

## REACT LIFECYCLE METHODS

```
componentWillMount()
set the initial state in the constructor
render()
componentDidMount()
setState()
render()

reference: https://www.codingame.com/playgrounds/8747/react-lifecycle-methods-render-and-componentdidmount
```

## REACT BASIC
	1. https://www.w3schools.com/whatis/whatis_react.asp
	2. https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4
	3. https://www.techomoro.com/how-to-install-and-setup-a-react-app-on-ubuntu-18-04-1/


# Reactjs boilerplate
1. https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75

# Other resources tutorial

## What is `async` and `wait`
1. https://javascript.info/async-await

## GraphQL
1. https://graphql.org/ 
2. https://www.robinwieruch.de/react-with-graphql-tutorial/

## Basic of React using `FETCH`
1. https://www.robinwieruch.de/react-fetching-data/
2. https://www.truecodex.com/course/react-js/crud-4-create-insert-delete-update-in-react-js-using-api


## Form Validation libary resources example
```
https://github.com/dockwa/simple-react-validator
https://www.npmjs.com/package/formsy-react
https://www.npmjs.com/package/react-validation
https://github.com/selbekk/calidation
https://jaredpalmer.com/formik/
```

## CSS frameworks
```
https://reactstrap.github.io/
https://react-bootstrap.github.io/getting-started/introduction
http://react-toolbox.io
https://onsen.io/
https://ant.design/
https://material-ui.com/
https://react.foundation/
```

## CSS FRAMEWORKS: 
```
https://www.codeinwp.com/blog/react-ui-component-libraries-frameworks/
```
## ACL example
```
https://www.npmjs.com/package/@casl/react
https://github.com/stalniy/casl-react-example
https://stalniy.github.io/casl/abilities/2017/07/20/define-abilities.html
```


# Common issues encountered

1. Fixing the "cannot GET /URL" error on refresh with React Router and Reach Router (or how client side routers work)
 	- https://tylermcginnis.com/react-router-cannot-get-url-refresh/
 	SOLUTION: added devServer: { historyApiFallback: true, } in webpack.config.js

2. (CORS policy issue) Access to XMLHttpRequest at 'http://localhost/simple_webpack_boilerplate-master/api/display.php' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
 	- https://medium.com/@nabil6391/avoid-cors-requests-for-a-react-app-2988e0061c1a
 	SOLUTION : install browsers cors plugin
