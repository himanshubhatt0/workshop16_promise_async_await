number = function(a,b) {
    console.log("a: "+a , "b: "+b);
    sum(a,b).then(result => {
        console.log("Value: "+result);
    }) .catch(err => {
        console.log(err);
        console.log("Empty..........");
    })
    
}

sum = function(a,b){
    return new Promise(function(resolve, reject){
        if(a+b>0) {
        resolve(a*b);  }
        else {
            reject("Result is less than the data provided")
        }

    })
}

number(1,1);