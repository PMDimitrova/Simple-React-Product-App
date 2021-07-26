import {Route, Switch} from "react-router-dom";
import './App.css';

import Welcome from './components/Welcome/Welcome'
import ProductsPage from "./components/ProductsPage/ProductsPage";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/" exact component={Welcome}/>
            <Route path="/products" component={ProductsPage}/>
        </Switch>
    </div>
  );
}

export default App;
