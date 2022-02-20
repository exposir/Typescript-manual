(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{806:function(t,s,a){"use strict";a.r(s);var e=a(20),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"三斜线指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三斜线指令"}},[t._v("#")]),t._v(" 三斜线指令")]),t._v(" "),a("p",[t._v("三斜线指令是包含单个 XML 标签的单行注释。 注释的内容会做为编译器指令使用。")]),t._v(" "),a("p",[t._v("三斜线指令_仅_可放在包含它的文件的最顶端。 一个三斜线指令的前面只能出现单行或多行注释，这包括其它的三斜线指令。 如果它们出现在一个语句或声明之后，那么它们会被当做普通的单行注释，并且不具有特殊的涵义。")]),t._v(" "),a("h2",{attrs:{id:"reference-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-path"}},[t._v("#")]),t._v(" "),a("code",[t._v('/// <reference path="..." />')])]),t._v(" "),a("p",[a("code",[t._v('/// <reference path="..." />')]),t._v("  指令是三斜线指令中最常见的一种。 它用于声明文件间的_依赖_。")]),t._v(" "),a("p",[t._v("三斜线引用告诉编译器在编译过程中要引入的额外的文件。")]),t._v(" "),a("p",[t._v("当使用 "),a("code",[t._v("--out")]),t._v("  或 "),a("code",[t._v("--outFile")]),t._v("  时，它也可以做为调整输出内容顺序的一种方法。 文件在输出文件内容中的位置与经过预处理后的输入顺序一致。")]),t._v(" "),a("h3",{attrs:{id:"预处理输入文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预处理输入文件"}},[t._v("#")]),t._v(" 预处理输入文件")]),t._v(" "),a("p",[t._v("编译器会对输入文件进行预处理来解析所有三斜线引用指令。 在这个过程中，额外的文件会加到编译过程中。")]),t._v(" "),a("p",[t._v("这个过程会以一些_根文件_开始； 它们是在命令行中指定的文件或是在 "),a("code",[t._v("tsconfig.json")]),t._v("  中的 "),a("code",[t._v('"files"')]),t._v("  列表里的文件。 这些根文件按指定的顺序进行预处理。 在一个文件被加入列表前，它包含的所有三斜线引用都要被处理，还有它们包含的目标。 三斜线引用以它们在文件里出现的顺序，使用深度优先的方式解析。")]),t._v(" "),a("p",[t._v("一个三斜线引用路径是相对于包含它的文件的，如果不是根文件。")]),t._v(" "),a("h3",{attrs:{id:"错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误"}},[t._v("#")]),t._v(" 错误")]),t._v(" "),a("p",[t._v("引用不存在的文件会报错。 一个文件用三斜线指令引用自己会报错。")]),t._v(" "),a("h3",{attrs:{id:"使用-noresolve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-noresolve"}},[t._v("#")]),t._v(" 使用  "),a("code",[t._v("--noResolve")])]),t._v(" "),a("p",[t._v("如果指定了 "),a("code",[t._v("--noResolve")]),t._v("  编译选项，三斜线引用会被忽略；它们不会增加新文件，也不会改变给定文件的顺序。")]),t._v(" "),a("h2",{attrs:{id:"reference-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-types"}},[t._v("#")]),t._v(" "),a("code",[t._v('/// <reference types="..." />')])]),t._v(" "),a("p",[t._v("与 "),a("code",[t._v('/// <reference path="..." />')]),t._v("  指令相似（用于声明_依赖_）， "),a("code",[t._v('/// <reference types="..." />')]),t._v("  指令声明了对某个包的依赖。")]),t._v(" "),a("p",[t._v("对这些包的名字的解析与在 "),a("code",[t._v("import")]),t._v("  语句里对模块名的解析类似。 可以简单地把三斜线类型引用指令当做 "),a("code",[t._v("import")]),t._v("  声明的包。")]),t._v(" "),a("p",[t._v("例如，把 "),a("code",[t._v('/// <reference types="node" />')]),t._v("  引入到声明文件，表明这个文件使用了 "),a("code",[t._v("@types/node/index.d.ts")]),t._v("  里面声明的名字； 并且，这个包需要在编译阶段与声明文件一起被包含进来。")]),t._v(" "),a("p",[t._v("仅当在你需要写一个 "),a("code",[t._v("d.ts")]),t._v("  文件时才使用这个指令。")]),t._v(" "),a("p",[t._v("对于那些在编译阶段生成的声明文件，编译器会自动地添加 "),a("code",[t._v('/// <reference types="..." />')]),t._v(" ； _当且仅当_结果文件中使用了引用的包里的声明时才会在生成的声明文件里添加 "),a("code",[t._v('/// <reference types="..." />')]),t._v("  语句。")]),t._v(" "),a("p",[t._v("若要在 "),a("code",[t._v(".ts")]),t._v("  文件里声明一个对 "),a("code",[t._v("@types")]),t._v("  包的依赖，使用 "),a("code",[t._v("--types")]),t._v("  命令行选项或在 "),a("code",[t._v("tsconfig.json")]),t._v("  里指定。 查看"),a("RouterLink",{attrs:{to:"/download/zh/project-config/tsconfig.json.html#types-typeroots-and-types"}},[t._v("在 "),a("code",[t._v("tsconfig.json")]),t._v("  里使用 "),a("code",[t._v("@types")]),t._v(" ， "),a("code",[t._v("typeRoots")]),t._v("  和 "),a("code",[t._v("types")])]),t._v(" 了解详情。")],1),t._v(" "),a("h2",{attrs:{id:"reference-no-default-lib-true"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-no-default-lib-true"}},[t._v("#")]),t._v(" "),a("code",[t._v('/// <reference no-default-lib="true"/>')])]),t._v(" "),a("p",[t._v("这个指令把一个文件标记成_默认库_。 你会在 "),a("code",[t._v("lib.d.ts")]),t._v("  文件和它不同的变体的顶端看到这个注释。")]),t._v(" "),a("p",[t._v("这个指令告诉编译器在编译过程中_不要_包含这个默认库（比如， "),a("code",[t._v("lib.d.ts")]),t._v(" ）。 这与在命令行上使用 "),a("code",[t._v("--noLib")]),t._v("  相似。")]),t._v(" "),a("p",[t._v("还要注意，当传递了 "),a("code",[t._v("--skipDefaultLibCheck")]),t._v("  时，编译器只会忽略检查带有 "),a("code",[t._v('/// <reference no-default-lib="true"/>')]),t._v("  的文件。")]),t._v(" "),a("h2",{attrs:{id:"amd-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amd-module"}},[t._v("#")]),t._v(" "),a("code",[t._v("/// <amd-module />")])]),t._v(" "),a("p",[t._v("默认情况下生成的 AMD 模块都是匿名的。 但是，当一些工具需要处理生成的模块时会产生问题，比如 "),a("code",[t._v("r.js")]),t._v(" 。")]),t._v(" "),a("p",[a("code",[t._v("amd-module")]),t._v("  指令允许给编译器传入一个可选的模块名：")]),t._v(" "),a("h4",{attrs:{id:"amdmodule-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amdmodule-ts"}},[t._v("#")]),t._v(" amdModule.ts")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///<amd-module name='NamedModule'/>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这会将 "),a("code",[t._v("NamedModule")]),t._v("  传入到 AMD  "),a("code",[t._v("define")]),t._v("  函数里：")]),t._v(" "),a("h4",{attrs:{id:"amdmodule-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amdmodule-js"}},[t._v("#")]),t._v(" amdModule.js")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NamedModule"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"require"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exports"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"amd-dependency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amd-dependency"}},[t._v("#")]),t._v(" "),a("code",[t._v("/// <amd-dependency />")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("注意")]),t._v("：这个指令被废弃了。使用 "),a("code",[t._v('import "moduleName";')]),t._v("  语句代替。")])]),t._v(" "),a("p",[a("code",[t._v('/// <amd-dependency path="x" />')]),t._v("  告诉编译器有一个非 TypeScript 模块依赖需要被注入，做为目标模块 "),a("code",[t._v("require")]),t._v("  调用的一部分。")]),t._v(" "),a("p",[a("code",[t._v("amd-dependency")]),t._v("  指令也可以带一个可选的 "),a("code",[t._v("name")]),t._v("  属性；它允许我们为 amd-dependency 传入一个可选名字：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <amd-dependency path="legacy/moduleA" name="moduleA"/>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" moduleA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("MyType\nmoduleA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callStuff")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("生成的 JavaScript 代码：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"require"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exports"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"legacy/moduleA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" moduleA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    moduleA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callStuff")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);