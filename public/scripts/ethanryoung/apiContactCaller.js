function sendData() {
  var form = document.getElementById("myForm");
  var FD = new FormData(form);
  var object = {};
  FD.forEach((value, key) => {object[key] = value});
  var json = JSON.stringify(object);

  console.log(json);

  if (object.name != "" && object.email != ""){
         $.ajax({
            type: "POST",
            url: "/api/contactMe",
            contentType: "application/json",
            processData: true,
            data: json,
            success: function(data) {
                window.location = "/index";
            },
            error: function(data) {
                alert('Error');
            }
         });
       }
       else {
         alert('One or more fields are empty.');
       }
}
