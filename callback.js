
try{
getData("file",function(data){
    console.log(data)
        getInfo(data,"info",function(data){
            getInfo(data,"title",function(data){
                getInfo(data,"body",function(data){
                    console.log(data)
                })
            })
        });
    });
}catch(e){
    throw(e);
    // console.log(e)
}



function getData(path,callback){
    //模拟获取到的数据
    let data = {
        info:{
            title:{
                body:"haha"
            }
        }
    };
    callback(data);
}

function getInfo(data,key,callback){
    // console.log(data)
    callback(data[key]);
}