const getTheTitles = function(book) {
    let array = [];
    book.forEach(book => array.push(book["title"]));
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
