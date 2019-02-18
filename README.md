# vue2-demo
vue2 新特性 第五章
=========================
1 在每个组件模板,不再支持片段代码
     template: '<h4>222</h4><h4>222</h4>' //不再支持
     template: '<div><h4>222</h4><h4>222</h4></div>' //必须有一个根元素,包裹所有节点

2 关于组件定义
    Vue.extend 这种方式,在2.0有一些改动. (不推荐)
    Vue.component(组件名,{}) //仍然可用
    2.0新定义方式,直接写json 
    var Home = {
        template: '<h4>222</h4>'
    }
    全局: Vue.component('Home',Home);
    局部: new Vue({
        components: {
            Home
        }
    })

3 生命周期
    init            => beforeCreate  组件刚刚被创建
    created         => created       实例已经创建完成
    beforeCompile   => beforeMount   模版编译之前
    compiled        => x
    ready           => mounted       模版已经编译完成 *
                        beforeUpdate  组件更新之前
                        updated       组件更新完毕 *
    beforeDestroy   => beforeDestroy 组件销毁前
    destroyed       => destroyed     组件销毁后

4 2.0循环
    1 默认就可以添加重复数据
    2 去掉了隐式变量 $index
    3 1.0: v-for="(index, value) in list"
      2.0: v-for="(value, index) in list"
    4 track-by 变成 => :key    

5 自定义键盘指令
    1.0 Vue.directive('on').keyCodes.ctrl = 17 //directive 没了
    2.0 Vue.config.keyCodes.ctrl = 17

6 过滤器
    2.0 删除了所有内置过滤器
    推荐用lodash 工具库

7 自定义过滤器
    1.0 自定义过滤器传参 {{msg|toDou '12' '5'}}
    2.0 自定义过滤器传参 {{msg|toDou(12,5)}}

8 组件通信
    去掉 $broadcast
    去掉 $dispatch
    去掉.sync
    1.0 子组件可以修改父组件信息,可以是同步 sync
    2.0 子组件不允许直接给父组件数据赋值
        但是,父级每次传递一个对象给子级,可以修改

9 单一事件中心管理组件通信
    准备一个空的实例对象 
    var Event = new Vue();
    Event.$emit('事件名', 数据)
    Event.$on('事件名', function(){

    }.bind(this))

vue2 动画 第六章
=========================
1 transition动画
    1.0 transition 属性 <p transition="fade"></p>
    2.0 transition 组件 
    <transition>
        <p></p> //只能第一层元素
    </transition>

    class定义:
    fade-enter{}        -> 初始状态
    fade-enter-active{} -> 变化成什么样 (当元素显示) 

    fade-leave{}        -> 
    fade-leave-active{} -> 变换成什么样 (当元素消失)
    动画只能加在active

    事件
    @before-enter 动画进入之前
    @enter        动画进入
    @after-enter  动画进入之后
    @before-leave 动画离开之前
    @leave        动画离开
    @after-leave  动画离开之后

2 如何配合 animate.css
    <transition enter-active-class="animated bounceInLeft"
                leave-active-class="animated bounceOutRight">
        <div v-show="show"></div>
    </transition>
3 多个元素 transition-group
     <transition-group>
        <p :key="1"></p>
        <p :key="2"></p>
    </transition-group>



vue2 路由 第六章
=========================
1 <router-link to="/home">主页</router-link>
2 <router-view></router-view>
3 配置路由
    var routes = [
        {path:'/home', component: Home},
        {path:'/news', component: News}
    ]
4 生成路由实例
    var router = new VueRouter({
        routes
    })
5 挂载vue
    new Vue({
        el:'#box',
        router
    })
6 重定向
    {path:'*', redirect: Home},
7 路由嵌套
    var routes = [
        {
            path:'/user', 
            component: User,
            children: [
                {path:'username', component: UserName}
            ]
        }
    ]
8 路由实例方法
    router.push({path:'home'}) 切换路由,本质往历史记录里添加一个
    router.replace({path:'news'}) 替换路由,不添加到历史记录
-------------------------
脚手架: vue-cli
    1.0 
        new Vue({
            components: {App}
        })
    2.0
        new Vue({
            render: h =>h(App)     
        })
    用render方法,相比较components: {App},不需要在html内写 <app></app>组件
    //es6
    new Vue({
        render: (function (h) {
            return h(App);
        });    
    })

vue2 Element-UI && Mint-ui 第七章
=========================


vue2 Vue.use 第八章
=========================