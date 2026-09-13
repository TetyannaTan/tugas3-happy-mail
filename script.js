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

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${penerima}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${mailType}</td>
        <td>${area}</td>
        <td>${date}</td>
        <td>${message}</td>
        <td>${request}</td>
    `;
    orderTableBody.appendChild(row);
    form.reset();
});