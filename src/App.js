import logo from './logo.svg';
import './App.css';

let name = "Maryam"

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React 
    //     </a>
    //   </header>
    // </div>
    <>
      <nav className='navbar'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      <div className='App-container'>
        <h1>{name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestiae fuga ipsum,
           sint facilis nisi iure, perspiciatis rerum omnis assumenda expedita earum! Unde numquam 
           quam eligendi eos similique nam fugit.</p>
      </div>
    </>
  );
}

export default App;
