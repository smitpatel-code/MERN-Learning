console.log("Loops");
for(let i=0; i<10; i++){
    console.log (i);
}

let obj={
    "name":"Smit",
    "Role": "Software Developer",
    "Company": "Google"
}

//forin loop

for (const key in obj) { 
    const element = obj[key];
    console.log(key +":"+ element);
}

//forof loop

for (const element of "Smit") {
    console.log(element)
}