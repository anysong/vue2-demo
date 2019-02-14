# vue2-demo
vue2 新特性
==============
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
    默认就可以添加重复数据
    去掉了隐式变量 $index
    1.0: v-for="(index), item) in list"
    2.0: v-for="(item, index) in list"
