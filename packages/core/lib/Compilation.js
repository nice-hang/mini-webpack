const fs = require('fs');
const path = require('path');

const Module = require('./Module');
const Parser = require('./Parser');
const Generator = require('./Generator');
const Resolver = require('./Resolver');

class Compilation {
  constructor(compiler) {
    this.compiler = compiler;
    this.modules = [];
    this.chunks = [];
    this.assets = {};
    this.parser = new Parser();
    this.generator = new Generator();
    this.resolver = new Resolver();
  }

  // 编译过程的主要逻辑
  async build() {
    // 1. 从入口开始解析模块
    const entryModule = await this.buildModule(this.compiler.options.entry);
    this.modules.push(entryModule);
    
    // 2. 递归构建依赖模块
    for (let i = 0; i < this.modules.length; i++) {
      const module = this.modules[i];
      const dependencies = module.dependencies || [];
      for (const dep of dependencies) {
        const depModule = await this.buildModule(dep);
        this.modules.push(depModule);
      }
    }
    
    // 3. 生成代码
    const code = this.generateCode();
    return code;
  }
  
  async buildModule(modulePath) {
    const source = fs.readFileSync(modulePath, 'utf-8');
    const module = new Module({
      type: 'javascript',
      request: modulePath,
      resource: modulePath
    });
    
    // 解析模块
    await module.parse(source, this.parser);
    
    return module;
  }
  
  generateCode() {
    // 简单实现：将所有模块代码合并
    let code = '';
    for (const module of this.modules) {
      code += module.source + '\n';
    }
    return code;
  }
}

module.exports = Compilation;