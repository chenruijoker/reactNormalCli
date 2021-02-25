# React web 脚手架

> 此脚手架优先为新华书店脚手架服务【开源需经作者许可】

-   master 分支下为标准 React 脚手架，提供完整的 react 方案
-   router 分支下脚手架仅支持 router
-   redux 分支下脚手架仅支持 redux （沿用的内容为 reacthook 体系）
-   empty-template 分支下为纯 React 脚手架,无任何的外置 npm 包（不包含 ajax、axios）

## 基本介绍

-   yarn install 安装 npm 包
-   yarn start 自动运行
-   yarn build 生成成果物

## 目录解释

```
src
|--assert    存放静态文件（svg、jpg等）
|--component  存放前端组件
|   |--common 存放公共组件地方，存放形式和示例组件一致（考虑到不同的组件均会使用某个公共的小组件）
|   |--Hello    示例组件
|       |--index.jsx
|       |--index.scss
|--api
|   |--index.js 可进行api的配置（已经封装好功能，教程看下方开发规范或者示例demo即可）
|--tool
|   |--A.js 示例取名文件，若有一些组件共用同个功能，则可抽离出来放在此处
```

## 开发规范注意点

-   请注意，该脚手架基于 react 17 版本，作者建议使用函数组件模式进行开发
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
-   补充示例 demo
