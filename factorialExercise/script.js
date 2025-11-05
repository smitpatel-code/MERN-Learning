console.log ("Factorial Exercise");

const factorial=(n)=>{
    let fact =1;
    for (i=n;i>0;i--){
        fact=fact*i;

    }
    return fact;
}

let ans=factorial(9);
console.log(ans);