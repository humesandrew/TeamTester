const Intern = require("../lib/Intern");



// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

test("Can set intern's school", () => {
  const testValue = "OSU";
  const e = new Intern("Andy", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole returns Intern", () => {
  const testValue = "Intern";
  const e = new Intern("Andy", 1, "test@test.com", "OSU");
  expect(e.getRole()).toBe(testValue);
});

test("getSchool returns School", () => {
  const testValue = "OSU";
  const e = new Intern("Andy", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});