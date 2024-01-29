// function sendEmail() {
//     Email.send({
//         SecureToken: "611a6175-9d9c-46e8-b5b7-1b9bba5e4d19",
//         // Host : "smtp.elasticemail.com",
//         // Username : "shihannuwanjith@gmail.com",
//         // Password : "5C882FD79272A70518FC4AFF801E96FAE348",
//         To : 's92067840@ousl.lk',
//         From : "shihannuwanjith@gmail.com",
//         Subject : "New Contact Form Enquiry",
//         Body : "Name: " + document.getElementById("name").value
//             + "<br> Email: " +  document.getElementById("mail").value
//             + "<br> Phone No: " +  document.getElementById("tel").value
//             + "<br> Message: " +  document.getElementById("message").value
//     }).then(
//         message => alert("Message Sent Successfully")
//     );
// }

const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `<b>Name :</b> ${name.value}<br><br>
        <b>Email Address :</b> ${email.value}<br><br>
        <b>Mobile Number :</b> ${mobile.value}<br><br>
        <b>Message :</b> ${message.value}<br>`;

    Email.send({
        SecureToken: "70fa1ba8-f5bd-4b57-854f-b30ffe361605",
        To: "shihannuwanjith@gmail.com",
        From: "shihannuwanjith@gmail.com",
        Subject: "Contact Form Enquiry",
        Body: bodyMessage,
    }).then((message) => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success",
            });
        }
    });CF110FFAA06169F93957BC1CCBF6429F4139
}

function checkInputs() {
    const items = document.querySelectorAll(".form-control");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex =
        /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTextEmail = document.querySelector(".form-text.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTextEmail.innerText = "Enter a valid email address";
        } else {
            errorTextEmail.innerText = "Email Address can't be blank";
        }
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (
        !name.classList.contains("error") &&
        !email.classList.contains("error") &&
        !mobile.classList.contains("error") &&
        !message.classList.contains("error")
    ) {
        sendEmail();
        console.log("ok");

        form.reset();
        return false;
    }
});

