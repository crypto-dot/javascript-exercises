const removeFromArray = function(array, ...removeElem) {
    if(removeElem.length > 0){
        for(let i = 0; i < removeElem.length; i++){
            let j = array.findIndex(element => element === removeElem[i]);
            if(j == -1) {
                continue;
            }
            array.splice(j,1);
            }
        }
        return array;
    }

// Do not edit below this line
module.exports = removeFromArray;
