(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{383:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("Github开源："),a("a",{attrs:{href:"https://github.com/yoyofx/yoyogo",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/yoyofx/yoyogo"),a("OutboundLink")],1),t._v(" 还请多多Star")]),t._v(" "),a("p",[t._v("之前简单介绍了"),a("a",{attrs:{href:"https://www.cnblogs.com/maxzhang1985/p/12981989.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("YoyoGo微服务框架"),a("OutboundLink")],1),t._v("的基本内容，接下来了解下框架中的基本概念。")]),t._v(" "),a("h2",{attrs:{id:"从一个简单web服务demo出发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从一个简单web服务demo出发"}},[t._v("#")]),t._v(" 从一个简单Web服务Demo出发")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    YoyoGo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateDefaultBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router Router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IRouterBuilder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HttpContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 支持Group方式")]),t._v("\n            ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("H"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ok"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认端口号 :8080")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"框架基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#框架基本概念"}},[t._v("#")]),t._v(" 框架基本概念")]),t._v(" "),a("h2",{attrs:{id:"_1-hostbuilder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-hostbuilder"}},[t._v("#")]),t._v(" 1.HostBuilder")]),t._v(" "),a("p",[t._v("HostBuilder本身是一个抽象概念(类)，可以衍生出多种"),a("strong",[t._v("HostBuilder")]),t._v("。\n比如：Web Host Builder , RPC Host Builder , General Host Builder等等。\n上面的代码用"),a("strong",[t._v("CreateDefaultBuilder")]),t._v("函数，创建的就是一个默认的"),a("strong",[t._v("WebHostBuilder")]),t._v("，既然是WebHostBuilder那默认最重要的函数，那当然是用于Http路由的声明路由函数。HostBuilder本身包含了很多定义程序生命周期的函数：")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("UseConfiguration")]),t._v("  : 用于定义配置文件")]),t._v(" "),a("li",[a("strong",[t._v("Configure")]),t._v("         : 用于定义ApplicationBuilder,它是管理程序如何构建的一组方法")]),t._v(" "),a("li",[a("strong",[t._v("ConfigureServices")]),t._v(" : 用于定义IOC容器")]),t._v(" "),a("li",[a("strong",[t._v("OnApplicationLifeEvent")]),t._v(" : 用于定义程序生命周期的事件通知")]),t._v(" "),a("li",[a("strong",[t._v("Build")]),t._v(" : 用于生成最终可运行的Host对象")])]),t._v(" "),a("h2",{attrs:{id:"_2-applicationbuilder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-applicationbuilder"}},[t._v("#")]),t._v(" 2.ApplicationBuilder")]),t._v(" "),a("p",[t._v("如果说程序是由Host对象装载的话，Host的构造就是由ApplicationBuilder完成的。Host本身就是由ApplicationBuilder与Server共同构成的。这两个对象一一对应，ApplicationBuilder用于构造，Server用于承载具体的应用协议。比如"),a("strong",[t._v("WebHost")]),t._v("就是由WebApplicationBuilder构造并提供了"),a("strong",[t._v("ServeHTTP")]),t._v("函数，由HttpServer来承载，共同完成的。")]),t._v(" "),a("h2",{attrs:{id:"_3-routerbuilder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-routerbuilder"}},[t._v("#")]),t._v(" 3.RouterBuilder")]),t._v(" "),a("p",[a("strong",[t._v("RouterBuilder")]),t._v("是由"),a("strong",[t._v("WebApplicationBuilder")]),t._v("衍生出来的路由定义对象，用于声明GET，POST，PUT，DELETE等类型的请求处理程序。也就是说没有创建WebHostBuilder就没有WebApplicationBuilder也就没有RouterBuilder；框架本身就是支持多种Server协议的。\n路由函数定义：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("func(router *Router.RouterGroup) { }\n")])])]),a("p",[t._v('上面demo中就通过它完成了一个GET请求，并返回JSON: {"info":"ok"}.\nRouterBuilder本身还支持Group的方式，将一组API进行统一的URL定义：')]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('router.Group("/v1/api", func(router *Router.RouterGroup) {\n     router.GET("/info", GetInfo)\n     router.GET("/hello", GetHello)\n})\n')])])]),a("p",[t._v("通过以上代码将生成 /v1/api/info 和 /v1/api/hello \b两个GET请求路由地址。")]),t._v(" "),a("h2",{attrs:{id:"_4-host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-host"}},[t._v("#")]),t._v(" 4.Host")]),t._v(" "),a("p",[t._v("创建"),a("strong",[t._v("HostBuilder")]),t._v("后，通过"),a("strong",[t._v("Build")]),t._v("函数得到了最终可运行的"),a("strong",[t._v("Host")]),t._v("对象(**Build().Run() **)。 创建Host对象的同时，其实也完成了Server对象的创建，Host与Server一一对应的。Host表示了一个可运行的宿主，它负责管理整个程序的生命周期；而Server则是更为具体的服务类型，比如Http，xxRPC。Server更多是一种通讯协议上的表达。")]),t._v(" "),a("h2",{attrs:{id:"_5-定制webhostbuilder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-定制webhostbuilder"}},[t._v("#")]),t._v(" 5.定制WebHostBuilder")]),t._v(" "),a("p",[t._v("在上面的demo中，我们定义了一个默认的WebHostBuilder，但是它所支持的内容较少只提供了最基本的Host定义，那如何定制一个WebHostBuilder呢，如下例子：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('func CreateCustomBuilder() *Abstractions.HostBuilder {\n\treturn YoyoGo.NewWebHostBuilder().\n\t\tConfigure(func(app *YoyoGo.WebApplicationBuilder) {\n\t\t      app.UseEndpoints(unc(router Router.IRouterBuilder) {\n                      router.GET("/info",func (ctx *Context.HttpContext) {\n                           ctx.JSON(200, Context.M{"info": "ok"})\n                      })\n\t\t})\n}\n')])])]),a("p",[t._v("通过定制，我们可以使用完整的HostBuilder构建函数来构建应用程序。然后通过如下例子将它运行起来：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("package main\nimport ...\n\nfunc main() {\n  CreateCustomBuilder().Build().Run() //默认端口 :8080\n}\n")])])]),a("p",[a("img",{attrs:{src:"https://mnur-prod-public.oss-cn-beijing.aliyuncs.com/0/tech/20200817181043.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("至此我们介绍了YoyoGo微服务框架的基本概念： \b一个Web服务是由 WebHostBuilder -> WebApplicationBuilder -> HttpServer -> WebHost 组成。\n"),a("img",{attrs:{src:"https://mnur-prod-public.oss-cn-beijing.aliyuncs.com/0/tech/HostBuilder%E6%97%B6%E5%BA%8F%E5%9B%BE.png",alt:""}})])])}),[],!1,null,null,null);s.default=n.exports}}]);