const Intern = require("../lib/intern.js");

test("testing of intern object", () => {
  const intern = new Intern(
    "Jack",
    "01",
    "jackarms12@sbcglobal.net",
    "Intern",
    "Texas State"
  );
  expect(intern.name).toBe("Jack");
  expect(intern.id).toBe("01");
  expect(intern.email).toBe("jackarms12@sbcglobal.net");
  expect(intern.title).toBe("Intern");
  expect(intern.school).toBe("Texas State");
});
