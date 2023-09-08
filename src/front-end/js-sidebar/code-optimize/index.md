# js编码技巧

https://mp.weixin.qq.com/s/e2rOHZIutcdlMzZAUJTNZw

- 使用函数式编程概念如纯函数和函数组合
```javascript
// 纯函数
function add(a, b) {
 return a + b;
 }
  
 // 函数组合
 const multiplyByTwo = value => value * 2;
 const addFive = value => value + 5;
 const result = addFive(multiplyByTwo(3));
```

- 封装条件语句
同上，if里的条件越多越不利于接盘侠的维护，不利于人脑的理解，一眼看过去又是一堆逻辑。多个逻辑应该化零为整。
```javascript
大脑：'别来碰我，让我静静'
// 不好的
if (fsm.state === 'fetching' && isEmpty(listNode)) {
 // ...
}
// 好的
shouldShowSpinner(fsm, listNode){
 return fsm.state === 'fetching' && isEmpty(listNode)
}
if(shouldShowSpinner(fsm, listNode)){
 //...doSomething
}
```

- 函数应该只做一件事
函数式写法推崇柯里化, 一个函数一个功能，可拆分可组装。
```javascript
// 不好的
function createFile(name, temp) {
 if (temp) {
   fs.create(`./temp/${name}`);
 } else {
   fs.create(name);
 }
}
// 好的
function createFile(name) {
 fs.create(name);
}
function createTempFile(name) {
 createFile(`./temp/${name}`)
}
```
再来一个栗子

函数要做的事情如下：

遍历clients数组

遍历过程中，通过lookup函数得到一个新的对象clientRecord

判断clientRecord对象中isActive函数返回的是不是true,

```javascript
isActive函数返回true,执行email函数并把当前成员带过去
// 不好的
function emailClients(clients) {
 clients.forEach((client) => {
   const clientRecord = database.lookup(client);
   if (clientRecord.isActive()) {
     email(client);
   }
 });
}
// 好的
function emailClients(clients) {
 clients
   .filter(isClientRecord)
   .forEach(email)
}
function isClientRecord(client) {
 const clientRecord = database.lookup(client);
 return clientRecord.isActive()
}
```
上面不好的栗子一眼看过去是不是感觉一堆代码在那，一时半会甚至不想去看了。

好的栗子，是不是逻辑很清晰，易读。

巧用filter函数，把filter的回调单开一个函数进行条件处理，返回符合条件的数据
符合条件的数据再巧用forEach，执行email函数

- 函数参数两个以下最好
说一千道一万，就是为了优雅，就是为了可读性好。
```javascript
// 不好的
function createMenu(title, body, buttonText, cancellable) {
 // ...
}
// 好的
const menuConfig = {
 title: 'Foo',
 body: 'Bar',
 buttonText: 'Baz',
 cancellable: true
};
function createMenu(config){
 // ...
}
createMenu(menuConfig)
```

- 使用方法链
链式写法也是代码优雅之道的重头戏。

ps：发明这个的程序员肯定是后端出身的，这种写法在PHP的CI框架中见过。
```javascript
// 不好的
class Car {
 constructor() {
   this.make = 'Honda';
   this.model = 'Accord';
   this.color = 'white';
 }
 setMake(make) {
   this.make = make;
 }
 save() {
   console.log(this.make, this.model, this.color);
 }
}
const car = new Car();
car.setMake('Ford');
car.save();
// 好的
class Car {
 constructor() {
   this.make = 'Honda';
   this.model = 'Accord';
   this.color = 'white';
 }
 setMake(make) {
   this.make = make;
   // NOTE: return this是为了用链式写法
   return this;
 }
 save() {
   console.log(this.make, this.model, this.color);
   // NOTE:return this是为了用链式写法
   return this;
 }
}
const car = new Car()
 .setMake('Ford')
 .save();
 ```
