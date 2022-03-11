const cities = ["Mexico City", "Bogota", "Lima", "Buenos Aires", "Guadalajara"];

const randomStrings = () => {
    const string = cities[Math.floor(Math.random() * cities.length)];

    return string;
};
const reverseStringPromise = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error("String is empty"));
        }
        resolve(str.split("").reverse().join(""));
    });
};

module.exports = randomStrings;