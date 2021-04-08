var reg_form = document.querySelector("#reg_form");
var log_form = document.querySelector("#log_form");
var for_form = document.querySelector("#for_form");
var change_the_page = document.querySelectorAll("#change_the_page");
var show_page = document.querySelectorAll(".show_page");



/*reg_form.addEventListener("submit",(e)=>{
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

*/
change_the_page.forEach(element => {
  element.addEventListener("click",()=>{
    
show_page.forEach(elem => {
  console.log(elem.id);
  if (elem.id == element.classList[2] ){
    elem.classList.remove("d-none");
  }else{
    elem.classList.add("d-none");
  }
});
  });
});