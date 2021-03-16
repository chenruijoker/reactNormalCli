import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import Img from "./asserts/example.jpg";
import Selector from "./pages/Selector";
import Tutorial from "./pages/Tutorial";

function App() {
    return (
        <div className="page">
            <div className="hello">
                <img src={Img} className="img" />
                <div className="text">欢迎使用脚手架</div>
                <div className="text2">请根据实际开发删除对应的文件和文件夹，本脚手架既是教手架也是示例项目</div>
                <Switch>
                    <Route path="/index" exact component={Selector} />
                    <Route path="/routerTutorial" component={Tutorial}/>
                    <Redirect exact to="/index" from="/" />
                </Switch>
            </div>
        </div>
    );
}

export default App;
