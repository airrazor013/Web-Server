function sendData() {
  var form = document.getElementById("myForm");
  var FD = new FormData(form);
  var object = {};
  FD.forEach((value, key) => {object[key] = value});
  var json = JSON.stringify(object);

  console.log(json);

   $.ajax({
      type: "POST",
      url: "/api/contactMe",
      contentType: "application/json",
      processData: true,
      data: {
          o: json
      },
      success: function(data) {
          //your code here
      },
      error: function(data) {
          alert('Error');
      }
   });
}
