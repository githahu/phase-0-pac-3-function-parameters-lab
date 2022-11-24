function introduction(name){
    console.log('Hi, my name is ${Aki}.');
}
function useTwoValues(val1, val2){
    console.log('THe two values are ${val1} and ${val2}.');
}


function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}