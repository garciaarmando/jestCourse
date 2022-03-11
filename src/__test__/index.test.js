const randomStrings = require("../index.js");

//to can execute just certain tests, you can use your terminal and install the jest command using this command: sudo npm install -g jest

//describe() allows you to group tests together and give them a name

describe("Testing randomStrings functionalities", () => {
    test("Testing the functionality", () => {
        expect(typeof randomStrings()).toBe("string");
    });
    test("Test if a city doesn't exists", () => {
        expect(randomStrings()).not.toMatch(/Cordoba/);
    });
});

//jest genera el reporte del alcance de nuestras aplicaciones