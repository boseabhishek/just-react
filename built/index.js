"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_dom_1 = require("react-dom");
// importing `App` component 
// N.B. As App has been an export default,
// you can rename it inside the imported file
var App_1 = require("./App");
react_dom_1.default.render(<App_1.default />, document.querySelector('#root'));
