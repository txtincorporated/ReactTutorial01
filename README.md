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
  - **A:** for a quick-and-dirty rundown, see [here](https://toddmotto.com/react-create-class-versus-component/).

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
