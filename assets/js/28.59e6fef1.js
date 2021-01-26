(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{387:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"prometheus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prometheus"}},[t._v("#")]),t._v(" Prometheus")]),t._v(" "),a("p",[a("strong",[t._v("Prometheus")]),t._v("是一个非常棒的工具，结合"),a("strong",[t._v("grafana")]),t._v("能够让我在不写代码，或者少写代码的情况下搭建一套有效的监控体系。这里介绍一下"),a("strong",[t._v("Prometheus")]),t._v("监控"),a("strong",[t._v("golang")]),t._v("程序的方式。")]),t._v(" "),a("h2",{attrs:{id:"golang-服务程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#golang-服务程序"}},[t._v("#")]),t._v(" Golang 服务程序")]),t._v(" "),a("p",[a("strong",[t._v("Golang")]),t._v("的Web程序，我使用了"),a("strong",[t._v("YoyoGo")]),t._v("框架，"),a("a",{attrs:{href:"https://www.cnblogs.com/maxzhang1985/p/12981989.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《 YoyoGo基于ASP.NET Core设计的Golang实现 》"),a("OutboundLink")],1),t._v(" 可以查看这篇文章进行了解。 最新也发布了最新的"),a("strong",[t._v("v1.5.0")]),t._v("版本，下面"),a("strong",[t._v("Prometheus")]),t._v("接口就是这个版本的新功能。\n想要程序能够被监控，就必须要将程序运行中的各项目指标暴露出来，提供给"),a("strong",[t._v("Promtheus")]),t._v("进行信息采集，当然"),a("strong",[t._v("Prometheus")]),t._v("也提供push的方式，本例中将使用拉的方式。我们可以使用"),a("strong",[t._v("Prometheus")]),t._v("提供的"),a("strong",[t._v("golang")]),t._v("客户端暴露自身的运行时信息。代码例子如下:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tYoyoGo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/yoyofx/yoyogo/web"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/yoyofx/yoyogo/web/context"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/yoyofx/yoyogo/web/endpoints"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tYoyoGo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateDefaultBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rb router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IRouterBuilder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tEndpoints"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UsePrometheus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t\trb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HttpContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ok"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://mnur-prod-public.oss-cn-beijing.aliyuncs.com/0/tech/20200811104839.png",alt:""}})]),t._v(" "),a("p",[t._v("访问本地的8080端口就能看到监控的指标,这里监控的都是默认指标，当然你可以可以自定义你需要的量化的指标，然后暴露出来，这里就不多介绍了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://mnur-prod-public.oss-cn-beijing.aliyuncs.com/0/tech/20200811104756.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"配置-prometheus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-prometheus"}},[t._v("#")]),t._v(" 配置 Prometheus")]),t._v(" "),a("p",[t._v("在"),a("a",{attrs:{href:"https://prometheus.io/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prometheus官网"),a("OutboundLink")],1),t._v("下载后，我们来配置下 "),a("strong",[t._v("Prometheus")]),t._v("，让它为我们采集的Golang服务程序的监控指标：")]),t._v(" "),a("p",[a("strong",[t._v("prometheus.yml")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'golang'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scrape_interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10s\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metrics_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /actuator/metrics\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("static_configs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost:8080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("启动 "),a("strong",[t._v("Prometheus")]),t._v(" ：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("prometheus.exe\n")])])]),a("p",[t._v("启动Promethues等待10s，Golang指标就会被采集到Promethues的时序数据库中了，访问 http://localhost:9090/ 得到如下效果")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://mnur-prod-public.oss-cn-beijing.aliyuncs.com/0/tech/20200811110139.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"grafana"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grafana"}},[t._v("#")]),t._v(" Grafana")]),t._v(" "),a("p",[t._v("在"),a("a",{attrs:{href:"https://grafana.com/grafana/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grafana官网"),a("OutboundLink")],1),t._v("下载后，接下来就是把这些指标在grafana图形化展示出来：")]),t._v(" "),a("p",[t._v("启动"),a("strong",[t._v("Grafana")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./grafana-server\n")])])]),a("p",[t._v("进入http://localhost:3000/ 后，配置数据源 "),a("strong",[t._v("DataSource")]),t._v("，Dashboard直接使用了官方插件 "),a("strong",[t._v("10826")]),t._v(" 导入这个ID后，最后展示出来的效果如下:\n"),a("img",{attrs:{src:"https://mnur-prod-public.oss-cn-beijing.aliyuncs.com/0/tech/20200811110440.png",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);