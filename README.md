# 《代码整洁之道》中文翻译

在线阅读： <https://cactus-proj.github.io/Clean-Code-zh/>


## 前言

> *Writing clean code is what you must do in order to call yourself a professional.*
> *There is no reasonable excuse for doing anything less than your best.*

要称自己为专业人士，你必须编写整洁的代码。
不尽全力没有任何合理的借口。

## 目录

- [第 1 章 整洁代码](docs/ch1.md)
- [第 2 章 有意义的命名](docs/ch2.md)
- [第 3 章 函数](docs/ch3.md)
- [第 4 章 注释](docs/ch4.md)
- [第 5 章 格式](docs/ch5.md)
- [第 6 章 对象和数据结构](docs/ch6.md)
- [第 7 章 错误处理](docs/ch7.md)
- [第 8 章 边界](docs/ch8.md)
- [第 9 章 单元测试](docs/ch9.md)
- [第 10 章 类](docs/ch10.md)
- [第 11 章 系统](docs/ch11.md)
- [第 12 章 迭进](docs/ch12.md)
- [第 13 章 并发编程](docs/ch13.md)
- [第 14 章 逐步改进](docs/ch14.md)
- [第 15 章 JUnit 内幕](docs/ch15.md)
- [第 16 章 重构 SerialDate](docs/ch16.md)
- [第 17 章 味道与启发](docs/ch17.md)
- [附录 A 并发编程 II](docs/apA.md)


## 本地开发 & 阅读

本项目基于 VitePress 进行开发，以提供比 Github Mardown 更佳的阅读体验

依赖于 [`node.js`][nodejs]、[`vitepress`][vitepress] 等环境

[nodejs]: https://nodejs.org/zh-cn/
[vitepress]: https://vitepress.dev/zh/

```sh
git clone https://github.com/Cactus-proj/Clean-Code-zh.git
cd Clean-Code-zh/
npm install         # 安装 VitePress
npm run docs:dev    # 编译并打开网页预览
```


## License

本项目为**未授权**的翻译
- 对于书籍内容，原作者保留所有权利
- 对于中文翻译以及其他的项目文件，按照 [MIT](./LICENSE) 协议授权

NOTE: 由于是未授权翻译，中文翻译文本的版权不明确，因此本项目仅作维护性更新（保持CI可用）。
不再主动对翻译文本做出更新。
