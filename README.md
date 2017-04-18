# ReactTutorial01
## Based on the [scotch.io](https://scotch.io/tutorials/learning-react-getting-started-and-concepts) tutorials

*All code hand-transcribed from the tutorial or from [React Start Kit](https://facebook.github.io/react/downloads/react-15.0.1.zip) except for vendor and minified files; code may be altered or extended from the original*

## NOTES AND QUESTIONS
* **NOTE** that JSXTransform is no longer supported by Facebook and has been deprecated since 2015.  They recommend using Babel instead.
* **WHAT** are the pros and cons of using the old style `var MyComponent = React.createClass();` syntax as in this tutorial as opposed to the more ES6-y 
  ```javascript
  class myComponent extends React.Component {}
  ```
  ?
  - **A:** for a quick-and-dirty rundown, see [here](https://toddmotto.com/react-create-class-versus-component/).  Meanwhile, in the interest of time the older style will be used for this tutorial.
* **WHAT** are the differences between setting up React modules and Angular ones?  Do I need something like the `index.js` file to tell the server where to go for what? 
  - **A:** see [this repo](https://github.com/cfpdx-401d5/class-work/tree/master/week06_front-end-SPA/mar02_react-components/hello-react) for an example setup...
  - ...and then start over using [Create React App](https://github.com/facebookincubator/create-react-app)!

## TERMS AND CONCEPTS
* **props:** data object containing dynamic values to be updated when component does so
* **lifecycle methods:**
  - `componentWillMount()`:  called once client- and server-side just before component mounts
  - `componentDidMount()`: called once immed. after component mounts
  - `shouldComponentUpdate()`: returns true if compent needs to be updated
  - `componentWillUnmount()`: called just before unmounting -- believe it or not
* **specs:**
  - `render()`:  only spec actually necessary for creating a component
  - `getInitialState()`:  returns initial value of state
  - `getDefaultProps()`: sets default props if none supplied
  - `mixins()`: array of objs used to extend current component
* **state:** data object containing static values to be supplied for props in order to represent the state of a component at a given time
  - **NOTE** that `getInitialState` and `setState()` should be used to determine and update component state actively
