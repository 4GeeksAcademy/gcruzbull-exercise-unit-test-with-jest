const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInEuro) {
    let valueInYen = valueInDollar * 146.26;
    return valueInYen;
}

const fromYenToPound = function(valueInEuro) {
    let valueInPound = valueInYen * 0.005;
    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};



