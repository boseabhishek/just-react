# React in depth

## Elements
Elements are the smallest building blocks of React apps.
An element describes what you want to see on the screen:

```js 
const element = <h1>Hello, world</h1>;
```

This above element represeents DOM tags

Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

To render the above element into the root DOM node (We call this a “root” DOM node because everything inside it will be managed by React DOM.) as below:

> <div id="root"></div>

pass the elemnt, to ReactDOM.render():

```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

### features:
1. *React elements are immutable* . Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

---

## Components and Props

`Components` let you split the UI into *independent, reusable pieces and think about each piece in isolation* 

They are like JS functions.

```
               |---------------|
  ---props---> |   component   | ---elements--->
               |---------------|
```

**Two ways to declare a component: (both gets a prop and returns an element)**

1. As a `functional component`
```js
// see Welcome starts with a capital letter
// to make it a component to be called from an element
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

```
2. Using **ES6 class** to define a component:
```js

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

*The above two components are equivalent from React’s point of view.*

### Rendering a component:

```js
const element = <Welcome name="Sara" />;
// calls the function Welcome above
```

Just like elements representing DOM tags, elements can also represent user-defined components (very similar to like in Java returning an instance of a class) - `Welcome` here

See example of component `Welcometo` in [index.js](index.js)

### Composing components

See how we use `<App />` inside [index.js](index.js) where we compose `Welcometo` inside `App`.

> **Tips for migration or startup:** Typically, new React apps have a single App component at the very top. However, if you integrate React into an existing app, you might start bottom-up with a small component like Button and gradually work your way to the top of the view hierarchy.

### Splitting/Extracting Components

See how we use `<Title />` inside [index.js](index.js) where we extract `Title` out of `App` for cleaner and resuable DRY functions.

See how we call 'Title(props)` with `title` and `name` as below:
```js
function App() {
    return (
        <div>
            <Welcometo title="Learning React" name="Hello club 1" />
            ...
            ...
        </div>
    );
}
```
and, being used in:
```js
function Welcometo(props) {
    return (
        <div>
            <Title data={props.title} />
            ...
            ...
        </div>
    );
}
```
and, calls:
```js
function Title(props) {
    return <title>Title is {props.data}</title>;
}
```
### Props are Read-Only

**Immutability - All React components must act like `pure functions` with respect to their props, whether declared as a class or a function**

<NEXT

https://reactjs.org/docs/state-and-lifecycle.html>