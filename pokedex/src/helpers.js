function padId(imgId){
    if (imgId < 10){
        return ("00"+imgId);
    } else if (imgId < 100){
        return ("0"+imgId);
    } else if (imgId < 1000){
        return imgId;
    }
}


function createList(listInput){
    let pokemonOutList = [];
    var i;
    for(i = 0; i < 4; i++){
        let randomIndex = Math.floor(Math.random() * listInput.length);
        let randomPokemon = listInput[randomIndex];
        pokemonOutList.push(randomPokemon);
        listInput.splice(randomIndex, 1); //remove from main list
    }
    return [pokemonOutList, listInput]
}


function splitLists(listInput){
    let outArray1 = createList(listInput);
    console.log(outArray1)
    let outArray2 = createList(outArray1[1]);
    let list1 = outArray1[0];
    let list2 = outArray2[0];
    return {list1, list2}
}


function calcExp(pokeList){
    let exp = pokeList.reduce((sum, p) => sum + p.base_experience, 0)
    return exp
}

export default padId;
export { padId, splitLists, calcExp };