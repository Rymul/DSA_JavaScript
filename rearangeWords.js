var arrangeWords = function(text) {
    const words = text.toLowerCase().split(" ")
    words.sort((a, b) => a.length - b.length)
    let newText = words.join(" ")
    return newText[0].toUpperCase().concat(newText.slice(1))
};

console.log(arrangeWords("This function is pretty cool"))