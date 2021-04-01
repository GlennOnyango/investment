var reg_form = document.querySelector("#reg_form");
var log_form = document.querySelector("#log_form");
var for_form = document.querySelector("#for_form");

reg_form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const formData = new FormData(reg_video);


  console.log("done");
});

log_form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const formData = new FormData(log_form);


  console.log("done");
});

for_form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const formData = new FormData(for_form);


  console.log("done");
});