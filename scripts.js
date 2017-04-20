function validateContactForm() {
  var cform = document.getElementById("contact_form")
  var fname = cform.elements["firstName"].value;
  var lname = cform.elements["lastName"].value;
  var emailAddress = cform.elements["emailAddress"].value;
  var question = cform.elements["question"].value;
  var problem = cform.elements["problem"].value;
  var orderStatus = cform.elements["orderStatus"].value;
  var comment = cform.elements["comments"].value;

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

function initDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd='0'+dd
  }
  if(mm<10) {
      mm='0'+mm
  }
  today = mm+'/'+dd+'/'+yyyy;
  document.getElementById('today_date').innerHTML = today;
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementByClassName("mySlides");
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); //Change ever 2 sseconds
}
