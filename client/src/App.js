import {Route, Switch} from "react-router-dom";
import './App.css';

import Welcome from './components/Welcome/Welcome'
import Library from "./components/Library/Library";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/" exact component={Welcome}/>
            <Route path="/library" component={Library}/>
        </Switch>
    </div>
  );
}

export default App;
