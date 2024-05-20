import { Switch, Route } from "react-router-dom/cjs/react-router-dom.js";
import "./App.css";
import Home from "./components/Homepage/Home.jsx";
import Order from "./components/Orderpage/Order.jsx";
import Success from "./components/Success/Success.jsx";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
