const linkA = [
    { name: "一", href: "https://reactrouter.com/web/api/Route/component" },
    { name: "二", href: "https://www.cnblogs.com/cckui/p/11490372.html" },
    { name: "三", href: "https://www.cnblogs.com/tianyamoon/p/12271712.html" },
];

function Tutorial() {
    const leapNet = (href) => {
        window.open(href);
    };

    return (
        <div>
            {linkA.map((item, index) => {
                return (
                    <div key={index} onClick={() => leapNet(item.href)}>
                        路由教程{item.name}
                    </div>
                );
            })}
        </div>
    );
}

export default Tutorial;
