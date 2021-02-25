# React web 脚手架

> 此脚手架优先为新华书店脚手架服务【开源需经作者许可】

-   master 分支下为纯 React 脚手架
-   router-redux 分支下脚手架支持 router 和 redux

## 基本介绍

-   yarn start 自动运行
-   yarn build 生成成果物

## 开发规范注意点

-   每个 jsx 文件头部最好书写成

```javascript
import * as React from "react";
```

其目的是为了能够规范使用 react hook,建议书写成

```javascript
import * as React from "react";

const { useEffect, useMemo } = React;
```

-   最好使用 scss 进行样式开发（考虑到像是许多组件公用一套主题色的问题）
-   scss 的样式规范跟着 dom 树结构走（防止样式污染）
    如

```html
<div className="A">
    <div className="B">
        <div className="C"></div>
    </div>
</div>
```

则 scss 中需要写成

```sass
.A{
    .B{
        .C{}
    }
}
```

## 脚手架可拓展的地方

> 此处仅提醒脚手架开发者需要增拓部分，脚手架使用者可自动忽略

-   command 终端交互
-   考虑 shellJS 或者 commandJS 进行配置化模板复用
-   repoJS 补充
-   后期搭建测试 mock 体系时，建立测试环境接口
-   补充移动端脚手架
