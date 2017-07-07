$(function() {
	$('#submit').click(sendForm);

});

function sendForm(e) {
	e.preventDefault();
	$.ajax({
		url: "https://formspree.io/lvivzatochka@gmail.com",
		method: "POST",
		data: {
			Name: $('#name').val(),
			Email: $('#mail').val(),
            TelephoneNumber:$('#telephone').val(),
            Text:$('#Mymessage').val()
            },
		dataType: "json"
	})
	.done(function () {
        document.getElementById("contact-us").reset();
        alert("Повідомлення надіслано.Дякуємо!");
    });
}