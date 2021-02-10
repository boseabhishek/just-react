"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = exports.Greetings = void 0;
var formatName = function (user) { return user.firstName + ' ' + user.lastName; };
// This is just a JS function
var Greetings = function (user) {
    if (user === void 0) { user = 'stranger'; }
    return <p>Nomoshkar, {formatName(user)}!</p>;
};
exports.Greetings = Greetings;
// This is a `React Functional Component`
var Title = function (props) { return <title>Title is {props.data}</title>; };
exports.Title = Title;
//Can't use an `export default` here as too many exports here
