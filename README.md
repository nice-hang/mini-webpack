# mini-webpack

一个轻量级的webpack实现，具备核心打包能力。

## 当前功能
- ✅ 项目核心架构搭建（Compiler, Compilation, Module等核心类）

## 待实现功能
1. **配置文件支持**: 支持 `mini-webpack.config.js` 配置文件。
4. **Loader 机制完善**: 建立完整的Loader管道，支持链式调用和异步处理。
3. **Plugin 插件系统**: 设计并实现插件架构，允许开发者通过插件扩展打包能力。
5. **Dev Server 与热更新**: 提供一个开发服务器，并实现模块热替换（HMR）以提升开发体验。
6. **代码分割与动态导入**: 支持 `import()` 语法，实现按需加载，优化应用性能。
7. **性能优化**: 包括缓存（内容哈希）、Tree Shaking（摇树优化）和代码压缩等高级功能。

## 项目架构

```
packages/core/
├── lib/                          # 核心库
│   ├── Compiler.js              # 编译器主类
│   ├── Compilation.js           # 编译实例
│   ├── Module.js                # 模块基类
│   ├── Parser.js                # 解析器
│   ├── Generator.js             # 代码生成器
│   └── Resolver.js              # 模块解析器
├── loaders/                     # 内置加载器
│   ├── javascript-loader.js     # JS加载器
│   └── css-loader.js           # CSS加载器
├── plugins/                     # 内置插件
│   ├── DefinePlugin.js         # 定义插件
│   └── HtmlPlugin.js           # HTML插件
├── templates/                   # 代码模板
│   ├── runtime.js              # 运行时模板
│   └── chunk.js                # 块模板
├── bin/                        # CLI工具
│   └── mini-webpack.js         # 命令行入口
├── test/                       # 测试文件
│   ├── unit/                   # 单元测试
│   ├── integration/            # 集成测试
│   └── fixtures/               # 测试用例
```

所有核心类均已创建，为后续功能实现奠定了基础。
