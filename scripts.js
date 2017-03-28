function validateContactForm() {
  var cform = document.getElementById("contact_form")
  var fname = cform.elements["firstName"].value;
  var lname = cform.elements["lastName"].value;
  var emailAddress = cform.elements["emailAddress"].value;
  var question = cform.elements["question"].value;
  var problem = cform.elements["problem"].value;
  var orderStatus = cform.elements["orderStatues"].value;
  var comment = cform.elements["comment"].value;

  if(fname == "") {
    alert("First Name must be filled out");
    return false;
  } else if(lname == "") {
    alert("Last Name must be filled out");
    return false;
  } else if(emailAddress == "") {
    alert("Email Address must be filled out");
    return false;
  } else if(question == "Question" || problem == "Problem" || orderStatus == "Order Status") {
    alert("Please select a reason for contact");
    return false;
  } else if(comment == "") {
    alert("Please enter a comment for contact");
    return false;
  } else {
    return true;
  }
}

window.onload = initDate;
function initDate() {

}