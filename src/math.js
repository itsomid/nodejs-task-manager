const calculateTip = (total, tipPercent = .25) => {
    const tip = total * tipPercent
    return total + tip
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}
const fahrenheitToCelsius = (temp) =>{
    return (temp -32 ) / 1.8
}
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be positive!')
            }
            resolve(a + b)
        }, 2000)
    })
}

module.exports = {
    calculateTip,
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    add
}