const {Circle, Square, Triangle} = require("./shapes")

describe("Circle", () =>{
    test("renders correctly", () => {
        const shape = new Circle();
        const color = "red";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}"/>`)
    });
});

describe("Square", () =>{
    test("renders correctly", () => {
        const shape = new Square();
        const color = "blue";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="50" height="200" width="200" fill="${color}"/>`)
    });
});

describe("Triangle", () =>{
    test("renders correctly", () => {
        const shape = new Triangle();
        const color = "green";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="250" width="150" points="0,200 300,200 150,0" fill="${color}"/>`)
    });
});

