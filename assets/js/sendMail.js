function sendEmail() {
    Email.send({
        SecureToken: "5c85e59c-c2b6-4a27-a23c-305c724143a1",
        // Host : "smtp.elasticemail.com",
        // Username : "shihannuwanjith@gmail.com",
        // Password : "2450E6BD0C49A4C17189BBCE3D874CE7127C",
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