# Promise and Async

Nodejs 天生的异步机制，在早期，通过回调函数来实现流程控制，进而无法避免的出现了多层嵌套的回调，俗称“回调地狱”。
```javascript
    getData(a,function(){
        getInfo("info",function(){
            getTItle("title",function(){
                getBody("body",function(){

                })
            })
        })
    })
```
多层嵌套的回调有两个致命的问题就是：

1. 无法捕获内部错误；
2. 

## promise对象
promise

## 闭包