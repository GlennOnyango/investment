$( document ).ready(function() {

    // Assign handlers immediately after making the request,
    // and remember the jqxhr object for this request


let myinput = $(".myinput");
let wizards = $("#wizards-list");


myinput.on("input",()=>{

  fetch(`https://techsupport.dewcis.com/dataworks/?value_from_search_post=${myinput.val()}`, {
    method: "GET"
  
})
.then(function(response) { return response.json() })
.then(function(data) {

  wizards.remove("option");

data.forEach(element => {
console.log(element);
  wizards.append(`<option value="${element["post_title"]}"/>`);

});

})
.catch(function(errror) { console.error(errror); });




});

  


  
  });
  
  