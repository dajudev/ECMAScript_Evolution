const fnAsync = ()=>{    
    return new Promise((resolve,reject)=>{
        (true)
            ?setTimeout(() => resolve('AsynC'), 2000)
            :reject(new Error("Error!"));
    })
}

const anotherFunc =  async () => {
    const something = await  fnAsync();
    console.log(something);
    console.log("FIN");
};

console.log("Before");
anotherFunc();
console.log("After");