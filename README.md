# just-react

## Setup

[instructions for following along locally using your preferred text editor
](https://reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment)

## What Is React?

React is a declarative, efficient, and flexible **JavaScript library** for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

**For theory on React anatomy/React in depth, please see [React in Depth](docs/mds/react-in-depth.md)**

## If it's a library, how and where do we use it?

Short answer: *Inside .js file we write a mix of JSX and JS(ES6 or even prior) code*, code by importing.

Long answer:

This below is a JSX code inside the `HelloWorld` component.


```js
import React from 'react';
import ReactDOM from 'react-dom';
 
class HelloWorld extends React.Component {
    render() {
        // JSX start
          return (
                  <div>
                    Hello, React!
                  </div>
                )
        }
        // JSX end
};
 
ReactDOM.render(<HelloWorld />, document.getElementById('root'));
```

See above, in the ES6 file (saved as index.js), `React` and `ReactDOM` are imported from `react` and `react-dom` libraries respectively. And, then, they are used to render some UI stuff on a targeted html page on a html tag with id = "root".


For more on **ES6**, see [here](https://github.com/boseabhishek/just-about-javascript/blob/main/README.md#i-keep-on-hearing-about-es6-whats-the-fuss--all-about)


### What is JSX?

 It's HTML, but in our JS... with JS inside the HTML For more, see [here](https://reactjs.org/docs/introducing-jsx.html)

Most React developers use a special syntax called “JSX” which makes these structures easier to write. The <div /> syntax is transformed at build time to React.createElement('div'). The above JSX part in teh component gets transformed to React `createElement()` using Babel as below:

```js

class HelloWorld extends React.Component {
  render() {
    // JSX start
    return /*#__PURE__*/React.createElement("div", null, "Hello, React!");
  } // JSX end
};

```

### Some more xample on how Babel transforms JSX into JS

Babel compiles JSX down to React.`createElement()` calls.

```js
const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );
```
gets transformed to..

```js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
); 
```
`React.createElement()` performs a few checks to help you write bug-free code but essentially it creates an object like this:

```js
// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.

## Fun Facts

:coffee:    **Fact 1: Old school JS VS ReactJS create element**

```js
React.createElement('div'
```

is quite similar to what you do in JS DOM manipulation using 
```js
document.createElement('div');
```

:coffee:    **Fact 2: Where's the connection between index.html and index.js in a Create-React-App application?**


https://stackoverflow.com/questions/42438171/wheres-the-connection-between-index-html-and-index-js-in-a-create-react-app-app


## Resources:

1. Great book on React can be found here for free. [Vumbula React](docs/Vumbula_React.pdf)



