# 数钱游戏
> countMoney是一个简单的HTML5版数钱游戏，整个游戏由首页、注册页、数钱页、转转盘页、游戏结果展示页、我的账户页、排行榜页、活动商户页、活动规则页和我的账户页组成，整个游戏由注册、数钱、转转盘、查看用户获得的优惠券、查看排行榜等功能。

## 项目的一些链接
**游戏地址：[http://zhsq-dswz.stor.sinaapp.com/index.html#/](http://zhsq-dswz.stor.sinaapp.com/index.html#/)**  
**游戏的视频演示地址：[http://ovfep0kq1.bkt.clouddn.com/zhsq.mp4](http://ovfep0kq1.bkt.clouddn.com/zhsq.mp4)**

## 用到的技术
- **前端：** Vue.js vue-router axios ES6 HTML5 CSS3
- **构建工具：** Webpack
- **后台：** PHP
- **数据库：** MySQL

## 项目简介
**项目描述：** 整个项目的文件由zhsqClient、zhsqServer、sql三个文件夹组成，其中zhsqClient存放网站的前端代码、zhsqServer中存放的是网站的后台代码，sql中存放的是网站的数据库文件

**zhsqClient的目录结构**

	├── build                        // Webpack配置文件                      
	├── config                       // 项目打包路径                        
	├── src       					 // 源码目录                                       
	│   ├── assets                   // 项目的资源马路                      
	│   ├── js                       // 一些常用的js脚本                           
	│   │   └── config.js            // 项目的一些配置信息                                   
	│   ├── pages                    // 网站的页面
	│   │   ├── account.vue          // 我的账户页 
	│   │   ├── countMoney.vue       // 数钱游戏页
	│   │   ├── index.vue            // 网站首页     
	│   │   ├── merchant.vue         // 活动商户页
	│   │   ├── ranking.vue          // 排行榜页
	│   │   ├── register.vue         // 注册页 
	│   │   ├── result.vue           // 结果展示页
	│   │   ├── rule.vue             // 活动规则页
	│   │ 	└── turnTable.js         // 转转盘页    
	│   ├── router                   // 存放用来设置路由
	│   │ 	└── index.js             // 项目的路由
	│   ├── App.vue                  // 页面入口文件
	│   └── index.js                 // 程序入口文件
	├── static                       // 存放一些静态文件
	│ 	├── css   					 // 存放CSS文件	
	│ 	│ 	└── reset.css            // 重置网页的样式
	│   ├── .gitkeep				 // 只是一个占位符，一个假文件
	│   └── favicon.png    			 // 网站的图标
	├── .babelrc					 // babel编译的一些配置
	├── .editorconfig    			 // 编辑器的配置
	├── .gitignore                   // 提交到git上时，忽略提交的文件和文件夹
	├── .postcssrc.js                // 自动加载配置为PostCSS  
	├── index.html                   // 入口HTML文件
	└── package.json                 // 项目的配置文件

## 运行项目

**第一步：将项目克隆到本地**  

	https://github.com/meishadevs/CountMoney.git

**第二步：进入zhsqClient目录下**  
	
	cd zhsqClient

**第三步：安装项目的依赖包**

	npm install

**第四步：运行项目**
	
	npm run dev
