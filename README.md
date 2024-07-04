<h1>H1 Creator - A Simple Web App for Creating Headings</h1>
This is a README file for the H1 Creator, a simple web application that allows users to create and store H1 headings within the local storage thus they will persist on page reload.

<h2>Features: </h2>

<h3>Users can type their H1 content into a designated area.</h3>
Upon pressing Enter, the content is converted into an H1 element and added to a list.
Existing headings are retrieved from local storage and displayed on page load.
All created headings are stored in the browser's local storage for persistence.

<h2>Technologies Used:</h2>

<h3>HTML:</h3> For the basic structure of the web page.
<h3>CSS:</h3> Likely used for styling elements like the header, headings, and creator area (not included in this snippet).
<h3>JavaScript:</h3> Handles user interaction, creates H1 elements, and interacts with local storage.
<h3>Jest:</h3> Used for unit tests for the various functionalities in the application.

<h3>Files:</h2>

index.html: The main HTML file containing the page structure and references to JavaScript and CSS files. <br />
script.js: The JavaScript file containing all the application logic. <br />
script.test.js: The test file containing all the test functions written using jest. <br />
index.css: The CSS file containing styles for the application. <br />

<h2>How to Use:</h2>

Open the index.html file in a web browser.
Type your desired H1 content into the designated area.
Press Enter to create an H1 element and add it to the list.
You can see previously created headings stored in local storage displayed on the page.

<h2>Running Tests:</h2>

This project includes a package.json file that specifies dependencies and scripts.

To run the tests:

Make sure you have Node.js and npm (or yarn) installed on your system.
Open a terminal in the project directory.
Run the command npm test (or yarn test if using yarn). This will execute the tests using Jest.
