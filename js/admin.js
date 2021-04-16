var change_the_page = document.querySelectorAll("#change_the_page");
var show_page = document.querySelectorAll(".show_page");


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



function getpaymnet(acc_no) {
    $.get("http://localhost/investment/php/Api.php", { admin: acc_no }, function(data, status) {

        $("#my_tbody").html(data);

    });


}

function approve_reject(e) {
    console.log(e.id + "" + e.textContent);
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