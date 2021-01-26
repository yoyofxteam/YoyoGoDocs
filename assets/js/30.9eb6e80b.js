(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{390:function(t,a,s){"use strict";s.r(a);var n=s(42),p=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"pprof-支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pprof-支持"}},[t._v("#")]),t._v(" pprof 支持")]),t._v(" "),s("p",[t._v("在 golang 官方包中有一个 pprof 包专门用来做性能分析； 该工具能方便的对我们的程序进行 内存，goroutine，cpu 进行分析； 使用该包时会有几个 http 接口暴露出来； 为了接入方便，YoyoGo框架已经进行了封装，通过配置文件即可开启或关闭性能分析接口。")]),t._v(" "),s("h1",{attrs:{id:"快速使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速使用"}},[t._v("#")]),t._v(" 快速使用")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("YoyoGo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateDefaultBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rb router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IRouterBuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Endpoints"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UsePprof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\trb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/info"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HttpContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("M"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"info"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ok"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("功能开启后，我们启动项目，可以通过访问 http://127.0.0.1:8080/debug/pprof/ 来查看性能分析页面； 通过 go tool 工具还能将相关的性能指标生成 svg 查看；")]),t._v(" "),s("h1",{attrs:{id:"分析接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析接口"}},[t._v("#")]),t._v(" 分析接口")]),t._v(" "),s("ul",[s("li",[t._v("CPU 分析：http://127.0.0.1.1:8080/debug/pprof/profile")]),t._v(" "),s("li",[t._v("Goroutine 阻塞事件：http://127.0.0.1.1:8080/debug/pprof/block")]),t._v(" "),s("li",[t._v("活跃的 Goroutine：http://127.0.0.1.1:8080/debug/pprof/goroutine")]),t._v(" "),s("li",[t._v("堆内存分类分析：http://127.0.0.1.1:8080/debug/pprof/heap")]),t._v(" "),s("li",[t._v("互斥锁分析：http://127.0.0.1.1:8080/debug/pprof/mutex")]),t._v(" "),s("li",[t._v("系统线程分析：http://127.0.0.1.1:8080/debug/pprof/threadcreate")])]),t._v(" "),s("h1",{attrs:{id:"生成-svg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成-svg"}},[t._v("#")]),t._v(" 生成 svg")]),t._v(" "),s("p",[t._v("通过如下命令可以将 cpu 分析结果保持到一个 svg 文件中")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("go tool pprof -svg -output ./cpu.svg http://127.0.0.1.1:8080/debug/pprof/profile\n")])])]),s("p",[t._v("另外，也可以将相应的分析结果源文件保存到本地后进行svg生成，以实现自动化程序调用等功能。 例如，我们将 http://127.0.0.1.1:8080/debug/pprof/profile 地址请求到的文件保存到本地 ./profile 文件，然后我们可以通过如下命令来转换成 svg 格式")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("go tool pprof -svg -output ./profile .svg ./profile \n")])])]),s("h3",{attrs:{id:"use-the-pprof-tool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-the-pprof-tool"}},[t._v("#")]),t._v(" Use the pprof tool")]),t._v(" "),s("p",[t._v("Then use the pprof tool to look at the heap profile:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("go tool pprof http://localhost:8080/debug/pprof/heap\n")])])]),s("p",[t._v("Or to look at a 30-second CPU profile:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("go tool pprof http://localhost:8080/debug/pprof/profile\n")])])]),s("p",[t._v("Or to look at the goroutine blocking profile, after calling runtime.SetBlockProfileRate in your program:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("go tool pprof http://localhost:8080/debug/pprof/block\n")])])]),s("p",[t._v("Or to collect a 5-second execution trace:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" http://localhost:8080/debug/pprof/trace?seconds"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=p.exports}}]);