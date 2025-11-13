console.log("This is promise");
let prom1=new Promise((resolve, reject)=>{
    let a=Math.random();
    if(a=1){
        reject("NO value smaller than 1 needed");
    }
    else{
        setTimeout(()=>{
            console.log("Done");
            resolve("I am done");
        }, 2000);
    }
})

prom1.then((a)=>{
    console.log(a);
})