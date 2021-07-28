import {Route, Switch} from "react-router-dom";
import './App.css';

import Welcome from './components/Welcome/Welcome'
import Bookshelf from "./components/Bookshelf/Bookshelf";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/" exact component={Welcome}/>
            <Route path="/bookshelf" component={Bookshelf}/>
        </Switch>
    </div>
  );
}

export default App;
