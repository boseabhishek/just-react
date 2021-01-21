import ReactDOM from 'react-dom';

// importing `App` component 
import App from './App';
import Welcometo from './Welcome';

ReactDOM.render(
    // element, // can directly use greet(user) here
    <App />,
    document.getElementById('root')
);
