(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{858:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"typescript里的this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript里的this"}},[t._v("#")]),t._v(" TypeScript 里的 this")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("在 JavaScript 里（还有 TypeScript）， "),a("code",[t._v("this")]),t._v("  关键字的行为与其它语言相比大为不同。这可能会很令人吃惊，特别是对于那些使用其它语言的用户，他们凭借其直觉来想象 "),a("code",[t._v("this")]),t._v("  关键字的行为。")]),t._v(" "),a("p",[t._v("这篇文章会教你怎么识别及调试 TypeScript 里的 "),a("code",[t._v("this")]),t._v("  问题，并且提供了一些解决方案和各自的利弊。")]),t._v(" "),a("h2",{attrs:{id:"典型症状和危险系数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#典型症状和危险系数"}},[t._v("#")]),t._v(" 典型症状和危险系数")]),t._v(" "),a("p",[t._v("丢失 "),a("code",[t._v("this")]),t._v("  上下文的典型症状包括：")]),t._v(" "),a("ul",[a("li",[t._v("类的某字段（ "),a("code",[t._v("this.foo")]),t._v(" ）为 "),a("code",[t._v("undefined")]),t._v(" ，但其它值没有问题")]),t._v(" "),a("li",[a("code",[t._v("this")]),t._v("  的值指向全局的 "),a("code",[t._v("window")]),t._v("  对象而不是类实例对象（在非严格模式下）")]),t._v(" "),a("li",[a("code",[t._v("this")]),t._v("  的值为 "),a("code",[t._v("undefined")]),t._v("  而不是类实例对象（严格模式下）")]),t._v(" "),a("li",[t._v("调用类方法（ "),a("code",[t._v("this.doBa()")]),t._v(" ）失败，错误信息如 “TypeError: undefined is not a function”，“Object doesn't support property or method 'doBar'” 或 “this.doBar is not a function”")])]),t._v(" "),a("p",[t._v("程序中应该出现了以下代码：")]),t._v(" "),a("ul",[a("li",[t._v("事件监听，比如 "),a("code",[t._v("window.addEventListener('click', myClass.doThing);")])]),t._v(" "),a("li",[t._v("Promise 解决，比如 "),a("code",[t._v("myPromise.then(myClass.theNextThing);")])]),t._v(" "),a("li",[t._v("第三方库回调，比如 "),a("code",[t._v("$(document).ready(myClass.start);")])]),t._v(" "),a("li",[t._v("函数回调，比如 "),a("code",[t._v("someArray.map(myClass.convert)")])]),t._v(" "),a("li",[t._v("ViewModel 类型的库里的类，比如 "),a("code",[t._v('<div data-bind="click: myClass.doSomething">')])]),t._v(" "),a("li",[t._v("可选包里的函数，比如 "),a("code",[t._v("$.ajax(url, { success: myClass.handleData })")])])]),t._v(" "),a("h2",{attrs:{id:"javascript里的this究竟是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript里的this究竟是什么"}},[t._v("#")]),t._v(" JavaScript 里的 "),a("code",[t._v("this")]),t._v("  究竟是什么？")]),t._v(" "),a("p",[t._v("已经有大量的文章讲述了 JavaScript 里 "),a("code",[t._v("this")]),t._v("  关键字的危险性。查看"),a("a",{attrs:{href:"http://www.quirksmode.org/js/this.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("，"),a("a",{attrs:{href:"http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("，或"),a("a",{attrs:{href:"http://bjorn.tipling.com/all-this",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("当 JavaScript 里的一个函数被调用时，你可以按照下面的顺序来推断出 "),a("code",[t._v("this")]),t._v("  指向的是什么（这些规则是按优先级顺序排列的）：")]),t._v(" "),a("ul",[a("li",[t._v("如果这个函数是 "),a("code",[t._v("function#bind")]),t._v("  调用的结果，那么 "),a("code",[t._v("this")]),t._v("  指向的是传入 "),a("code",[t._v("bind")]),t._v("  的参数")]),t._v(" "),a("li",[t._v("如果函数是以 "),a("code",[t._v("foo.func()")]),t._v("  形式调用的，那么 "),a("code",[t._v("this")]),t._v("  值为 "),a("code",[t._v("foo")])]),t._v(" "),a("li",[t._v("如果是在严格模式下， "),a("code",[t._v("this")]),t._v("  将为 "),a("code",[t._v("undefined")])]),t._v(" "),a("li",[t._v("否则， "),a("code",[t._v("this")]),t._v("  将是全局对象（浏览器环境里为 "),a("code",[t._v("window")]),t._v(" ）")])]),t._v(" "),a("p",[t._v("这些规则会产生与直觉相反的效果。比如：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x is '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prints 'x is 3' as expected")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use the class method in an object literal")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" z "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("print "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prints 'x is 10'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prints 'x is undefined'")]),t._v("\n")])])]),a("h2",{attrs:{id:"this的危险信号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this的危险信号"}},[t._v("#")]),t._v(" "),a("code",[t._v("this")]),t._v("  的危险信号")]),t._v(" "),a("p",[t._v("你要注意的最大的危险信号是_在要使用类的方法时没有立即调用它_。任何时候你看到类方法被_引用了_却没有使用相同的表达式来_调用_时， "),a("code",[t._v("this")]),t._v("  可能已经不对了。")]),t._v(" "),a("p",[t._v("例子：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printThing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SAFE, method is invoked where it is referenced")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("printThing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DANGER, invoking 'y()' may not have correct 'this'")]),t._v("\n\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("printThing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DANGER, method is not invoked where it is referenced")]),t._v("\n\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printThing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SAFE, method is invoked in the same expression")]),t._v("\n")])])]),a("h2",{attrs:{id:"修复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复"}},[t._v("#")]),t._v(" 修复")]),t._v(" "),a("p",[t._v("可以通过一些方法来保持 "),a("code",[t._v("this")]),t._v("  的上下文。")]),t._v(" "),a("h3",{attrs:{id:"使用实例函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用实例函数"}},[t._v("#")]),t._v(" 使用实例函数")]),t._v(" "),a("p",[t._v("代替 TypeScript 里默认的_原型_方法，你可以使用一个_实例箭头函数_来定义类成员：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blah"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("run")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <-- note syntax here")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ready")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SAFE, 'run' will always have correct 'this'")]),t._v("\n")])])]),a("ul",[a("li",[t._v("好与坏：这会为每个类实例的每个方法创建额外的闭包。如果这个方法通常是正常调用的，那么这么做有点过了。然而，它经常会在回调函数里调用，让类实例捕获到 "),a("code",[t._v("this")]),t._v("  上下文会比在每次调用时都创建一个闭包来得更有效率一些。")]),t._v(" "),a("li",[t._v("好：其它外部使用者不可能忘记处理 "),a("code",[t._v("this")]),t._v("  上下文")]),t._v(" "),a("li",[t._v("好：在 TypeScript 里是类型安全的")]),t._v(" "),a("li",[t._v("好：如果函数带参数不需要额外的工作")]),t._v(" "),a("li",[t._v("坏：派生类不能通过使用 "),a("code",[t._v("super")]),t._v("  调用基类方法")]),t._v(" "),a("li",[t._v("坏：在类与用户之前产生了额外的非类型安全的约束：明确了哪些方法提前绑定了以及哪些没有")])]),t._v(" "),a("h3",{attrs:{id:"本地的胖箭头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地的胖箭头"}},[t._v("#")]),t._v(" 本地的胖箭头")]),t._v(" "),a("p",[t._v("在 TypeScrip 里（这里为了讲解添加了一些参数） :")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SomeClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("someCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("好与坏：内存 / 效能上的利弊与实例函数相比正相反")]),t._v(" "),a("li",[t._v("好：在 TypeScript，100% 的类型安全")]),t._v(" "),a("li",[t._v("好：在 ECMAScript 3 里同样生效")]),t._v(" "),a("li",[t._v("好：你只需要输入一次实例名")]),t._v(" "),a("li",[t._v("坏：你要输出 2 次参数名")]),t._v(" "),a("li",[t._v("坏：对于可变参数不起作用（'rest'）")])]),t._v(" "),a("h3",{attrs:{id:"function-bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#function-bind"}},[t._v("#")]),t._v(" Function.bind")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SomeClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SAFE: Functions created from function.bind are always preserve 'this'")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("someMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("好与坏：内存 / 效能上的利弊与实例函数相比正相反")]),t._v(" "),a("li",[t._v("好：如果函数带参数不需要额外的工作")]),t._v(" "),a("li",[t._v("坏：目前在 TypeScript 里，不是类型安全的")]),t._v(" "),a("li",[t._v("坏：只在 ECMAScript 5 里生效")]),t._v(" "),a("li",[t._v("坏：你要输入 2 次实例名")])])])}),[],!1,null,null,null);s.default=e.exports}}]);