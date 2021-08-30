import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import WelcomeClass from './WelcomeClass';
import FunctionalComponent from './FunctionalComponent';

function App() {

  const element = <h2> This JSX(or pseudo-html)</h2>;
  const character = 'bart';
  const simpsons = <h2> homer, lisa, marge, maggie, {character} </h2>;
  return (
    <div>
      
      <h1>Hello from React!</h1>
        <Welcome name="Levar Burton"/>
        <WelcomeClass name="Jimmy"/>
        {element}
        {simpsons}
        <FunctionalComponent name="Jeff"/>
        
    </div>
  );
}

export default App;


// {
  
//   <div className="App">/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */
    
//     </div>}