import ReactDOM from 'react-dom';

import PropTypes from "prop-types";

const formatName = (user) => user.firstName + ' ' + user.lastName;

const greetings = (user = 'stranger') => <p>Nomoshkar, {formatName(user)}!</p>;

function Title(props) {
    return <title>Title is {props.data}</title>;
}


// see Welcometo starts with a capital letter
// to make it a component to be called from an element
function Welcometo(props) {
    return (
        <div>
            <Title data={props.title} />
            <h1>Welcome to {props.name}</h1>
            <h2>{greetings(user)}</h2>
        </div>
    );
}


Welcometo.propTypes = {
    name: PropTypes.string.isRequired, // must be a string and defined
    title: PropTypes.string.isRequired, // must be a string and defined
};

const user = {
    firstName: 'Abhishek',
    lastName: 'Bose'
};

// N.B NOT used anymore, being replaced by App() as below
const element = <Welcometo name="Yuva Bharati Krirangan" />;

function App() {
    return (
        <div>
            <Welcometo title="Learning React" name="Hello club 1" />
            <Welcometo title="Learning React" name="Hello club 2" />
            <Welcometo title="Learning React" name="Hello club 3" />
        </div>
    );
}

ReactDOM.render(
    // element, // can directly use greet(user) here
    <App />,
    document.getElementById('root')
);
