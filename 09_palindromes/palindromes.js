const palindromes = function (string) {
    string = string.replace(/ /g,'');
    string = toAlphanumeric(string);
    string = string.toLowerCase();\
    
    console.log(string);
    stak = [...string];
    queue = string.split('');

    while(stak.length !== 0){
        char = stak[stak.length - 1];
        char2 = queue[0];
        if(char != char2){
            return false;
        }
        stak.pop();
        queue.shift();
    }
    return true;

};

const toAlphanumeric =  function (string){
    let i, len;
    for(i = 0, len = string.length; i < len; i++){
        let code = string.charCodeAt(i);
        if( !(code > 47 && code < 58) &&
            !(code > 64 && code < 91) && 
            !(code > 96 && code < 123)){
                string = string.slice(0,i) + string.slice(i + 1);
            }
    }
    return string;
}

// Do not edit below this line
module.exports = palindromes;
