import { Request } from "./base";


// 创建请求的方式如下，具体如何在组件里面进行请求则查看readme文件
export function TestRequestA(data){
    return Request("get","testQuest",data);
}
