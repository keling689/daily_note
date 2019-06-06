[TOC]



# 封装Vue公共组件步骤

> 前言

需要：`node.js `环境 和  `vue-cli@2.0`版本的

分为三部分

1. `Vue`封装组件-配置文件
2. `Npm`打包上传
3. 在`Vue`中使用

### 1.`Vue`封装组件-配置文件

#### 1.1初始化

> 在你任意文件夹内打开命令行，输入此条命令

```
vue init webpack-simple <project-name>//这个是项目文件名可以不写默认当前文件夹
```

`<project-name>`这个是项目文件名可以不写,默认当前文件夹

> 回车后有以下选项

`Project name (test1)`项目名称括号里的是你的文件名,直接回车默认你写的文件名

` Project description( A Vue.js project)` 项目介绍默认括号里的

`Author (wuguoxing <www.961369201@qq.com>)`作者默认括号里的

` License MIT`验证单位回车就好了

`Use sass? (y/N)`No就好了(需要用的Yes)  sass样式预处理

```
webpack-simple 是一个精简版写插件专用
```

然后`cd `到刚刚的文件夹执行`npm install`完了之后就`npm run dev`启动项目

#### 1.2编写组件

``` 

`src`下创建一个文件夹随便叫什么我这里叫`lib`放组件源码
`lib`下创建一个`index.js`文件作为入口文件
组件的位置随便写,这里不再说明怎么写组件
最主要的是`index.js`配置

```

> `index.js`详解

```javascript
引入组件
import firstNav  from './first_Nav/first_Nav'
import secondNav  from './second_Nav/second_Nav'
import company_tree  from './company_tree/company_tree'
import dialog_company_member  from './dialog_company_member/dialog_company_member'
import informationCue  from './informationCue/informationCue'
import informationEdit  from './informationEdit/informationEdit'
import publicCrumbs  from './publicCrumbs/publicCrumbs'
                                               ^
                                               ^
#这里要敲黑板~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|这里的名字对应你组件里的name属性



const components = {
  #安装组件
  install(Vue) {
                    #名字       组件
    Vue.component('first-Nav',firstNav)
    Vue.component('second-Nav',secondNav)
    Vue.component('company-tree',company_tree)
    Vue.component('dialog-company-member',dialog_company_member)
    Vue.component('informationCue',informationCue)
    Vue.component('informationEdit',informationEdit)
    Vue.component('publicCrumbs',publicCrumbs)
  }
}
#这里必写
if(typeof window !== "undefined" && window.Vue) {
  window.Vue.use(components)
}
#暴露给调用者
export default components
```

> `webpack.config.js` 配置

```json
#入口,改成你当时写的入口文件即可
entry: './src/lib/index.js',
#出口
output: {
    #这个不用管
    path: path.resolve(__dirname, './dist'),
#资源打包的基础路径,不用管
    publicPath: '/dist/',
#指定打包出来的名称
    filename: 'ComponentPublicCompany.min.js',
#指定的就是你使用require时的模块名
    library: "ComponentPublicCompany",
#libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
    libraryTarget: "umd",
#会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
    umdNamedDefine: true

  },
```

> `package.json`配置

```json
{
  "name": "component-public-company",
  "description": "A Vue.js project",
  "version": "2.1.0",
  "author": "wuguoxing <www.961369201@qq.com>",
  "license": "MIT",
#组件包是否是私有组件  
  "private": false,
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
  },
#main结点，如果不配置，我们在其他项目中就不用import XX from '包名'来引用了，只能以包名作为起点来指定相对的路径
  "main": "dist/ComponentPublicCompany.min.js",
  "dependencies": {
    "vue": "^2.5.11"
  },
#指定打包后发布到npm的文件名，没指定则不传，package.json是默认上传的
  "files": [
    "dist",
    "src/lib"
  ],
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ],
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-env": "^1.6.0",
    "babel-preset-stage-3": "^6.24.1",
    "cross-env": "^5.0.5",
    "css-loader": "^0.28.7",
    "element-ui": "^2.8.2",
    "file-loader": "^1.1.4",
    "vue-loader": "^13.0.5",
    "vue-template-compiler": "^2.4.4",
    "webpack": "^3.6.0",
    "webpack-dev-server": "^2.9.1"
  }
}
```

#### 1.3 `npm pack` 测试

> 1.首先要`npm run build`

```
会生成一个`dist`文件底下只有一个`[name你自定义的]`.js文件
```

>2.`npm pack`

```
会生成一个[name(这个是package.json里的name)].tgz
```

>3.在一个vue项目中引用

```
终端上--npm install I:\Project\Component\nav\ComponentPublicCompany-1.2.0.tgz
#绝对路径
```

> 4.项目引用

```javascript
#跟Elementui一样
import 名称 from ‘组件库名’
#如果有样式文件也是一样
import '组件库名/lib/css/...css'
Vue.use(名称)；
```

> 如果测试可用那就进入第二步

### 2.`Npm`打包上传

#### 2.1`npm `仓库转换

```javascript
#这一段是设置npm库的
npm config set registry <url>
#npm 官网的库地址,也是默认的
https://registry.npmjs.org/.
#公司内网的库
http://192.168.49.140:8081/repository/koronnpm/
#怎么查看自己的npm是那个库
npm config ls
```

#### 2.2登录`npm`

```javascript
#这是登录指令
npm login
#这里的登录是跟npm库挂钩的
#官网的要去注册激活邮箱
#内网的的账号是
********** ^.^
#需要写3项
Username:
Password:
Email:
#成功登录返回
Logged in as [用户名] on [npm库地址]

```

#### 2.3上传`npm`包

```javascript
npm publish
#打包会把你写在package.json文件里的 files字段地下的文件上传到库里
```

> 注意: 每次更新要改一下在package文件里的版本号,
>
> 或者`npm version patch`  这是把版本迭代一级，每次更新时都需要输入这个命令，
>
> 还有就是如果改了组件逻辑要重新运行`npm run build`

### 3.在`Vue`中使用

#### 3.1安装包

```javascript
#跟Element-ui一样
npm install component-public-company
```



#### 3.2使用

```javascript
#跟Elementui一样
import 名称 from ‘组件库名’
#如果有样式文件也是一样
import '组件库名/lib/css/...css'
Vue.use(名称)；
#然后在任何组件都可以用了
```

# 使用公司内部公共组件

#### 1.先切换到内部`npm`库

```
npm config set registry http://192.168.49.140:8081/repository/koronnpm/
```

#### 2.项目文件夹内`npm`

```
npm install component-public-company
```

#### 3.在项目中引用

```
import companyComponents from 'component-public-company'
import 'component-public-company/src/lib/css/allStyle.css'
Vue.use(companyComponents)
```

#### 4.组件名称

```html
#一级导航
<first-Nav>
#二级导航
<second-Nav>
#组织树
<company-tree>
#组织人员弹出框
<dialog-company-member>   
#二次确认框
<informationCue>
#信息修改框
<informationEdit>
#面包屑
<publicCrumbs>
```

