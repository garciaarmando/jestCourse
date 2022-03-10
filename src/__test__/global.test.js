const text = "Hello world";
const fruits = ["apple", "banana", "orange"];
const reverseString = (str, callback) => {
    callback(str.split("").reverse("").join(""));
};
const reverseStringPromise = str => {
    return new Promise((resolve, reject) => {
        if (!string) {
            reject(Error("String is empty"));
        }
        resolve(str.split("").reverse().join(""));
    });
};

// test function expects two params, the first is the description of the test, the second is the function to test

test("Must contain a string", () => {
    //the comparision has to be exactly the same as the string
    expect(text).toMatch(/world/);
});

test("Must contains an element called apple", () => {
    //when you expect an array, you can use toContain

    expect(fruits).toContain("apple");
});

test("a value greater than another", () => {
    //when you expect a number, you can use toBeGreaterThan
    expect(10).toBeGreaterThan(9);
});

test("testing a boolean", () => {
    //when you expect a boolean, you can use toBeTruthy
    expect(true).toBeTruthy();
});

test("Testing a callback", () => {
    //when you expect a callback, you can use toBe
    reverseString("Hello", str => {
        expect(str).toBe("olleH");
    });
});

test("Testing a promise", () => {});