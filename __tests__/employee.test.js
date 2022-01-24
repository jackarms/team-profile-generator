const Employee = require("../lib/employee.js");

test("testing of employee object", () => {
  const employee = new Employee("Jack", "01", "jackarms12@sbcglobal.net");
  expect(employee.name).toBe("Jack");
  expect(employee.id).toBe("01");
  expect(employee.email).toBe("jackarms12@sbcglobal.net");
});
