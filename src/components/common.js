
const formatName = (user) => user.firstName + ' ' + user.lastName;

const Greetings = (user = 'stranger') => <p>Nomoshkar, {formatName(user)}!</p>;

export default Greetings
