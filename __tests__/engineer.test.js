const Engineer = require("../lib/engineer.js");

test("testing of engineer object", () => {
  const engineer = new Engineer(
    "Joe",
    "01",
    "jackarms12@hotmail.com",
    "jackarms"
  );
  expect(engineer.name).toBe("Joe");
  expect(engineer.id).toBe("01");
  expect(engineer.email).toBe("jackarms12@hotmail.com");
  expect(engineer.github).toBe("jackarms");
});
