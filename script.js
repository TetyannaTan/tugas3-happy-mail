const form = document.getElementById("orderForm");

const orderTableBody = document.getElementById("orderTableBody");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const penerima = document.getElementById("penerima").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const mailType = document.getElementById("mail-type").value;
    const area = document.getElementById("area").value;
    const date = document.getElementById("date").value;
    const message = document.getElementById("message").value;
    const request = document.getElementById("request").value;

    const rows = orderTableBody.querySelectorAll(".order-data-row");

    rows[0].cells[0].textContent = name;
    rows[0].cells[1].textContent = penerima;
    rows[0].cells[2].textContent = email;

    rows[1].cells[0].textContent = phone;
    rows[1].cells[1].textContent = mailType;
    rows[1].cells[2].textContent = area;

    rows[2].cells[0].textContent = date;
    rows[2].cells[1].textContent = message;
    rows[2].cells[2].textContent = request;

    form.reset();

});