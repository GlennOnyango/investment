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

$(document).ready(function() {
    // your code

    $.get("http://localhost/investment/php/Api.php", { option: "Data" }, function(data, status) {
        console.log("Data: " + typeof data + "\nStatus: " + status);

        const obj = JSON.parse(data);
        console.log(obj);
        $("#client_name").text(obj.fname);


        //Editables

        $("#editable_acc").text(obj.acc_no);
        $("#editable_fname").text(obj.fname);
        $("#editable_lname").text(obj.sname);
        $("#editable_mail").text(obj.mail);
        $("#editable_phone").text(obj.pno);

    });


});