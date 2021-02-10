"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
// importing components from components 
var common_1 = require("./components/common");
var user = {
    firstName: 'Abhishek',
    lastName: 'Bose'
};
// see Welcometo starts with a capital letter
// to make it a component to be called from an element
var Welcometo = /** @class */ (function (_super) {
    __extends(Welcometo, _super);
    function Welcometo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Welcometo.prototype.render = function () {
        return (<div>
                <common_1.Title data={this.props.title}/>
                <h1>Welcome to {this.props.name}</h1>
                <h2>{common_1.Greetings(user)}</h2>
            </div>);
    };
    return Welcometo;
}(react_1.Component));
Welcometo.propTypes = {
    name: prop_types_1.default.string.isRequired,
    title: prop_types_1.default.string.isRequired,
};
// To export a single component in ES6, 
// you can use export default as follows
exports.default = Welcometo;
// or, export class Welcometo extends Component above
