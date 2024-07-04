const creator = document.getElementById("creator");
const myHeadings = document.getElementById("my-headings");

// Function to get headings from local storage
const getStoredHeadings = () => {
  const storedData = localStorage.getItem("headings");
  if (storedData) {
    return JSON.parse(storedData);
  } else {
    // Return empty array if no data is stored
    return [];
  }
};

// Function to store headings in local storage
const storeHeadings = (headings) => {
  localStorage.setItem("headings", JSON.stringify(headings));
};

// Function for assigning content from the creator to the result
const titleCreator = () => {
  // create an h1 element that will be appended to the empty ul
  let result = document.createElement("h1");

  result.contentEditable = "true";

  result.textContent = creator.textContent;

  // clear the creator text content after assigning the value to the result
  creator.textContent = "";

  // append the result h1 element to the ul element with id "my-headings"
  myHeadings.appendChild(result);

  // Get existing headings or create an empty array
  let headings = getStoredHeadings();
  // Add the newly created heading to the array
  headings.push(result.textContent);
  // Store the updated headings array in local storage
  storeHeadings(headings);
};

// Load headings from local storage on page load
const storedHeadings = getStoredHeadings();
// Add each stored heading as an h1 element to the "my-headings" list
storedHeadings.forEach((heading) => {
  let h1 = document.createElement("h1");
  h1.textContent = heading;
  myHeadings.appendChild(h1);
});

// The titleCreator function is called on enter button click
creator.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    titleCreator();
  }
});
