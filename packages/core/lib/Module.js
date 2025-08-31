const fs = require('fs');
const path = require('path');

const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

class Module {
  constructor({ type, request, resource }) {
    this.type = type;
    this.request = request;
    this.resource = resource;
    this.source = '';
    this.dependencies = [];
    this.ast = null;
  }

  // 解析模块源码
  async parse(source, parserInstance) {
    this.source = source;
    // 使用Babel解析源码为AST
    this.ast = parser.parse(source, {
      sourceType: 'module',
      plugins: [
        'jsx',
        'typescript'
      ]
    });
    
    // 分析依赖
    traverse(this.ast, {
      ImportDeclaration: ({ node }) => {
        const dirname = path.dirname(this.resource);
        const newFile = path.resolve(dirname, node.source.value);
        this.dependencies.push(newFile);
      }
    });
  }
}

module.exports = Module;