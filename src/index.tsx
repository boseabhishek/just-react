import ReactDOM from 'react-dom';

// importing `App` component 

// N.B. As App has been an export default,
// you can rename it inside the imported file
import A from './App';

ReactDOM.render(<A />, document.querySelector('#root'))
