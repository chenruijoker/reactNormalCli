import * as React from "react";
import "./index.scss";
import Img from "../../assert/example.jpg";

function Hello() {
    return (
        <div className="page">
            <div className="hello">
                <img src={Img} className="img" />
                <div className="text">欢迎使用</div>
            </div>
        </div>
    );
}

export default Hello;
