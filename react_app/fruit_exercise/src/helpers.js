function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item){
    return items.filter(function(ele){
        return ele !== item;
    });
}

export {choice, remove};