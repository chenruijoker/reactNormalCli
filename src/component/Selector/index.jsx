import { useHistory } from "react-router-dom";
function Selector() {
    const history = useHistory();

    const leap = () => {
        history.push(`/routerTutorial`);
    };
    return (
        <div>
            <div onClick={leap}>关于路由教程</div>
        </div>
    );
}

export default Selector;
