//Adj: Crazy, Amazing, fire
//Shop Name: Engine, foods, garments
//Another word: bros, limited, hub

const adjective={
    0: "Crazy",
    1: "Amazing",
    2: "fire"
}
const name={
    0:"Engine",
    1: "foods",
    2: "garments"
}

const word={
    0: "bros",
    1: "limited",
    2: "hub"
}

const randomName=Math.floor(Math.random()*3);
const randomWord=Math.floor(Math.random()*3);
const randomAdj=Math.floor(Math.random()*3);

console.log(`${adjective[randomAdj]} ${name[randomName]} ${word[randomWord]}`)