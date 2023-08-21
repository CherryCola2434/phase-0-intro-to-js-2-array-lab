const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat() {
   cats.push ('Ralph') 
}

function destructivelyPrependCat() {
    cats.unshift ('Bob')
}

function destructivelyRemoveLastCat() {
    cats.pop ('Garfield')
}

function destructivelyRemoveFirstCat() {
    cats.shift ()
}

function appendCat() {
    var copyOfCats = [...cats] 
    copyOfCats.push ('Broom')
    return copyOfCats
}

function prependCat() {
    var copyOfCats = [...cats] 
    copyOfCats.unshift ('Arnold')
    return copyOfCats
}

function removeLastCat() {
    var copyOfCats = [...cats] 
    copyOfCats.pop ()
    return copyOfCats
}

function removeFirstCat() {
    var copyOfCats = [...cats] 
    copyOfCats.shift ()
    return copyOfCats
}