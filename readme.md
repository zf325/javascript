#js 要点归纳
## 函数
- 函数传递采用值传递。

1. 传递基本类型

    传递的变量的值（内容）
    ```javascript
    function func(value){
        value = value+5;
        console.log(value)
    }
    var a = 10; 
    console.log(a); //10
    func(a); //15
    console.log(a);//10

    ```
    传递基本类型的时候，相当于在函数的内部声明了一个局部变量，复制了传递的变量的值，而js的作用域是以函数体（块）进行划分的，座椅函数内部变量的变化不会影响到外部的变量。

2. 传递引用类型变量

    实际上传递的时引用变量的地址，严格意义上来讲还是值传递。

    ```javascript
        function func(obj){
            console.log(obj.name = "jack");
        }

        var person = {
            name:"lisa"     //lisa
        };

        func(person); //jack

        console.log(person.name); //jack

    ```

    应为传入到函数体内部的时对象person的地址，所以在函数内部定义的obj对象也只向了person对象的地址空间。也就意味着，两个对象指向了同一个空间，所以修改obj的内容，也会在person的身上反映出来。

3. 为什么上面的示例不是引用类型呢？

    ```
     function func(obj){
         obj.name = "jack";
         obj = {name:lily};
         console.log(obj.name);
        }

        var person = {
            name:"lisa"     //lisa
        };

        func(person); //lily

        console.log(person.name); //jack
    ```
    如果是引用类型的话，在函数内部：obj = {name:lily}；相当于重新指向了一个对象，那么外部的person就指向了这个心的（lily）对象，所以最后打印出来的name应该是lily。然而并不是这样，obj.name = "jack"，此时，obj、person指向同一个地址空间，他们的name已经被修改城了jack。obj = {name:lily};obj有指向了新的对象{name:lily}，此时obj的name是lily，person的name是jack，退出函数是，临时对象被销毁。person的name仍为jack。


## 类型检测，instanceof 与 type of

## 

