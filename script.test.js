document.body.innerHTML = `
<ul id='my-headings'></ul>
<div id='creator'></div>
`;

require("./script.js");
const creator = document.getElementById("creator");
const myHeadings = document.getElementById("my-headings");

test("Check if h1 returns truthy on enter button click", () => {
  // Simulate Enter key press
  creator.dispatchEvent(new KeyboardEvent("keypress", { key: "Enter" }));
  // Check if a new h1 element is added
  const result = myHeadings.querySelector("h1:last-child");

  // Assert that the new h1 is created
  expect(result).toBeTruthy();
});
test("Check if h1 is added on enter button click", () => {
  // Simulate Enter key press
  creator.dispatchEvent(new KeyboardEvent("keypress", { key: "Enter" }));
  // Check if a new h1 element is added
  const result = myHeadings.querySelector("h1:last-child");

  // Testing if the h1 content matches the creator's content
  expect(result.textContent).toBe(creator.textContent);
});

test("Check if h1 content is empty when creator content is empty", () => {
  // Simulate Enter key press with an empty creator
  creator.textContent = "";
  creator.dispatchEvent(new KeyboardEvent("keypress", { key: "Enter" }));

  // Check if a new h1 element is added
  const result = myHeadings.querySelector("h1:last-child");

  // Assert that the new h1's content is empty
  expect(result.textContent).toBe("");
});
