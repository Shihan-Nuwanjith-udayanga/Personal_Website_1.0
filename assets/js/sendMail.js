function sendEmail() {
    Email.send({
        SecureToken: "611a6175-9d9c-46e8-b5b7-1b9bba5e4d19",
        // Host : "smtp.elasticemail.com",
        // Username : "shihannuwanjith@gmail.com",
        // Password : "5C882FD79272A70518FC4AFF801E96FAE348",
        To : 's92067840@ousl.lk',
        From : "shihannuwanjith@gmail.com",
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " +  document.getElementById("mail").value
            + "<br> Phone No: " +  document.getElementById("tel").value
            + "<br> Message: " +  document.getElementById("message").value
    }).then(
        message => alert("Message Sent Successfully")
    );
}