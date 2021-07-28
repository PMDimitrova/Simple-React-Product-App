import {Route, Switch} from "react-router-dom";
import './App.css';

import Welcome from './components/Welcome/Welcome'
import Library from "./components/Library/Library";
import InputForm from "./components/InputForm/InputForm";
import EditBook from "./components/EditBook/EditBook";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/" exact component={Welcome}/>
            <Route path="/library" component={Library}/>
            <Route path="/add-book" component={InputForm}/>
            <Route path="/edit-book" component={EditBook}/>
        </Switch>
    </div>
  );
}

export default App;
