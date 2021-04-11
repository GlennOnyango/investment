var reg_form = document.querySelector("#reg_form");
var log_form = document.querySelector("#log_form");
var for_form = document.querySelector("#for_form");



reg_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(reg_form);

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "http://localhost/investment/php/Api.php",
        data: formData,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function(data) {

            console.log("SUCCESS : ", data);

        },
        error: function(e) {

            console.log("ERROR : ", e);

        },
        done: function(e) {

            console.log("Done :", e);
        }

    });





    console.log("done");
});

log_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(log_form);

    $.post("http://localhost/investment/php/Api.php",
        $("#log_form").serialize(),
        function(data, status) {

            if (data.code == 0) {
                console.log(data.message);
            } else {

                console.log(data.message);
                if (data.message == "client") {
                    window.location.replace("http://localhost/investment/client.html");
                } else {
                    window.location.replace("http://localhost/investment/admin.html");
                }

            }

        }, "json");

});
/*
for_form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const formData = new FormData(for_form);


  console.log("done");
});

*/