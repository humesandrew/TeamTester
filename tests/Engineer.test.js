
const Engineer = require("../lib/Engineer");


// can i create an Engineer, can I create his GH, does it render as a link// 

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

test("Can create Github account", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Doris", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole returns Engineer", () => {
  const testValue = "Engineer";
  const e = new Engineer("Doris", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

