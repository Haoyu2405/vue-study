/**
 * 组件通信
 * 场景： .vue文件 -> 传值 另外的.vue文件
 * 关系：父子关系（被引入的是子）
 * 父 -> 子
 * （1）子组件 - props变量
 * （2）父组件内 - <子组件 变量名=“值” />
 * 
 * 子 -> 父
 * （1）父组件内 - <子组件 @自定义事件名="父methods" />
 * （2）子组件 - this.$emit('自定义事件名',值)
 * 
 *  <!-- eventBus技术
 * 什么时候使用eventBus技术？
 *    当2个没有引用关系的组件之间要通信传值
 * 
 * eventBus技术本质是什么？
 *    空白Vue对象，只负责$on和$emit
 * -->
 */