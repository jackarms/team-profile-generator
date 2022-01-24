const Manager = require("../lib/manager.js");

test("testing of manager object", () => {
  const manager = new Manager("Jack", "01", "jackarms12@sbcglobal.net", "08");
  expect(manager.name).toBe("Jack");
  expect(manager.id).toBe("01");
  expect(manager.email).toBe("jackarms12@sbcglobal.net");
  expect(manager.officeNumber).toBe("08");
});
