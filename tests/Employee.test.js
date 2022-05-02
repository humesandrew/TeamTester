const Employee = require("../lib/Employee");

test("Can create Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set employee name", () => {
  const name = "Robert";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set employee ID", () => {
  const testValue = 50;
  const e = new Employee("Robert", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email", () => {
  const testValue = "test@test.com";
  const e = new Employee("Robert", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("getName returns Name", () => {
  const testValue = "Doris";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("getId returns ID", () => {
  const testValue = 50;
  const e = new Employee("Robert", testValue);
  expect(e.getId()).toBe(testValue);
});

test("getEmail returns Email", () => {
  const testValue = "test@test.com";
  const e = new Employee("Robert", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole returns Employee", () => {
  const testValue = "Employee";
  const e = new Employee("Robert", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});