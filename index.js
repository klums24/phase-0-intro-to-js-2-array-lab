const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop();
}

function destructivelyRemoveFirstCat(name){
    cats.shift();
}

function appendCat(name) {
    const catsCopy = [...cats, name];
    return catsCopy;
}

function prependCat(name){
    const catsCopy = [name, ...cats];
    return catsCopy;
}

function removeLastCat(name){
    const catsCopy = cats.slice();
    catsCopy.pop();
    return catsCopy;
}

function removeFirstCat(name){
    const catsCopy = cats.slice();
    catsCopy.shift();
    return catsCopy;
}