(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{824:function(t,e,s){"use strict";s.r(e);var a=s(20),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"typescript-2-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-2-5"}},[t._v("#")]),t._v(" TypeScript 2.5")]),t._v(" "),s("h2",{attrs:{id:"可选的catch语句变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可选的catch语句变量"}},[t._v("#")]),t._v(" 可选的 "),s("code",[t._v("catch")]),t._v("  语句变量")]),t._v(" "),s("p",[t._v("得益于"),s("a",{attrs:{href:"https://github.com/tinganho",target:"_blank",rel:"noopener noreferrer"}},[t._v(" @tinganho"),s("OutboundLink")],1),t._v(" 所做的工作，TypeScript 2.5 实现了一个新的 ECMAScript 特性，允许用户省略 "),s("code",[t._v("catch")]),t._v("  语句中的变量。 例如，当使用 "),s("code",[t._v("JSON.parse")]),t._v("  时，你可能需要将对应的函数调用放在 "),s("code",[t._v("try")]),t._v("  /  "),s("code",[t._v("catch")]),t._v("  中，但是最后可能并不会用到输入有误时会抛出的 "),s("code",[t._v("SyntaxError")]),t._v(" （语法错误）。")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" input "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ^ 注意我们的 `catch` 语句并没有声明一个变量")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"传入的 JSON 不合法\\n\\n"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"checkjs-ts-check-模式中的类型断言-转换语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#checkjs-ts-check-模式中的类型断言-转换语法"}},[t._v("#")]),t._v(" "),s("code",[t._v("checkJs")]),t._v(" / "),s("code",[t._v("@ts-check")]),t._v("  模式中的类型断言 / 转换语法")]),t._v(" "),s("p",[t._v("TypeScript 2.5 引入了在"),s("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/5158",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用纯 JavaScript 的项目中断言表达式类型"),s("OutboundLink")],1),t._v("的能力。对应的语法是 "),s("code",[t._v("/** @type {...} */")]),t._v("  标注注释后加上被圆括号括起来，类型需要被重新演算的表达式。举例:")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** @type {SomeType} */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AnyParenthesizedExpression"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"包去重和重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包去重和重定向"}},[t._v("#")]),t._v(" 包去重和重定向")]),t._v(" "),s("p",[t._v("在 TypeScript 2.5 中使用 "),s("code",[t._v("Node")]),t._v('  模块解析策略进行导入时，编译器现在会检查文件是否来自 "相同" 的包。如果一个文件所在的包的 '),s("code",[t._v("package.json")]),t._v("  包含了与之前读取的包相同的 "),s("code",[t._v("name")]),t._v("  和 "),s("code",[t._v("version")]),t._v(" ，那么 TypeScript 会将它重定向到最顶层的包。这可以解决两个包可能会包含相同的类声明，但因为包含 "),s("code",[t._v("private")]),t._v("  成员导致他们在结构上不兼容的问题.")]),t._v(" "),s("p",[t._v("这也带来一个额外的好处，可以通过避免从重复的包中加载 "),s("code",[t._v(".d.ts")]),t._v("  文件减少内存使用和编译器及语言服务的运行时计算.")]),t._v(" "),s("h2",{attrs:{id:"preservesymlinks-保留符号链接-编译器选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preservesymlinks-保留符号链接-编译器选项"}},[t._v("#")]),t._v(" "),s("code",[t._v("--preserveSymlinks")]),t._v(" （保留符号链接）编译器选项")]),t._v(" "),s("p",[t._v("TypeScript 2.5 带来了 "),s("code",[t._v("preserveSymlinks")]),t._v("  选项，它对应了"),s("a",{attrs:{href:"https://nodejs.org/api/cli.html#cli_preserve_symlinks",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Node.js 中  "),s("code",[t._v("--preserve-symlinks")]),t._v("  选项"),s("OutboundLink")],1),t._v("的行为。这一选项也会带来和 Webpack 的 "),s("code",[t._v("resolve.symlinks")]),t._v("  选项相反的行为（也就是说，将 TypeScript 的 "),s("code",[t._v("preserveSymlinks")]),t._v("  选项设置为 "),s("code",[t._v("true")]),t._v("  对应了将 Webpack 的 "),s("code",[t._v("resolve.symlinks")]),t._v("  选项设为 "),s("code",[t._v("false")]),t._v(" ，反之亦然）。")]),t._v(" "),s("p",[t._v("在这一模式中，对于模块和包的引用（比如 "),s("code",[t._v("import")]),t._v("  语句和 "),s("code",[t._v('/// <reference type=".." />')]),t._v("  指令）都会以相对符号链接文件的位置被解析，而不是相对于符号链接解析到的路径。更具体的例子，可以参考"),s("a",{attrs:{href:"https://nodejs.org/api/cli.html#cli_preserve_symlinks",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Node.js 网站的文档"),s("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);e.default=r.exports}}]);