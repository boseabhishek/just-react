
const formatName = (user) => user.firstName + ' ' + user.lastName;

// This is just a JS function
export const Greetings = (user = 'stranger') => <p>Nomoshkar, {formatName(user)}!</p>;

// This is a `React Functional Component`
export const Title = (props) => <title>Title is {props.data}</title>;

//Can't use an `export default` here as too many exports here