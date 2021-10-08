import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";

import './App.css';

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)


function App() {

  
  return ( 
    <BrowserRouter>
        <div className="App">
          <Main />
        </div>
    </BrowserRouter>
  );
}

export default App;
