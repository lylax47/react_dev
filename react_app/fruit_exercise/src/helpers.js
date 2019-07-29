function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item){
    console.log(item);
    return items.filter(function(ele){
        return ele !== item;
    });
}

export {choice, remove};