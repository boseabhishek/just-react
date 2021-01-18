# just-react

## setup

[instructions for following along locally using your preferred text editor
](https://reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment)

## What Is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

## How it works?

```js

// ShoppingList is a React component class, or React component type.
//
// We use `components` to tell React what we want to see on the screen.
// When our data changes, React will efficiently update and re-render our components.
//
// `props` are "params" to `components`
//
// The `render` method returns a description of what you want to see on the screen
// That description is called a `React element`
class ShoppingList extends React.Component {
  render() {
    // You can put any JavaScript expressions within braces 
    // inside JSX
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />

```
**All JSX code btw** :point_up_2:

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


## Bookmark (to be removed)

