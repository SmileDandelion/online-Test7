'use strict';

function collect_all_even(collection) {
    var newArray = [];
    for(var a=0;a<collection.length;a++){
        if(collection[a]%2 === 0){
            newArray.push(collection[a]);
        }
    }
    return newArray;
}

module.exports = collect_all_even;
