function validateContactForm() {
  var fname = document.forms["ContactForm"]["firstName"].value;
  var lname = document.forms["ContactForm"]["lastName"].value;
  var emailAddress = document.forms["ContactForm"]["emailAddress"].value;
  var question = document.forms["ContactForm"]["question"].value;
  var problem = document.forms["ContactForm"]["problem"].value;
  var orderStatus = document.forms["ContactForm"]["orderStatues"].value;
  var comment = document.forms["ContactForm"]["comment"].value;

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
