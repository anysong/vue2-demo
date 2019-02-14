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
    局部: components: {Home}
    
3 生命周期