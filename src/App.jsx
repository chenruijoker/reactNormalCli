import "./App.scss";
import Hello from "./component/Hello";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
    return (
        <div>
            <Switch>
                <Route path="/index" exact component={Hello} />
                <Redirect exact to="/index" from="/" />
            </Switch>
        </div>
    );
}

export default App;
