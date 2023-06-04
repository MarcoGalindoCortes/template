const index = require("../index");

describe("Pruebas de Cossnverter", () => {
    test("Creacion de archivos json basados en los yml", () => {
        expect(index.saludar()).toBe("HOLA");
    })
});