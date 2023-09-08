- 在TypeScript里，只在两个类型内部的结构兼容那么这两个类型就是兼容的。 这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 implements语句。
```typescript
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
```

- 在构造函数的参数上使用public等同于创建了同名的成员变量。

- 早期收益
  现在你已经可以看到TypeScript带来的好处，它能帮助我们理解当前工程。 如果你打开像 VS Code或Visual Studio这样的编译器，你就能使用像自动补全这样的工具。 你还可以配置如下的选项来帮助查找BUG：

  noImplicitReturns 会防止你忘记在函数末尾返回值。
  
  noFallthroughCasesInSwitch 会防止在switch代码块里的两个case之间忘记添加break语句。

  TypeScript还能发现那些执行不到的代码和标签，你可以通过设置allowUnreachableCode和allowUnusedLabels选项来禁用。


- Webpack
Webpack集成非常简单。 你可以使用 ts-loader，它是一个TypeScript的加载器，结合source-map-loader方便调试。 运行：

```javascript
npm install ts-loader source-map-loader
```
并将下面的选项合并到你的webpack.config.js文件里：
```javascript
module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "./dist/bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // Other options...
};
```