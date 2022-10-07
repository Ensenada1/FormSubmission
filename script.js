// console.log("does this work? Testing testing test");
//  # is id . is class
//Grab the submit button
// write a variable that grabs the id  "submitButton"
let submitBtn = document.getElementById("submitButton");
let formSubmission = document.getElementById("addressForm");
let showingInfo = document.getElementById("showingInfo");
let errorsMessages = document.getElementById("errorMessages");
//Writing a variable start with one of these:
// let or const
// console.log(submitBtn);
// To grab elements on a webpage you can use one of the following:
// document.querySelector("")
// document.querySelectorAll("")
// document.getElementById("")
// document.getElementsByClassName("")
let mainHead = document.querySelector("#MainHeader");
mainHead.innerText = "Form Submission";

// Event listeners is what you can add to an element to watch certain actions
formSubmission.addEventListener("submit", (event) => {
  event.preventDefault(); // this stops the page from refreshing/
  // grab the ids first_name and last_name
  let lastName = document.getElementById("last_name");
  let firstName = document.getElementById("first_name");
  console.log(lastName.value);
  console.log(firstName.value);
  if (firstName.value.length < 2) {
    showingInfo.innerText = "First Name length is less than 2 characters";
  }
  else if (lastName.value.length < 2) {
    showingInfo.innerText = " Last Name length is less than 2 characters";
  }
  /*

conditionals are if else:
if (something is true){
  run this code
}

-----

  if (something is true ){
  run this code
} else if (This is tru) {
  run this code
} else {
  screw all the stuff above and just run this
}
------

if (something is true){
  run this code
} else {
  screw it and run this code.
}

else's are good for catch all
*/
});
