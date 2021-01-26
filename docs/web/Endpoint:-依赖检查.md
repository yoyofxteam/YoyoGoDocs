## 健康检查终结点
使用**Endpoints.UseViz** 可以为应用程序及路由添加健康检查的Endpoint用于Http输出应用状态  

## 实例
```golang
func main() {
    YoyoGo.CreateDefaultBuilder(func(rb router.IRouterBuilder) {
        endpoints.UseViz(rb)
    }).Build().Run()       //默认端口号 :8080	
}
```

## 访问地址
1.  输出依赖图   :  /actuator/graph?type=viz   
2.  依赖图字符串 :  /actuator/graph

## 返回值
### type=viz返回值
![](https://mnur-prod-public.oss-cn-beijing.aliyuncs.com/0/tech/20200727183717.png)
### 默认返回值 
```dot
digraph  {
	subgraph cluster_s4 {
		ID = "cluster_s4";
		bgcolor="#E8E8E8";color="lightgrey";fontcolor="#46494C";fontname="COURIER";label="";style="rounded";
		n7[color="#46494C",fontcolor="white",fontname="COURIER",label="*di.Graph",shape="box",style="filled"];
		n6[color="#46494C",fontcolor="white",fontname="COURIER",label="di.Extractor",shape="box",style="filled"];
		
	}subgraph cluster_s0 {
		ID = "cluster_s0";
		bgcolor="#E8E8E8";color="lightgrey";fontcolor="#46494C";fontname="COURIER";label="";style="rounded";
		n1[color="#46494C",fontcolor="white",fontname="COURIER",label="*Abstractions.ApplicationLife",shape="box",style="filled"];
		
	}subgraph cluster_s3 {
		ID = "cluster_s3";
		bgcolor="#E8E8E8";color="lightgrey";fontcolor="#46494C";fontname="COURIER";label="";style="rounded";
		n5[color="#46494C",fontcolor="white",fontname="COURIER",label="*contollers.UserController[usercontroller]",shape="box",style="filled"];
		
	}subgraph cluster_s2 {
		ID = "cluster_s2";
		bgcolor="#E8E8E8";color="lightgrey";fontcolor="#46494C";fontname="COURIER";label="";style="rounded";
		n3[color="#46494C",fontcolor="white",fontname="COURIER",label="*models.UserAction",shape="box",style="filled"];
		n4[color="#2589BD",fontcolor="white",fontname="COURIER",label="models.IUserAction",style="filled"];
		
	}subgraph cluster_s1 {
		ID = "cluster_s1";
		bgcolor="#E8E8E8";color="lightgrey";fontcolor="#46494C";fontname="COURIER";label="";style="rounded";
		n2[color="#46494C",fontcolor="white",fontname="COURIER",label="*Context.HostEnvironment",shape="box",style="filled"];
		
	}splines="ortho";
	n3->n4[color="#949494"];
	n4->n5[color="#949494"];
}
```