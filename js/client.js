var change_the_page = document.querySelectorAll("#change_the_page");
var show_page = document.querySelectorAll(".show_page");

var make_payments = document.querySelector("#make_payments");


change_the_page.forEach(element => {
    element.addEventListener("click", () => {

        show_page.forEach(elem => {
            if (elem.id == element.classList[2]) {
                elem.classList.remove("d-none");
            } else {
                elem.classList.add("d-none");
            }
        });
    });
});

make_payments.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(make_payments);
    //    for (var value of formData.values()) {
    //      console.log(value);
    //}
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



$(document).ready(function() {
    // your code

    $.get("http://localhost/investment/php/Api.php", { option: "Data" }, function(data, status) {

        const obj = JSON.parse(data);
        $("#client_name").text(obj.fname);


        //Editables

        $("#editable_acc").text(obj.acc_no);
        $("#editable_fname").text(obj.fname);
        $("#editable_lname").text(obj.sname);
        $("#editable_mail").text(obj.mail);
        $("#editable_phone").text(obj.pno);


        //form init

        $("#acc_no_make_pay").val(obj.acc_no);

    });


});