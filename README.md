# mini-webpack

一个轻量级的webpack实现，具备核心打包能力。

## 当前功能
- ✅ 基础JavaScript模块打包（入口→输出）

## 待实现功能
1. **配置文件解析与环境配置**: 支持 `mini-webpack.config.js`，区分开发与生产环境。
2. **Loader 机制**: 建立 Loader 管道，用于处理 CSS、图片等非 JavaScript 资源，并集成 Babel 以支持 JSX/ESNext。
3. **Plugin 插件系统**: 设计并实现插件架构，允许开发者通过插件扩展打包能力，例如 `HtmlWebpackPlugin`。
4. **Dev Server**: 提供一个开发服务器，并实现模块热替换（HMR）以提升开发体验。
5. **代码分割与动态导入**: 支持 `import()` 语法，实现按需加载，优化应用性能。
6. **性能优化**: 包括缓存（内容哈希）、Tree Shaking（摇树优化）和代码压缩等高级功能。
