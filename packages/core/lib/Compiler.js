const fs = require('fs');
const path = require('path');

const Compilation = require('./Compilation');

class Compiler {
  constructor(options) {
    this.options = options;
    this.hooks = {
      // TODO: 定义生命周期钩子
    };
  }

  async run() {
    // TODO: 实现编译器主流程
    const compilation = new Compilation(this);
    return compilation.build();
  }
}

module.exports = Compiler;