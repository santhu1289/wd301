/* eslint-disable no-unused-vars */
var newUser = {
  name: "Jane",
  id: 1,
  isAdmin: false,
};
var name1 = "hello";
name1 = 42;
name1 = false;
function printHello() {
  console.log("Hello!");
}
function printHello1() {
  console.log("Hello!");
  // return "hello"; // TypeScript will give an error here
}
function throwError() {
  throw new Error("An error occurred!");
}
function addUser(user) {
  return user.name + " added successfully";
}
