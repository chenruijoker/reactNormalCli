import axios from "axios";

export function Request(
    method = "get",
    url,
    data = null,
    baseURL = null,
    timeout = 2000
) {
    return new Promise((resolve, reject) => {
        axios({
            baseURL: !!baseURL ? baseURL : "http://172.30.145.128:8800/", // 可修改基础域名,当然，支持部分api自定义baseURL
            method: method,
            url,
            timeout,
            data,
        })
            .then((res) => {
                resolve(res.data);
            })
            .catch((res) => {
                reject();
            });
    });
}
