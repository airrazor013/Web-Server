var inputs = {
  name:document.getElementById("name"),
  email:document.getElementById("email"),
  phoneNumber:document.getElementById("phone"),
  bestContactTime:document.getElementById("contactTime"),
  message:document.getElementById("message")
}

function setBestContactDivVisibility(){
  var bestContactDiv = document.getElementById("BestContactDiv");
  if(inputs.phoneNumber.value != "")
    bestContactDiv.style.display = "block";
  else
    bestContactDiv.style.display = "none";
}

function sendContactRequest(){

  var formData = {
    name: inputs.name.value,
    email: inputs.email.value,
    phoneNumber: inputs.phoneNumber.value,
    bestContactTime: inputs.bestContactTime.value,
    bestContactTimeRadio: document.querySelector('input[name="Time"]:checked').value,
    contactMethod: document.querySelector('input[name="ContactMethod"]:checked').value,
    message:inputs.message.value
  }
  console.log(JSON.stringify(formData, null, 2));
  if((formData.name == "" || formData.email == "")||
  (formData.phoneNumber != "" && formData.contactMethod == ""))
    alert("Please fill out all required fields.");
  else
    sendAjax(formData);
}

function sendAjax(data){
  $.ajax({
    type: "POST",
    url: "/api/contact",
    contentType: "application/json",
    dataType: "json",
    processData: true,
    xhrFields: {
      withCredentials: true
    },
    data: JSON.stringify(data),
    success: function(data){
      document.getElementById("alert").style.display="block";
    },
    error: function(){
      alert('There was an error submitting the form.\nPlease try again later');
    }
  });
}
