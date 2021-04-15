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


$("#date_range").submit(function(e) {
    e.preventDefault();
    const formData = new FormData(this);



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

            $("#my_tbody").html(data);

        },
        error: function(e) {

            console.log("ERROR : ", e);

        },
        done: function(e) {

            console.log("Done :", e);
        }

    });


});


function getpaymnet(acc_no) {
    $.get("http://localhost/investment/php/Api.php", { account_number: acc_no }, function(data, status) {

        $("#my_tbody").html(data);

    });

}


$(document).ready(function() {
    // your code

    var account_number = null;
    $.get("http://localhost/investment/php/Api.php", { option: "Data" }, function(data, status) {

        const obj = JSON.parse(data);
        $("#client_name").text(obj.fname);


        //Editables

        $("#editable_acc").text(obj.acc_no);
        $("#editable_fname").text(obj.fname);
        $("#editable_lname").text(obj.sname);
        $("#editable_mail").text(obj.mail);
        $("#editable_phone").text(obj.pno);


        account_number = obj.acc_no;
        //form init

        $("#acc_no_make_pay").val(obj.acc_no);

        $("#acc_no_pyda").val(obj.acc_no);

        if (typeof(Storage) !== "undefined") {
            // Store
            sessionStorage.setItem("account_number", obj.acc_no);

        } else {
            console.log("Sorry, your browser does not support Web Storage...");
        }


        getpaymnet($("#editable_acc").text());

    });



});