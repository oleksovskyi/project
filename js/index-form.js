$(function() {
	$('#submit').click(sendForm);

});

function sendForm(e) {
	e.preventDefault();
	$.ajax({
		url: "https://formspree.io/oleksovskyi@outlook.com",
		method: "POST",
		data: {
			FirstName: $('#first_name').val(),
			LastName:$('#last_name').val,
			Email: $('#mail').val(),
            TelephoneNumber:$('#telephone').val(),
            Text:$('#Mymessage').val()
            },
		dataType: "json"
	})
	.done(function () {
        document.getElementById("contact_form").reset();
        alert("Thank you for your message");
    });
}