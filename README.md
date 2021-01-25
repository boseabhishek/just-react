# just-react

## Setup

[instructions for following along locally using your preferred text editor
](https://reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment)

## What Is React?

React is a declarative, efficient, and flexible **JavaScript library** for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

## If it's a library, how and wher do we use it?

Short answer: Inside JS code by importing.

Long answer:

This below is a JS code (or more specifically ES6 or ES2015 code). For more info on **ES6**, see [here](https://github.com/boseabhishek/just-about-javascript/blob/main/README.md#i-keep-on-hearing-about-es6-whats-the-fuss--all-about)

```js
import React from 'react';
import ReactDOM from 'react-dom';
 
class HelloWorld extends React.Component {
    render() {
          return (
                  <div>
                    Hello, React!
                  </div>
                )
        }
};
 
ReactDOM.render(<HelloWorld />, document.getElementById('root'));
```

See above, in the ES6 file (saved as index.js), `React` and `ReactDOM` are imported from `react` and `react-dom` libraries respectively. And, then, they are used to render some UI stuff on a targeted html page on a html tag with id = "root".

> For theory on React anatomy, please follow [here](docs/mds/react-in-depth.md)


Most React developers use a special syntax called “JSX” which makes these structures easier to write. The <div /> syntax is transformed at build time to React.createElement('div'). The example above is equivalent to:

```js

return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);

```

See [this](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=DwEwlgbgBAxgNgQwM5IHIILYFMC8AiJACwHsAHUsAOwHMBaOMJAFzwD4AoKKYQgRlYDKJclWpQAMoyZQAZsQBOUAN6l5ZJADpKmLAF9gAej4cuwAK5wTXbg1YBJSswTV5mQ7c7XgtgOqEETEgAguTuYFamtgDyMBZmSGFWhhYchuAQrADc7EA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.12.12&externalPlugins=) link to find out how it works.

:coffee:    **Fact 1# JS and ReactJS**

```js
React.createElement('div'
```

is quite similar to what you do in JS DOM manipulation using 
```js
document.createElement('div');
```

## Where's the connection between index.html and index.js in a Create-React-App application?

https://stackoverflow.com/questions/42438171/wheres-the-connection-between-index-html-and-index-js-in-a-create-react-app-app

## What hepens to JSX code inside a React app?

Babel compiles JSX down to React.createElement() calls.

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




