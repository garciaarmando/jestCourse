const text = "Hello world";
const fruits = ["apple", "banana", "orange"];
const reverseString = (str, callback) => {
    callback(str.split("").reverse("").join(""));
};
const reverseStringPromise = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
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

test("Testing a promise", () => {
    return reverseStringPromise("Hello").then(str => {
        expect(str).toBe("olleH");
    });
});

//testing a promise using async+await

test("Testing a promise with async-await", async() => {
    const str = await reverseStringPromise("Hello");
    expect(str).toBe("olleH");
});

//working with functions that will be executed before or after a test using the function afterEach()

// afterEach(() => console.log("After every test"));

//instead, using afterAll() allows you to execute some code after all the tests

// afterAll(() => console.log("After all the tests"));

//using beforeEach() allows you to execute some code before every test

// beforeEach(() => console.log("Before every test"));

//using beforeAll() allows you to execute some code before all the tests

// beforeAll(() => console.log("Before all the tests"));